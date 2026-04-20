import React from "react";
import Image from "next/image";

const CareersHeroSection = () => {
	return (
		<section className="full-screen top-position1 p-0">
			<div
				className="bg-img left-overlay-dark w-100 min-vh-100 relative"
				data-overlay-dark={20}
			>
				<Image
					src="/career-hero.jpg"
					alt="Join our professional handyman team"
					fill
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					priority
				/>
				<div className="container d-flex flex-column">
					<div className="row align-items-center min-vh-100 pt-6 pt-md-0">
						<div className="col-md-10 col-lg-8 col-xl-7 col-xxl-7 mb-1-9 mb-lg-0 pt-12 pb-12 py-sm-6 banner-heading">
							<span className="text-secondary text-uppercase small letter-spacing-2 d-block font-weight-bold mb-3 d-block small-title mt-5">
								Build Your Career With Us
							</span>
							<h1 className="text-white mb-2-2 display-3 font-weight-bold title">
								Join Our{" "}
								<span className="text-secondary">Professional Team</span>
							</h1>
							<p className="text-white mb-4 lead">
								Looking for skilled professionals who share our commitment to
								quality craftsmanship and exceptional customer service. Grow
								with a company that values expertise and rewards excellence.
							</p>
							<div className="d-flex gap-3 flex-wrap">
								<a href="#positions" className="butn me-2 my-1 my-sm-0">
									<span>View Open Positions</span>
								</a>
								<a href="#application" className="butn secondary my-1 my-sm-0">
									Apply Now
								</a>
							</div>
							<div className="mt-4">
								<div className="text-white mb-2 d-flex align-items-center gap-2">
									<i className="bi bi-patch-check-fill"></i>
									<strong>Licensed & Insured Company</strong>
								</div>
								<div className="text-white mb-2 d-flex align-items-center gap-2">
									<i className="bi bi-geo-alt-fill"></i>
									<strong>Serving Edmonton Area Communities</strong>
								</div>
								<div className="text-white d-flex align-items-center gap-2">
									<i className="bi bi-shield-check"></i>
									<strong>Competitive Pay & Benefits</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CareersHeroSection;
