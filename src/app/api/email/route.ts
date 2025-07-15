import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/templates/EmailTemplate";

const resend = new Resend(process.env.RESEND_KEY!);

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, message } = await req.json();
    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["william.farre@gmail.com"],
      subject: "New message from your website!",
      react: EmailTemplate({
        name: name,
        message: message,
        email: email,
      }),
    });
    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.log("Email sending error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
};
