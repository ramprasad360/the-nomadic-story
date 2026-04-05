import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: "All fields are required" },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, error: "Invalid email address" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send to you
        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Contact Message from ${name}`,
            html: `
                <h3>New Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        // Auto-reply to user
        await transporter.sendMail({
            to: email,
            subject: "Thanks for contacting us!",
            html: `
                <p>Hi ${name},</p>
                <p>Thanks for reaching out. We received your message and will get back to you soon.</p>
                <br/>
                <p>— The Nomadic Story</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, error: "Server error" },
            { status: 500 }
        );
    }
}