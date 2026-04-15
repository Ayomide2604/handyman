import React from "react";

const ContactInfoSection = () => {
	return (
		<section className="pb-0">
			<div className="container">
				<div className="row align-items-center mb-5">
					<div className="col-12">
						<div className="heading-style01 text-sm-center">
							<span className="small-text">Contact Us</span>
							<h2 className="display-5">Need Any Help?</h2>
						</div>
					</div>
				</div>
				<div className="row mt-n2-2">
					<div className="col-sm-6 col-lg-4 mt-2-2">
						<h4 className="text-primary mb-4">
							<i className="ti-headphone-alt pe-3"></i>Call Us
						</h4>
						<ul className="list-unstyled display-md-29 display-xl-28 mb-0">
							<li>
								<a href="tel:+17808026830">+1 (780) 802-6830</a>
							</li>
						</ul>
					</div>
					<div className="col-sm-6 col-lg-4 mt-2-2">
						<h4 className="text-primary mb-4">
							<i className="ti-time pe-3"></i>Service Areas
						</h4>
						<ul className="list-unstyled display-md-29 display-xl-28 mb-0">
							<li>Serving Edmonton community and its surrounding cities</li>
							<li>
								but not limited to St. Albert, Leduc, Sherwood Park and Stony
								Plain
							</li>
							<li>
								<strong>Working Hours:</strong> Monday - Saturday, 7am - 10pm
							</li>
						</ul>
					</div>
					<div className="col-sm-6 col-lg-4 mt-2-2 text-sm-end text-lg-start">
						<h4 className="text-primary mb-4">
							<i className="ti-email pe-3"></i>Email
						</h4>
						<ul className="list-unstyled display-md-29 display-xl-28 mb-0">
							<li>
								<a href="mailto:info@handymanpro.ca">info@handymanpro.ca</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactInfoSection;
