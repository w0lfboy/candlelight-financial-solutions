import { NextRequest } from "next/server";
import { Resend } from "resend";

const DEFAULT_TO = "info@candlelightfs.com";
/**
 * Verify this domain (or use an address on it) in Resend before going live.
 * See README.md for GoDaddy DNS steps.
 */
const DEFAULT_FROM =
  "Candlelight Financial Solutions <notifications@candlelightfs.com>";

type IntakePayload = Record<string, unknown>;

function formatIntakeLines(data: IntakePayload): string {
  const line = (label: string, value: string | string[] | undefined) => {
    if (value === undefined || value === "") return `${label}: —`;
    const v = Array.isArray(value) ? value.join(", ") : String(value);
    return `${label}: ${v}`;
  };

  return [
    line("Name", `${data.firstName ?? ""} ${data.lastName ?? ""}`.trim()),
    line("Email", data.email as string | undefined),
    line("Phone", data.phone as string | undefined),
    line("Age range", data.ageRange as string | undefined),
    line("Marital status", data.maritalStatus as string | undefined),
    line("Dependents", data.hasDependents as string | undefined),
    line("Number of dependents", data.dependentsCount as string | undefined),
    line("Household income", data.income as string | undefined),
    line("Investable assets", data.assets as string | undefined),
    line("Works with advisor", data.hasAdvisor as string | undefined),
    line("Employer retirement plan", data.hasRetirementPlan as string | undefined),
    line("Services interested in", data.servicesNeeded as string[] | undefined),
    line("Life event", data.lifeEvent as string | undefined),
    line("Biggest concern", data.biggestConcern as string | undefined),
    line("Meeting preference", data.meetingPreference as string | undefined),
    line("Preferred times", data.timePreference as string[] | undefined),
    line("Heard about us", data.referralSource as string | undefined),
    line("Additional notes", data.additionalNotes as string | undefined),
  ].join("\n");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as IntakePayload;

    const required = ["firstName", "lastName", "email", "ageRange", "income", "assets"];
    for (const field of required) {
      if (!data[field]) {
        return Response.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (
      !Array.isArray(data.servicesNeeded) ||
      data.servicesNeeded.length === 0
    ) {
      return Response.json(
        { error: "At least one service must be selected" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error(
        "[intake] RESEND_API_KEY is not set — configure it in Vercel (or .env.local) to deliver email."
      );
      return Response.json(
        {
          error:
            "Email delivery is not configured. Set RESEND_API_KEY on the server.",
        },
        { status: 503 }
      );
    }

    const to = process.env.INTAKE_NOTIFICATION_TO?.trim() || DEFAULT_TO;
    const from = process.env.INTAKE_FROM_EMAIL?.trim() || DEFAULT_FROM;
    const prospectEmail = String(data.email ?? "").trim();
    const prospectName = `${data.firstName ?? ""} ${data.lastName ?? ""}`.trim();

    const text = formatIntakeLines(data);
    const html = `<pre style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;white-space:pre-wrap">${escapeHtml(
      text
    )}</pre>`;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: prospectEmail || undefined,
      subject: `New intake request — ${prospectName || "prospect"}`,
      text,
      html,
    });

    if (error) {
      console.error("[intake] Resend error:", error);
      return Response.json(
        { error: "Failed to send notification email." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
