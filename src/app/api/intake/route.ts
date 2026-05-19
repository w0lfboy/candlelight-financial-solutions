import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

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

    // TODO: Integrate with an email service (Resend, SendGrid, etc.)
    // For now, log the submission so it's visible in the server console.
    console.log("──── NEW INTAKE FORM SUBMISSION ────");
    console.log(JSON.stringify(data, null, 2));
    console.log("────────────────────────────────────");

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
