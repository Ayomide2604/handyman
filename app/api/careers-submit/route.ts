import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY
	? new Resend(process.env.RESEND_API_KEY)
	: null;

export async function POST(request: NextRequest) {
	try {
		console.log("API route called");

		// Check if API key is configured
		if (!process.env.RESEND_API_KEY) {
			console.error("RESEND_API_KEY is not configured");
			return NextResponse.json(
				{ error: "Email service not configured properly" },
				{ status: 500 },
			);
		}

		const body = await request.json();
		const { from, to, subject, html, attachments, replyTo } = body;

		console.log("Request body:", {
			from,
			to,
			subject,
			hasAttachments: !!attachments,
			replyTo,
		});

		// Validate required fields
		if (!from || !to || !subject || !html) {
			console.error("Missing required fields:", {
				from,
				to,
				subject,
				hasHtml: !!html,
			});
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 },
			);
		}

		// Prepare email data according to Resend API
		const emailData: any = {
			from: "Handyman Pro Plus <noreply@handymanplusservices.com>",
			to: [to],
			subject,
			html,
		};

		// Add replyTo if provided
		if (replyTo) {
			emailData.replyTo = replyTo;
		}

		// Add attachments if present
		if (attachments && attachments.length > 0) {
			emailData.attachments = attachments.map((attachment: any) => ({
				filename: attachment.filename,
				content: attachment.content,
			}));
		}

		console.log("Sending email with data:", JSON.stringify(emailData, null, 2));

		// Send email using Resend
		if (!resend) {
			return NextResponse.json(
				{ error: "Email service not configured in production" },
				{ status: 500 },
			);
		}

		const { data, error } = await resend.emails.send(emailData);

		if (error) {
			console.error("Resend error details:", JSON.stringify(error, null, 2));

			// Handle specific Resend errors
			if (error.message?.includes("domain")) {
				return NextResponse.json(
					{
						error:
							"Domain not verified in Resend. Please verify handymanplusservices.com in your Resend dashboard.",
						details: error,
					},
					{ status: 400 },
				);
			}

			if (error.message?.includes("api_key")) {
				return NextResponse.json(
					{
						error:
							"Invalid Resend API key. Please check your environment variables.",
						details: error,
					},
					{ status: 400 },
				);
			}

			return NextResponse.json(
				{ error: "Failed to send email", details: error },
				{ status: 500 },
			);
		}

		console.log("Email sent successfully:", data);
		return NextResponse.json(
			{ message: "Email sent successfully", data },
			{ status: 200 },
		);
	} catch (error) {
		console.error("API error:", error);
		return NextResponse.json(
			{ error: "Internal server error", details: error },
			{ status: 500 },
		);
	}
}
