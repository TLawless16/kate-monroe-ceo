import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, phone, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required" },
                { status: 400 }
            );
        }

        const RESEND_API_KEY = (process.env.RESEND_API_KEY || "").trim();

        if (!RESEND_API_KEY) {
            console.error("RESEND_API_KEY not configured");
            return NextResponse.json(
                { error: "Email service not configured" },
                { status: 500 }
            );
        }

        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "Kate Monroe Website <onboarding@resend.dev>",
                to: ["Kryzta@MonroeMedia.com"],
                subject: `Appearance Inquiry from ${name}`,
                html: `
                    <h2>New Appearance Request</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <hr />
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, "<br />")}</p>
                    <hr />
                    <p style="color: #888; font-size: 12px;">Sent from katemonroeceo.com contact form</p>
                `,
                reply_to: email,
            }),
        });

        const responseData = await res.json();
        
        if (res.ok) {
            return NextResponse.json({ success: true });
        } else {
            console.error("Resend error:", JSON.stringify(responseData));
            return NextResponse.json(
                { error: "Failed to send email", detail: responseData },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
