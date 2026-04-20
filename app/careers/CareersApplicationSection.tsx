"use client";

import React, { useState } from "react";

const CareersApplicationSection = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		tradeExpertise: "",
		experience: "",
		message: "",
		resume: null as File | null,
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFormData({
				...formData,
				resume: e.target.files[0],
			});
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError("");

		try {
			// Create form data for Resend
			const emailData = {
				from: "noreply@handymanplusservices.com",
				to: "homerepair@handymanplusservices.com",
				replyTo: formData.email,
				subject: `New Career Application: ${formData.tradeExpertise} - ${formData.name}`,
				html: `
					<!DOCTYPE html>
					<html>
					<head>
						<meta charset="utf-8">
						<meta name="viewport" content="width=device-width, initial-scale=1.0">
						<title>New Career Application - Handyman Pro Plus</title>
						<style>
							body {
								font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
								line-height: 1.6;
								color: #333;
								margin: 0;
								padding: 20px;
								background-color: #f8f9fa;
							}
							.email-container {
								max-width: 600px;
								margin: 0 auto;
								background: white;
								border-radius: 8px;
								box-shadow: 0 2px 10px rgba(0,0,0,0.1);
								overflow: hidden;
							}
							.header {
								background: linear-gradient(135deg, #063b8b 0%, #084299 100%);
								padding: 30px;
								text-align: center;
								border-bottom: 4px solid #ffc107;
							}
							.logo {
								max-width: 200px;
								height: auto;
								margin-bottom: 15px;
							}
							.company-name {
								color: white;
								font-size: 24px;
								font-weight: 700;
								margin: 0;
							}
							.tagline {
								color: #ffc107;
								font-size: 14px;
								margin: 5px 0 0 0;
							}
							.content {
								padding: 40px 30px;
							}
							.section-title {
								color: #063b8b;
								font-size: 20px;
								font-weight: 700;
								margin-bottom: 20px;
								border-bottom: 2px solid #ffc107;
								padding-bottom: 10px;
							}
							.info-grid {
								display: grid;
								grid-template-columns: 1fr 1fr;
								gap: 20px;
								margin-bottom: 30px;
							}
							.info-item {
								background: #f8f9fa;
								padding: 15px;
								border-radius: 6px;
								border-left: 4px solid #063b8b;
							}
							.info-label {
								font-weight: 600;
								color: #063b8b;
								margin-bottom: 5px;
								font-size: 12px;
								text-transform: uppercase;
								letter-spacing: 0.5px;
							}
							.info-value {
								color: #333;
								font-size: 16px;
							}
							.message-section {
								background: #f8f9fa;
								padding: 20px;
								border-radius: 6px;
								margin: 20px 0;
							}
							.resume-section {
								background: #e8f5e8;
								border: 2px dashed #28a745;
								padding: 20px;
								border-radius: 6px;
								text-align: center;
								margin: 20px 0;
							}
							.download-btn {
								display: inline-block;
								background: #28a745;
								color: white;
								padding: 12px 24px;
								text-decoration: none;
								border-radius: 6px;
								font-weight: 600;
								margin-top: 15px;
							}
							.download-btn:hover {
								background: #218838;
							}
							.footer {
								background: #063b8b;
								color: white;
								text-align: center;
								padding: 20px;
								font-size: 12px;
							}
						</style>
					</head>
					<body>
						<div class="email-container">
							<div class="header">
								<img src="https://handymanplusservices.com/logo.png" alt="Handyman Pro Plus" class="logo">
								<h1 class="company-name">Handyman Pro Plus</h1>
								<p class="tagline">Professional Handyman Services Since 1945</p>
							</div>
							
							<div class="content">
								<h2 class="section-title">🔧 New Career Application Received</h2>
								
								<div class="info-grid">
									<div class="info-item">
										<div class="info-label">Applicant Name</div>
										<div class="info-value">${formData.name}</div>
									</div>
									<div class="info-item">
										<div class="info-label">Email Address</div>
										<div class="info-value">${formData.email}</div>
									</div>
									<div class="info-item">
										<div class="info-label">Phone Number</div>
										<div class="info-value">${formData.phone}</div>
									</div>
									<div class="info-item">
										<div class="info-label">Trade Expertise</div>
										<div class="info-value">${formData.tradeExpertise}</div>
									</div>
								</div>
								
								<div class="info-item">
									<div class="info-label">Years of Experience</div>
									<div class="info-value">${formData.experience}</div>
								</div>
								
								<div class="message-section">
									<div class="info-label">Message from Applicant</div>
									<div class="info-value">${formData.message.replace(/\n/g, "<br>")}</div>
								</div>
								
								${
									formData.resume
										? `
								<div class="resume-section">
									<div class="info-label">📄 Resume/CV Uploaded</div>
									<div class="info-value">
										<strong>${formData.resume.name}</strong><br>
										<span style="font-size: 14px; color: #666;">Click the button below to download the resume</span>
									</div>
									<a href="cid:resume" class="download-btn" download="${formData.resume.name}">
										📥 Download Resume
									</a>
								</div>
								`
										: `
								<div class="resume-section" style="background: #fff3cd; border-color: #ffc107;">
									<div class="info-label">📄 Resume/CV</div>
									<div class="info-value">No resume uploaded</div>
								</div>
								`
								}
								
								<div style="margin-top: 30px; padding: 20px; background: #063b8b; color: white; border-radius: 6px;">
									<strong>📅 Application Details:</strong><br>
									Submitted on: ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}<br>
									Source: Careers Page on www.handymanplusservices.com
								</div>
							</div>
							
							<div class="footer">
								<p>&copy; 2025 Handyman Pro Plus. All rights reserved.</p>
								<p style="margin-top: 10px; font-size: 11px; opacity: 0.8;">
									This email was sent automatically from the careers application form.<br>
									Please reply directly to the applicant's email address above.
								</p>
							</div>
						</div>
					</body>
					</html>
				`,
				attachments: formData.resume
					? [
							{
								filename: formData.resume.name,
								content: await fileToBase64(formData.resume),
							},
						]
					: [],
			};

			// Send email via Resend API
			const response = await fetch("/api/careers-submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(emailData),
			});

			const responseData = await response.json();

			if (response.ok) {
				setIsSubmitting(false);
				setShowSuccess(true);
				setFormData({
					name: "",
					email: "",
					phone: "",
					tradeExpertise: "",
					experience: "",
					message: "",
					resume: null,
				});

				setTimeout(() => {
					setShowSuccess(false);
				}, 5000);
			} else {
				console.error("API response error:", responseData);
				throw new Error(responseData.error || "Failed to submit application");
			}
		} catch (err) {
			setIsSubmitting(false);
			console.error("Frontend error:", err);

			// Extract error message from the caught error
			const errorMessage =
				err instanceof Error
					? err.message
					: "There was an error submitting your application. Please try again.";
			setError(errorMessage);
		}
	};

	const fileToBase64 = (file: File): Promise<string> => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				const result = reader.result as string;
				resolve(result.split(",")[1]); // Remove data URL prefix
			};
			reader.onerror = (error) => reject(error);
		});
	};

	return (
		<section id="application" className="py-6">
			<div className="container">
				<div className="heading-style01 mb-1-9 mb-xl-5 text-center">
					<span className="small-text">Join Our Team</span>
					<h2 className="display-5">Apply Today</h2>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-8">
						{showSuccess && (
							<div className="alert alert-success mb-4" role="alert">
								<h4 className="alert-heading">Application Submitted!</h4>
								<p>
									Thank you for your interest in joining Handyman Pro Plus.
									We'll review your application and contact you soon.
								</p>
							</div>
						)}

						{error && (
							<div className="alert alert-danger mb-4" role="alert">
								<h4 className="alert-heading">Submission Error</h4>
								<p>{error}</p>
							</div>
						)}

						<form onSubmit={handleSubmit} className="contact-form quform">
							<div className="row">
								<div className="col-md-6 mb-4">
									<label htmlFor="name" className="form-label">
										Full Name *
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="form-control"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="col-md-6 mb-4">
									<label htmlFor="email" className="form-label">
										Email Address *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="form-control"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="col-md-6 mb-4">
									<label htmlFor="phone" className="form-label">
										Phone Number *
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										className="form-control"
										value={formData.phone}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="col-md-6 mb-4">
									<label htmlFor="experience" className="form-label">
										Years of Experience *
									</label>
									<input
										type="text"
										id="experience"
										name="experience"
										className="form-control"
										placeholder="e.g., 3+ years in residential handyman services"
										value={formData.experience}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="col-12 mb-4">
									<label htmlFor="tradeExpertise" className="form-label">
										Trade Expertise *
									</label>
									<input
										type="text"
										id="tradeExpertise"
										name="tradeExpertise"
										className="form-control"
										placeholder="e.g., Plumbing, Electrical, Carpentry, Painting, General Maintenance"
										value={formData.tradeExpertise}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="col-12 mb-4">
									<label htmlFor="resume" className="form-label">
										Resume/CV *
									</label>
									<input
										type="file"
										id="resume"
										name="resume"
										className="form-control"
										accept=".pdf,.doc,.docx"
										onChange={handleFileChange}
										required
									/>
								</div>

								<div className="col-12 mb-4">
									<label htmlFor="message" className="form-label">
										Tell Us About Yourself *
									</label>
									<textarea
										id="message"
										name="message"
										className="form-control"
										rows={5}
										placeholder="Why do you want to join our team? What skills do you bring?"
										value={formData.message}
										onChange={handleChange}
										required
									></textarea>
								</div>

								<div className="col-12">
									<button
										type="submit"
										className="butn secondary md"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											<span>
												<span
													className="spinner-border spinner-border-sm me-2"
													role="status"
													aria-hidden="true"
												></span>
												Submitting...
											</span>
										) : (
											<span>Submit Application</span>
										)}
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CareersApplicationSection;
