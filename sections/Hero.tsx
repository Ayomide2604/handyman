import React from "react";

const Hero = () => {
	return (
		<section className="full-screen top-position1 p-0">
			<div
				className="bg-img  left-overlay-dark w-100 min-vh-100"
				data-overlay-dark={85}
				style={{
					backgroundImage: "url('/hero.jpeg')",
					backgroundSize: "contain",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="container d-flex flex-column">
					<div className="row align-items-center min-vh-100 pt-6 pt-md-0">
						<div className="col-md-10 col-lg-8 col-xl-7 col-xxl-7 mb-1-9 mb-lg-0 pt-6 pb-12 py-sm-6 banner-heading">
							<span className="text-secondary text-uppercase small letter-spacing-2 d-block font-weight-700 mb-3 d-block small-title">
								Handyman Services, since 2020.
							</span>
							<h1 className="text-white mb-2-2 display-2 font-weight-800 title">
								Fast Services With{" "}
								<span className="text-secondary">Quality Workmanship.</span>
							</h1>
							<a href="#" className="butn me-2 my-1 my-sm-0">
								<span>Learn More</span>
							</a>
							<a href="#" className="butn secondary my-1 my-sm-0">
								How We Work
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
