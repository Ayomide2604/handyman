"use client";
import React, { useState } from "react";

const ContactFormSection = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
		alert("Thank you for your message! We will get back to you soon.");
		// Reset form
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
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
							<form className="contact quform" onSubmit={handleSubmit}>
								<div className="quform-elements">
									<div className="row">
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
														value={formData.name}
														onChange={handleChange}
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
														value={formData.email}
														onChange={handleChange}
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
														value={formData.subject}
														onChange={handleChange}
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
														value={formData.message}
														onChange={handleChange}
														required
													></textarea>
												</div>
											</div>
										</div>

										{/* Submit Button */}
										<div className="col-md-12">
											<div className="quform-submit-inner">
												<button type="submit" className="butn md">
													<span>Send Message</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6 mt-5 d-none d-lg-block">
						<img src="/img/content/contact-01.jpg" alt="Contact Us" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactFormSection;
