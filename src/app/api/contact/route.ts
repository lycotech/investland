import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const ENQUIRY_LABELS: Record<string, string> = {
  individual: 'Individual Portfolio Management',
  corporate: 'Corporate Treasury Management',
  'fixed-income': 'Fixed Income Strategies',
  'real-estate': 'Real Estate Investment',
  'private-credit': 'Private Credit & Alternatives',
  diaspora: 'Diaspora Investor Enquiry',
  other: 'Other',
};

export async function POST(request: Request) {
  const { name, email, interest, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const enquiryLabel = ENQUIRY_LABELS[interest] ?? interest ?? 'General';

  try {
    await resend.emails.send({
      from: 'enquiries@investtrustasset.com',
      to: 'Info@investtrustasset.com',
      replyTo: email,
      subject: `New Enquiry: ${enquiryLabel} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0D1B3E">
          <h2 style="color:#1852CC">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:600;width:160px">Name</td><td>${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600">Nature of Enquiry</td><td>${enquiryLabel}</td></tr>
          </table>
          <hr style="margin:16px 0;border:none;border-top:1px solid #C8D8F0"/>
          <p style="font-weight:600;margin-bottom:6px">Message</p>
          <p style="white-space:pre-wrap;color:#5B7199">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
