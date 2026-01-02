import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const sendGridApiKey = process.env.SENDGRID_API_KEY;
    const emailTo = process.env.EMAIL_TO;
    const sendGridFromEmail = process.env.SENDGRID_FROM_EMAIL || "noreply@metawurks.com";

    if (!sendGridApiKey) {
      return NextResponse.json(
        { 
          message: "SendGrid API key is not configured",
          error: "Please set SENDGRID_API_KEY environment variable" 
        },
        { status: 500 }
      );
    }

    if (!sendGridApiKey.startsWith("SG.")) {
      return NextResponse.json(
        { 
          message: "Invalid SendGrid API key format",
          error: "API key should start with 'SG.'" 
        },
        { status: 500 }
      );
    }

    if (!emailTo) {
      return NextResponse.json(
        { 
          message: "Recipient email is not configured",
          error: "Please set EMAIL_TO environment variable" 
        },
        { status: 500 }
      );
    }

    sgMail.setApiKey(sendGridApiKey);

    const emailContent = {
      to: emailTo,
      from: sendGridFromEmail,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #1e40af); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 30px; background-color: #f9fafb;">
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <p style="margin: 0 0 10px 0;"><strong style="color: #374151;">Name:</strong> <span style="color: #6b7280;">${name}</span></p>
              <p style="margin: 0 0 10px 0;"><strong style="color: #374151;">Email:</strong> <span style="color: #6b7280;">${email}</span></p>
              <p style="margin: 0 0 10px 0;"><strong style="color: #374151;">Subject:</strong> <span style="color: #6b7280;">${subject}</span></p>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #374151;">Message:</strong></p>
                <p style="color: #6b7280; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>
          <div style="background-color: #f3f4f6; padding: 20px; text-align: center;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">This email was sent from MetaWurks contact form</p>
          </div>
        </div>
      `,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    };

    await sgMail.send(emailContent);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("SendGrid error:", error);

    let errorMessage = "Failed to send email";
    let errorDetails = "An unknown error occurred";

    if (error.response) {
      const sgError = error.response.body;
      
      if (sgError.errors && sgError.errors.length > 0) {
        errorDetails = sgError.errors[0].message;
        
        if (errorDetails.includes("API key")) {
          errorMessage = "Invalid or expired SendGrid API key";
        } else if (errorDetails.includes("permission")) {
          errorMessage = "SendGrid API key missing required permissions";
        } else if (errorDetails.includes("not verified")) {
          errorMessage = "Sender email address is not verified in SendGrid";
        }
      }
    } else if (error.message) {
      errorDetails = error.message;
    }

    return NextResponse.json(
      { message: errorMessage, error: errorDetails },
      { status: 500 }
    );
  }
}

