import React from "react";

const About = () => {
	return (
		<section className="about-style-02">
			<div className="container z-index-9 position-relative">
				<div className="row align-items-xl-center mt-n1-9">
					<div className="col-lg-6 mt-1-9 mb-lg-0">
						<div className="position-relative pb-sm-22 me-xxl-1-9">
							<div className="about-img1 z-index-2 position-relative text-center text-sm-start">
								<img
									src="https://fixityhtml.websitelayout.net/img/content/about-11.jpg"
									alt="..."
								/>
							</div>
							<div className="about-img2 position-absolute right bottom-0 z-index-3 d-none d-sm-block">
								<img
									src="https://fixityhtml.websitelayout.net/img/content/about-12.jpg"
									alt="..."
								/>
							</div>
							<div className="position-absolute right top bg-secondary p-4 z-index-9 d-none d-sm-block">
								<h3 className="display-7 mb-1 text-white">
									<span className="countup">10</span>
									<span>+</span>
								</h3>
								<p className="mb-0 text-white">
									Years of <br />
									Experience
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mt-1-9">
						<div className="ps-lg-1-6 ps-xl-7">
							<div className="heading-style01 mb-1-9 mb-xl-2-0">
								<span className="small-text">About Us</span>
								<h2 className="display-5">
									Safe, Reliable &amp; Epress Moving Solutions!
								</h2>
							</div>
							<p className="mb-xl-4">
								We endeavor to comprehend what they're going through, what they
								need what their price tags are, and what means quite a bit to
								them and their clients. We interface with our clients.
							</p>
							<ul className="list-unstyled border-bottom mb-1-9 pb-1-9">
								<li className="mb-3">
									<i className="fa-regular fa-circle-dot text-secondary me-3" />
									Creative Work Insight
								</li>
								<li className="mb-3">
									<i className="fa-regular fa-circle-dot text-secondary me-3" />
									Always Work With Energetic Team
								</li>
								<li>
									<i className="fa-regular fa-circle-dot text-secondary me-3" />
									We are Award Winning Company
								</li>
							</ul>
							<div className="d-sm-flex justify-content-between align-items-center">
								<div className="d-flex mb-4 mb-sm-0">
									<div>
										<img
											src="https://fixityhtml.websitelayout.net/img/avatars/avatar-07.jpg"
											alt="..."
											className="rounded-circle"
										/>
									</div>
									<div className="ps-3">
										<h3 className="h5"> George Soyemi</h3>
										<p className="mb-0">Founder</p>
									</div>
								</div>
								<div>
									<img
										src="/signature.png"
										className="img-fluid"
										alt="..."
										style={{ objectFit: "contain", maxWidth: 250 }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
