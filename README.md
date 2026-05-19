# Candlelight Financial Solutions — marketing site

Next.js 16 site with a multi-step [client intake form](src/app/intake/page.tsx). Intake submissions are emailed via [Resend](https://resend.com).

## Local development

```bash
npm install
cp .env.example .env.local
# Add RESEND_API_KEY (and optional overrides) — see “Intake email” below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Intake email (Resend)

Submissions from `/intake` are sent to **`info@candlelightfs.com`** by default.

1. Create a [Resend](https://resend.com) account and an API key.
2. In Resend: **Domains** → add `candlelightfs.com` → Resend shows DNS records (often TXT and CNAME for DKIM).
3. In **GoDaddy** (DNS management for the domain), add exactly the records Resend lists. Save until Resend shows the domain as **Verified**.
4. Choose a “from” address on that domain (for example `intake@candlelightfs.com` or `notifications@candlelightfs.com`). For sending through Resend you only need the domain verified; a full mailbox is optional unless you want to receive mail at that address.
5. In **Vercel**: Project → **Settings** → **Environment Variables**:

   | Name | Value |
   |------|--------|
   | `RESEND_API_KEY` | your Resend API key |
   | `INTAKE_NOTIFICATION_TO` | `info@candlelightfs.com` (optional; this is the default in code) |
   | `INTAKE_FROM_EMAIL` | e.g. `Candlelight Financial Solutions <intake@candlelightfs.com>` |

6. Redeploy the project so the new variables apply.

**Reply-to:** The API sets `replyTo` to the prospect’s email so staff can reply directly from the notification.

**Testing before DNS:** Resend’s shared test domain only allows limited recipients. For a quick test, temporarily set `INTAKE_NOTIFICATION_TO` to the email you used to sign up for Resend and use Resend’s documented test “from” address until `candlelightfs.com` is verified.

## Connect `candlelightfs.com` on Vercel (with GoDaddy DNS)

Keep hosting on **Vercel**. Use GoDaddy only to manage **DNS** so the domain points at Vercel (you do not need GoDaddy website “hosting” for this Next.js app).

1. **Vercel:** Open the project → **Settings** → **Domains** → **Add** → enter `candlelightfs.com` and `www.candlelightfs.com` (recommended). Vercel shows the records to add (for example **A** for the apex and **CNAME** for `www` — use exactly what your dashboard displays).
2. **GoDaddy:** My Products → your domain → **DNS** (or **Manage DNS**).
   - For the **apex** (`@` or `candlelightfs.com`): remove old **A** or **CNAME** records that pointed to GoDaddy parking or a previous host. Add the **A** record(s) Vercel specifies.
   - For **www**: add a **CNAME** from `www` to the hostname Vercel gives you (often `cname.vercel-dns.com`). **Do not** point `www` at `candlelightfs.com` — that keeps traffic off Vercel and often loops or fails to resolve correctly.
3. Wait for DNS propagation (often minutes, sometimes longer). Vercel will show **Valid Configuration** when it works.
4. **HTTPS:** Vercel issues certificates automatically after the domain validates.
5. **Old GoDaddy website:** After cutover, you can turn off GoDaddy Website Builder if it was only used for the old site; keep **domain registration** and **DNS** at GoDaddy if that is where the domain lives.

**Email vs marketing DNS:** If `info@candlelightfs.com` uses GoDaddy email (Microsoft 365, etc.), keep the **MX** records that deliver mail to that inbox. Add Resend’s **TXT/CNAME** records for outbound mail without deleting your existing MX unless Resend’s docs say to replace them (they usually add SPF/DKIM alongside).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel custom domains](https://vercel.com/docs/projects/domains)
- [Resend domain verification](https://resend.com/docs/dashboard/domains/introduction)
