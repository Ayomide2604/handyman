"use client";
import React, { useState } from "react";
import Image from "next/image";

const ContactFormSection = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Get form data and set reply-to
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const userEmail = formData.get('email') as string;

		// Set reply-to to user's email for easy replying
		const replytoField = form.querySelector('input[name="_replyto"]') as HTMLInputElement;
		if (replytoField && userEmail) {
			replytoField.value = userEmail;
		}

		// Show success message after a short delay
		setTimeout(() => {
			setIsSubmitting(false);
			setShowSuccess(true);

			// Clear form immediately when success shows
			form.reset();

			// Hide success message after 5 seconds
			setTimeout(() => {
				setShowSuccess(false);
			}, 5000);
		}, 1000);
	};
	return (
		<section>
			<div className="container">
				<div className="row align-items-center mt-n5">
					<div className="col-lg-6 mt-5">
						<div className="pe-xl-5">
							<div className="heading-style01 mb-1-9">
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
								{/* Name Input */}
								<div className="col-md-6">
									<div className="quform-element form-group mb-3">
										<label htmlFor="name">
											Your Name <span className="quform-required">*</span>
										</label>
										<div className="quform-input">
											<input
												className="form-control"
												id="name"
												type="text"
												name="name"
												placeholder="Your name here"
												required
											/>
												<div className="quform-input">
													<input
														className="form-control"
														id="name"
														type="text"
														name="name"
														placeholder="Your name here"
														required
													/>
												</div>
											</div>
										</div>

										{/* Email Input */}
										<div className="col-md-6">
											<div className="quform-element form-group mb-3">
												<label htmlFor="email">
													Your Email <span className="quform-required">*</span>
												</label>
												<div className="quform-input">
													<input
														className="form-control"
														id="email"
														type="email"
														name="email"
														placeholder="Your email here"
														required
													/>
												</div>
											</div>
										</div>

										{/* Subject Input */}
										<div className="col-md-12">
											<div className="quform-element form-group mb-3">
												<label htmlFor="subject">
													Your Subject{" "}
													<span className="quform-required">*</span>
												</label>
												<div className="quform-input">
													<input
														className="form-control"
														id="subject"
														type="text"
														name="subject"
														placeholder="Your subject here"
														required
													/>
												</div>
											</div>
										</div>

										{/* Message Textarea */}
										<div className="col-md-12">
											<div className="quform-element form-group mb-3">
												<label htmlFor="message">
													Message <span className="quform-required">*</span>
												</label>
												<div className="quform-input">
													<textarea
														className="form-control h-100"
														id="message"
														name="message"
														rows={3}
														placeholder="Tell us a few words"
														required
													></textarea>
												</div>
											</div>
										</div>

										{/* Success Message */}
										{showSuccess && (
											<div className="col-md-12">
												<div className="alert alert-success mt-3">
													Thank you for your message! We will get back to you
													soon.
												</div>
											</div>
										)}

										{/* Submit Button */}
										<div className="col-md-12">
											<div className="quform-submit-inner">
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
																	aria-hidden="true"
																></span>
																Sending...
															</>
														) : (
															"Send Message"
														)}
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6 mt-5 d-none d-lg-block">
						<Image
							src="/contact.jpg"
							alt="Contact Us"
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
