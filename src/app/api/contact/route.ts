import { env } from "@/env"
import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(env.RESEND_API_KEY)

    const body = await request.json()
    const { firstName, lastName, email, phone, company, subject, message } =
      body

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 },
      )
    }

    const { data, error } = await resend.emails.send({
      from: "Future Offshore Website <onboarding@resend.dev>",
      to: ["info@futureoffshore.co.uk"],
      subject: `New Enquiry: ${subject || "General Enquiry"} from ${firstName} ${lastName}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject || "General Enquiry"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    )
  }
}
