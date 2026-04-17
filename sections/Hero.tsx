import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		<section className="full-screen top-position1 p-0">
			<div
				className="bg-img  left-overlay-dark w-100 min-vh-100 relative"
				data-overlay-dark={20}
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
							<span className="text-secondary text-uppercase small letter-spacing-2 d-block font-weight-bold mb-3 d-block small-title mt-5">
								Professional Handyman Services in Edmonton Area
							</span>
							<h1 className="text-white mb-2-2 display-3 font-weight-bold title">
								Quality Home Repairs{" "}
								<span className="text-secondary">You Can Trust.</span>
							</h1>
							<div className="d-block d-lg-none text-start mt-4">
								<a href="tel:7808026830" className="text-decoration-none">
									<span
										style={{
											fontSize: "18px",
											fontWeight: "bold",
											color: "#ffffff",
										}}
									>
										(780) 802-6830
									</span>
								</a>
							</div>
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
							<div className="mt-4">
								<div className="text-white mb-2 d-flex align-items-center gap-2">
									<i className="bi bi-patch-check-fill"></i>
									<strong>Licensed & Insured Professionals</strong>
								</div>
								<div className="text-white mb-2 d-flex align-items-center gap-2">
									<i className="bi bi-geo-alt-fill"></i>
									<strong>Serving All Edmonton Area Communities</strong>
								</div>
								<div className="text-white d-flex align-items-center gap-2">
									<i className="bi bi-shield-check"></i>
									<strong>100% Satisfaction Guarantee</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
