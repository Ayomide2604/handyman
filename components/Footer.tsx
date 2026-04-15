import React from "react";

const Footer = () => {
	return (
		<footer className="bg-dark text-white py-5">
			<div className="container">
				<div className="row">
					{/* Company Info */}
					<div className="col-lg-4 mb-4 mb-lg-0">
						<div className="footer-brand mb-4">
							<h3 className="h4 text-white mb-3">Handyman Pro Plus</h3>
							<p className="text-white">
								Professional handyman services with 25 years of service
								excellence in Edmonton and surrounding areas. Quality
								workmanship, reliable service, and fair pricing for all your
								home repair needs.
							</p>
							<div className="mt-3">
								<p className="text-white small mb-1">
									<strong>Service Areas:</strong> Serving Edmonton community and
									its surrounding cities but not limited to St. Albert, Leduc,
									Sherwood Park and Stony Plain
								</p>
							</div>
						</div>
						<div className="social-links">
							<h5 className="text-uppercase small text-secondary mb-3">
								Follow Us
							</h5>
							<div className="d-flex gap-3">
								<a
									href="https://www.facebook.com/profile.php?id=61570681256562&mibextid=wwXIfr&rdid=x1UZBWjNT0drjsMA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CLxrkixK2%2F%3Fmibextid%3DwwXIfr%23rdid%3Dx1UZBWjNT0drjsMA"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white fs-5 text-secondary-hover"
								>
									<i className="bi bi-facebook"></i>
								</a>
								<a href="#!" className="text-white fs-5 text-secondary-hover">
									<i className="bi bi-instagram"></i>
								</a>
								<a
									href="mailto:homerepair@handymanplusservices.com"
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
										href="mailto:homerepair@handymanplusservices.com"
										className="text-white text-secondary-hover text-decoration-none"
									>
										homerepair@handymanplusservices.com
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
									Serving Edmonton community and its surrounding cities but not
									limited to St. Albert, Leduc, Sherwood Park and Stony Plain
									<br />
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-top border-secondary mt-4 pt-4">
					<div className="row align-items-center">
						<div className="col-md-6">
							<p className="mb-0 text-white">
								© {new Date().getFullYear()} Handyman Pro Plus. All rights
								reserved.
							</p>
						</div>
						<div className="col-md-6 text-md-end">
							<p className="mb-0 text-white">
								Designed by{" "}
								<a
									href="https://webstridestudios.ca"
									target="_blank"
									rel="noopener noreferrer"
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
