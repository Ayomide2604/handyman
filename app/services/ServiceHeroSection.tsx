import React from "react";

const ServiceHeroSection = () => {
	return (
		<section className="pb-xl-24">
			<div className="container pb-xxl-6">
				<div className="row mt-n5">
					<div className="col-lg-6 col-xl-5 mt-5">
						<div className="position-relative text-center text-sm-start">
							<img
								src="https://fixityhtml.websitelayout.net/img/services/service-10.jpg"
								alt="..."
							/>
							<div className="position-absolute p-5 bg-primary right-5 right-lg-n10 bottom-n5 bottom-lg-n30 w-70 d-none d-sm-block">
								<div className="mb-3">
									<i className="ti-stats-up text-white display-15" />
								</div>
								<h3 className="h4 text-white">Awards recieved</h3>
								<p className="text-white mb-0 font-weight-100">
									Our agency manages of digital support services to
									businesses.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-xl-7 mt-5">
						<div className="ps-lg-5 ps-xxl-0">
							<div className="heading-style01 mb-1-9 mb-xl-5">
								<span className="small-text">Our Service</span>
								<h2 className="display-5">
									We protect your business, You'll have no more worries!
								</h2>
							</div>
							<div className="ps-lg-8 ps-xxl-24">
								<p className="mb-1-9 mb-sm-2-9 lead font-weight-500">
									An organization or entrepreneurial entity engaged in
									commercial, industrial, or professional activities is
									referred to as a business.
								</p>
								<a href="about.html" className="butn secondary">
									<span>Learn More</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceHeroSection;
