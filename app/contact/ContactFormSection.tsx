"use client";

import React, { useState } from "react";
import Image from "next/image";

const ContactFormSection = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		const form = e.currentTarget;
		const formData = new FormData(form);
		const userEmail = formData.get("email") as string;

		// Set reply-to dynamically
		const replytoField = form.querySelector(
			'input[name="_replyto"]',
		) as HTMLInputElement;

		if (replytoField && userEmail) {
			replytoField.value = userEmail;
		}

		// Actually submit the form to Formspree
		const submitForm = () => {
			const formDataToSubmit = new FormData(form);

			fetch(form.action, {
				method: form.method,
				body: formDataToSubmit,
				headers: {
					Accept: "application/json",
				},
			})
				.then((response) => {
					if (response.ok) {
						setIsSubmitting(false);
						setShowSuccess(true);
						form.reset();

						setTimeout(() => {
							setShowSuccess(false);
						}, 5000);
					} else {
						setIsSubmitting(false);
						alert("There was an error submitting the form. Please try again.");
					}
				})
				.catch((error) => {
					setIsSubmitting(false);
					alert("There was an error submitting the form. Please try again.");
				});
		};

		// Submit the form
		submitForm();
	};

	return (
		<section>
			<div className="container">
				<div className="row align-items-center mt-n5">
					<div className="col-lg-6 mt-5">
						<div className="pe-xl-5">
							<div className="heading-style01 mb-4">
								<span className="small-text">Contact Form</span>
								<h2 className="display-5">Send Us a Message</h2>
							</div>

							<form
								className="contact-form"
								action="https://formspree.io/f/mpqkqolv"
								method="POST"
								onSubmit={handleSubmit}
							>
								<input type="hidden" name="_replyto" value="" />

								<div className="row">
									{/* Name */}
									<div className="col-md-6 mb-3">
										<label htmlFor="name">
											Your Name <span>*</span>
										</label>
										<input
											id="name"
											type="text"
											name="name"
											className="form-control"
											placeholder="Your name here"
											required
										/>
									</div>

									{/* Email */}
									<div className="col-md-6 mb-3">
										<label htmlFor="email">
											Your Email <span>*</span>
										</label>
										<input
											id="email"
											type="email"
											name="email"
											className="form-control"
											placeholder="Your email here"
											required
										/>
									</div>

									{/* Subject */}
									<div className="col-md-12 mb-3">
										<label htmlFor="subject">
											Subject <span>*</span>
										</label>
										<input
											id="subject"
											type="text"
											name="subject"
											className="form-control"
											placeholder="Your subject here"
											required
										/>
									</div>

									{/* Message */}
									<div className="col-md-12 mb-3">
										<label htmlFor="message">
											Message <span>*</span>
										</label>
										<textarea
											id="message"
											name="message"
											rows={4}
											className="form-control"
											placeholder="Tell us a few words"
											required
										/>
									</div>

									{/* Success */}
									{showSuccess && (
										<div className="col-md-12">
											<div className="alert alert-success">
												Thank you! We will get back to you soon.
											</div>
										</div>
									)}

									{/* Submit */}
									<div className="col-md-12">
										<button
											type="submit"
											className="butn md"
											disabled={isSubmitting}
										>
											<span>
												{isSubmitting ? (
													<>
														<span
															className="spinner-border spinner-border-sm me-2"
															role="status"
														/>
														Sending...
													</>
												) : (
													"Send Message"
												)}
											</span>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>

					{/* Image */}
					<div className="col-lg-6 mt-5 d-none d-lg-block">
						<Image
							src="/contact.jpg"
							alt="Contact"
							width={600}
							height={400}
							className="img-fluid"
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactFormSection;
