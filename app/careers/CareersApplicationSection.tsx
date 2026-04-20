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
					<h2>New Career Application Received</h2>
					<p><strong>Trade Expertise:</strong> ${formData.tradeExpertise}</p>
					<p><strong>Name:</strong> ${formData.name}</p>
					<p><strong>Email:</strong> ${formData.email}</p>
					<p><strong>Phone:</strong> ${formData.phone}</p>
					<p><strong>Experience:</strong> ${formData.experience}</p>
					<p><strong>Message:</strong></p>
					<p>${formData.message}</p>
					<p><strong>Resume:</strong> ${formData.resume ? formData.resume.name : "No resume uploaded"}</p>
					<hr>
					<p><em>This application was submitted via the careers page on www.handymanplusservices.com</em></p>
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
