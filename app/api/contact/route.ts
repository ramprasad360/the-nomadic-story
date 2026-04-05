import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: "All fields required" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "Zoho",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // ✅ Send email to YOU
        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Contact Message from ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        // ✅ OPTIONAL: Auto-reply (COMMENT THIS FOR NOW)
        /*
        await transporter.sendMail({
            to: email,
            subject: "Thanks for contacting us!",
            html: `<p>We received your message</p>`,
        });
        */

        // ✅ IMPORTANT: Return success immediately
        return NextResponse.json({ success: true });

    } catch (error: unknown) {
        console.error("ERROR:", error);

        const message =
            error instanceof Error ? error.message : "Unknown error";

        return NextResponse.json(
            { success: false, error: message },
            { status: 500 }
        );
    }
}