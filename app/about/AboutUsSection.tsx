import React from "react";
import Image from "next/image";

const AboutUsSection = () => {
	return (
		<section>
			<div className="container">
				<div className="row align-items-center mt-n5">
					<div className="col-lg-6 mt-5">
						<div className="pe-1-9 pe-xl-6 pe-xxl-15">
							<div className="heading-style01 mb-1-9 mb-xl-5">
								<span className="small-text">Who We Are</span>
								<h2 className="display-5">
									Your Trusted Edmonton Handyman Experts!
								</h2>
							</div>
							<p className="mb-5">
								Professional handyman services serving Edmonton, Sherwood Park,
								St. Albert, Leduc, and Stony Plain. With over 10 years of
								experience, we provide reliable home repair solutions with
								quality craftsmanship and exceptional customer service. From
								minor repairs to major renovations, we're committed to keeping
								your home in perfect condition.
							</p>
							<div>
								<a href="/services" className="butn">
									More Services
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mt-5">
						<div className="text-end position-relative">
							<Image
								src="https://fixityhtml.websitelayout.net/img/content/about-img-06.jpg"
								alt="Professional handyman team working on home project"
								width={600}
								height={400}
								className="img-fluid rounded-4"
							/>
							<div className="position-absolute bottom-n15 left-n5 d-none d-md-block">
								<Image
									src="https://fixityhtml.websitelayout.net/img/content/about-img-07.jpg"
									alt="Completed handyman project"
									width={200}
									height={150}
									className="img-fluid rounded-4"
									style={{
										border: "4px solid white",
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUsSection;
