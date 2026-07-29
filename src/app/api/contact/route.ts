import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
    "`": "&#x60;",
    "=": "&#x3D;",
  };

  return text.replace(/[&<>"'/`=]/g, (char) => htmlEntities[char] || char);
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, service, budget, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeCompany = company ? escapeHtml(company.trim()) : "—";
    const safePhone = phone ? escapeHtml(phone.trim()) : "—";
    const safeService = service ? escapeHtml(service.trim()) : "—";
    const safeBudget = budget ? escapeHtml(budget.trim()) : "—";
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");

    const adminEmail = {
      to: process.env.TO_EMAIL!,
      from: process.env.FROM_EMAIL!,
      replyTo: email,
      subject: `[Oxibit - Website] New Project Inquiry from ${safeName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Project Inquiry</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #21252C; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Project Inquiry</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${safeName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${safeEmail}</div>
              </div>
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${safeCompany}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${safePhone}</div>
              </div>
              <div class="field">
                <div class="label">Service:</div>
                <div class="value">${safeService}</div>
              </div>
              <div class="field">
                <div class="label">Budget:</div>
                <div class="value">${safeBudget}</div>
              </div>
              <div class="field">
                <div class="label">Project:</div>
                <div class="value">${safeMessage}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Project Inquiry

        Name: ${safeName}
        Email: ${safeEmail}
        Company: ${company?.trim() || "—"}
        Phone: ${phone?.trim() || "—"}
        Service: ${service?.trim() || "—"}
        Budget: ${budget?.trim() || "—"}
        Project: ${message.trim()}
      `,
    };

    await sgMail.send(adminEmail);

    const userReply = {
      to: email,
      from: process.env.FROM_EMAIL!,
      subject: `Thank you for your interest, ${safeName}!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Thank You</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #21252C; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thanks, we've got it.</h2>
            </div>
            <div class="content">
              <p>Dear ${safeName},</p>
              <p>Thank you for reaching out to Oxibit Technologies. We'll be in touch within one business day with a clear next step.</p>
              <p>Best regards,<br>The Oxibit Team</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Thanks, we've got it.

        Dear ${safeName},

        Thank you for reaching out to Oxibit Technologies. We'll be in touch within one business day with a clear next step.

        Best regards,
        The Oxibit Team
      `,
    };

    await sgMail.send(userReply);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error: unknown) {
    console.error("SendGrid error:", error);

    const sgError = error as { response?: { body?: { errors?: { message: string }[] }; statusCode?: number } };
    if (sgError.response?.body?.errors) {
      const errorMessage = sgError.response.body.errors[0].message;
      return NextResponse.json({ error: errorMessage }, { status: sgError.response.statusCode || 500 });
    }

    return NextResponse.json(
      { error: "Sorry, we couldn't send your message right now. Please try again in a moment." },
      { status: 500 },
    );
  }
}
