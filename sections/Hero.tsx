import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		<section className="full-screen top-position1 p-0">
			<div
				className="bg-img  left-overlay-dark w-100 min-vh-100 relative"
				data-overlay-dark={85}
			>
				<Image
					src="/hero.jpeg"
					alt="Professional handyman services in Edmonton"
					fill
					style={{
						objectFit: "contain",
						objectPosition: "center",
					}}
					priority
				/>
				<div className="container d-flex flex-column">
					<div className="row align-items-center min-vh-100 pt-6 pt-md-0">
						<div className="col-md-10 col-lg-8 col-xl-7 col-xxl-7 mb-1-9 mb-lg-0 pt-12 pb-12 py-sm-6 banner-heading">
							<span className="text-secondary text-uppercase small letter-spacing-2 d-block font-weight-700 mb-3 d-block small-title">
								Professional Handyman Services in Edmonton Area
							</span>
							<h1 className="text-white mb-2-2 display-3 font-weight-800 title">
								Quality Home Repairs{" "}
								<span className="text-secondary">You Can Trust.</span>
							</h1>
							<p className="text-white mb-4 lead">
								25 Years of Service Excellence - Serving Edmonton community and
								its surrounding cities but not limited to St. Albert, Leduc,
								Sherwood Park and Stony Plain
							</p>
							<a href="#services" className="butn me-2 my-1 my-sm-0">
								<span>View Services</span>
							</a>
							<a href="/contact" className="butn secondary my-1 my-sm-0">
								Get Free Quote
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
