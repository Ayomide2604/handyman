import React from "react";

const MissionSection = () => {
	return (
		<section className="pt-0">
			<div className="container">
				<div className="row align-items-xl-center mt-n1-9 mt-md-n10">
					<div className="col-lg-6 mt-1-9 mt-md-10">
						<div className="position-relative">
							<img
								src="https://fixityhtml.websitelayout.net/img/services/service-mission-01.jpg"
								alt="..."
							/>
							<div className="position-absolute bottom-n10 bottom-lg-n30 end-0 d-none d-md-block">
								<img
									src="https://fixityhtml.websitelayout.net/img/services/service-mission-02.jpg"
									alt="..."
								/>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mt-1-9 mt-md-10">
						<div className="ps-lg-8 ps-xl-10">
							<div className="heading-style01 mb-1-9 mb-xl-5">
								<span className="small-text">Our Mission</span>
								<h2 className="display-5">
									Our goal is to provide excellent service to you.
								</h2>
							</div>
							<p className="mb-1-9">
								With over 25 years of experience serving Edmonton and
								surrounding communities, Handyman Pro Plus is committed to
								delivering exceptional craftsmanship and reliable service. Our
								mission is to provide homeowners with affordable, professional
								handyman solutions that exceed expectations. From emergency
								repairs to complete renovations, we treat every project with the
								same dedication to quality and customer satisfaction that has
								built our reputation as Edmonton's trusted handyman service
								provider.
							</p>
							<a href="about.html" className="butn md">
								Read More
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MissionSection;
