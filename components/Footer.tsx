import React from "react";

const Footer = () => {
	return (
		<footer className="bg-dark text-white py-5">
			<div className="container">
				<div className="row">
					{/* Company Info */}
					<div className="col-lg-4 mb-4 mb-lg-0">
						<div className="footer-brand mb-4">
							<h3 className="h4 text-white mb-3">Handyman Pro</h3>
							<p className="text-muted">
								Professional handyman services in Edmonton and surrounding
								areas. Quality workmanship, reliable service, and fair pricing
								for all your home repair needs.
							</p>
							<div className="mt-3">
								<p className="text-muted small mb-1">
									<strong>Service Areas:</strong> Edmonton, Sherwood Park, St.
									Albert, Leduc, Stony Plain
								</p>
							</div>
						</div>
						<div className="social-links">
							<h5 className="text-uppercase small text-secondary mb-3">
								Follow Us
							</h5>
							<div className="d-flex gap-3">
								<a href="#!" className="text-white fs-5 text-secondary-hover">
									<i className="bi bi-facebook"></i>
								</a>
								<a href="#!" className="text-white fs-5 text-secondary-hover">
									<i className="bi bi-instagram"></i>
								</a>
								<a
									href="mailto:info@handymanpro.ca"
									className="text-white fs-5 text-secondary-hover"
								>
									<i className="bi bi-envelope"></i>
								</a>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div className="col-lg-4 mb-4 mb-lg-0">
						<h5 className="text-uppercase small text-secondary mb-4">
							Quick Links
						</h5>
						<ul className="list-unstyled">
							<li className="mb-2">
								<a
									href="/"
									className="text-white text-secondary-hover text-decoration-none"
								>
									Home
								</a>
							</li>
							<li className="mb-2">
								<a
									href="/about"
									className="text-white text-secondary-hover text-decoration-none"
								>
									About Us
								</a>
							</li>
							<li className="mb-2">
								<a
									href="/services"
									className="text-white text-secondary-hover text-decoration-none"
								>
									Services
								</a>
							</li>
							<li className="mb-2">
								<a
									href="/contact"
									className="text-white text-secondary-hover text-decoration-none"
								>
									Contact
								</a>
							</li>
							<li className="mb-2">
								<a
									href="#!"
									className="text-white text-secondary-hover text-decoration-none"
								>
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div className="col-lg-4">
						<h5 className="text-uppercase small text-secondary mb-4">
							Get In Touch
						</h5>
						<ul className="list-unstyled">
							<li className="mb-3 d-flex align-items-start">
								<i className="bi bi-envelope me-3 mt-1 text-secondary"></i>
								<div>
									<a
										href="mailto:info@handymanpro.ca"
										className="text-white text-secondary-hover text-decoration-none"
									>
										info@handymanpro.ca
									</a>
								</div>
							</li>
							<li className="mb-3 d-flex align-items-start">
								<i className="bi bi-telephone me-3 mt-1 text-secondary"></i>
								<div>
									<a
										href="tel:+17808026830"
										className="text-white text-secondary-hover text-decoration-none"
									>
										+1 (780) 802-6830
									</a>
								</div>
							</li>
							<li className="mb-3 d-flex align-items-start">
								<i className="bi bi-geo-alt me-3 mt-1 text-secondary"></i>
								<div className="text-white">
									Serving Edmonton & Area
									<br />
									Edmonton, Alberta T5X 0A1
									<br />
									Canada
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-top border-secondary mt-4 pt-4">
					<div className="row align-items-center">
						<div className="col-md-6">
							<p className="mb-0 text-muted">
								© {new Date().getFullYear()} Handyman Pro. All rights reserved.
							</p>
						</div>
						<div className="col-md-6 text-md-end">
							<p className="mb-0 text-muted">
								Designed by{" "}
								<a
									href="#!"
									className="text-secondary text-white-hover text-decoration-none"
								>
									Webstride Studios
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
