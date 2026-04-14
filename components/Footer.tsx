import React from "react";

const Footer = () => {
	return (
		<footer className="pt-1-9 pt-sm-6 bg-dark">
			<div className="container">
				<div className="row border-bottom border-color-light-white pb-4 mb-1-9 mb-sm-6 align-items-center">
					<div className="col-md-3">
						<div className="text-start mb-4 mb-md-0">
							<div className="footer-logo">
								<a href="index.html">
									<img src="/logo.png" alt="..." />
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-9">
						<div className="d-flex justify-content-start justify-content-md-end">
							<ul className="list-unstyled list-style02 mb-0 text-uppercase">
								<li>
									<a href="index.html">Home</a>
								</li>
								<li>
									<a href="https://fixityhtml.websitelayout.net/about.html">
										About
									</a>
								</li>
								<li>
									<a href="/services">Services</a>
								</li>

								<li>
									<a href="/contact">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row border-bottom border-color-light-white pb-1-9 pb-sm-6 mb-1-9 mt-n1-9">
					<div className="col-md-4 mt-1-9">
						<h3 className="text-secondary text-uppercase mb-3 mb-md-4 h5 letter-spacing-1">
							Contact
						</h3>
						<ul className="list-unstyled display-md-29 display-xl-28">
							<li>
								<a
									href="mailto:info@yourdomain.com"
									className="text-white text-secondary-hover"
								>
									info@example.com
								</a>
							</li>
							<li>
								<a
									href="mailto:info@yourdomain.com"
									className="text-white text-secondary-hover"
								>
									info@domain.com
								</a>
							</li>
						</ul>
					</div>
					<div className="col-md-4 mt-1-9 text-md-center">
						<h3 className="text-secondary text-uppercase mb-3 mb-md-4 h5 letter-spacing-1">
							Support
						</h3>
						<ul className="list-unstyled display-md-29 display-xl-28">
							<li>
								<a
									href="tel:+44123456789"
									className="text-white text-secondary-hover"
								>
									(+44) 123 456 789
								</a>
							</li>
							<li>
								<a
									href="tel:+44152567987"
									className="text-white text-secondary-hover"
								>
									(+44) 152-567-987
								</a>
							</li>
						</ul>
					</div>
					<div className="col-md-4 mt-1-9 text-md-end">
						<h3 className="text-secondary text-uppercase mb-3 mb-md-4 h5 letter-spacing-1">
							Address
						</h3>
						<address className="mb-0 display-md-29 display-xl-28 text-white">
							— New York <br />
							18 N 3rd E Street Downey,
							<br />
							Lechase Park, United States.
						</address>
					</div>
				</div>
				<div className="row align-items-center pb-4">
					<div className="col-md-7 order-2 order-md-1">
						<div className="text-center text-md-start mt-1-9 mt-md-0">
							<p className="d-inline-block text-white mb-0">
								© <span className="current-year" /> Powered by{" "}
								<a href="#!" className="text-secondary text-white-hover">
									Webstride Studios
								</a>
							</p>
						</div>
					</div>
					<div className="col-md-5 order-1 order-md-2">
						<div className="d-flex justify-content-center justify-content-md-end">
							<ul className="social-icon-style01 list-unstyled mb-0">
								<li>
									<a href="#!">
										<i className="ti-facebook" />
									</a>
								</li>
								<li>
									<a href="#!">
										<i className="ti-twitter-alt" />
									</a>
								</li>
								<li>
									<a href="#!">
										<i className="ti-linkedin" />
									</a>
								</li>
								<li>
									<a href="#!">
										<i className="ti-instagram" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
