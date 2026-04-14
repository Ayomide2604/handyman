import React from "react";

const ServiceHeroSection = () => {
	return (
		<section className="position-relative z-index-9 bg-light">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="pe-lg-5">
							<div className="heading-style01 mb-4">
								<span className="small-text">Professional Services</span>
								<h2 className="display-5">
									Expert Handyman Services in Edmonton
								</h2>
							</div>
							<p className="mb-4">
								Your trusted local handyman service provider in Edmonton. We
								offer comprehensive home repair and improvement solutions with
								professional craftsmanship and reliable service. From plumbing
								and electrical to painting and carpentry, we've got all your
								handyman needs covered.
							</p>
							<div className="d-flex gap-3 mb-4">
								<a href="/contact" className="butn">
									Get Free Quote
								</a>
								<a href="tel:+17808026830" className="butn secondary">
									Call (780) 802-6830
								</a>
							</div>
							<div className="row g-3">
								<div className="col-6">
									<div className="d-flex align-items-center">
										<div className="flex-shrink-0">
											<div
												className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
												style={{ width: "40px", height: "40px" }}
											>
												<i className="bi bi-check-lg"></i>
											</div>
										</div>
										<div className="flex-grow-1 ms-3">
											<h6 className="mb-0">Licensed & Insured</h6>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div className="d-flex align-items-center">
										<div className="flex-shrink-0">
											<div
												className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
												style={{ width: "40px", height: "40px" }}
											>
												<i className="bi bi-check-lg"></i>
											</div>
										</div>
										<div className="flex-grow-1 ms-3">
											<h6 className="mb-0">Local Edmonton</h6>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div className="d-flex align-items-center">
										<div className="flex-shrink-0">
											<div
												className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
												style={{ width: "40px", height: "40px" }}
											>
												<i className="bi bi-check-lg"></i>
											</div>
										</div>
										<div className="flex-grow-1 ms-3">
											<h6 className="mb-0">Satisfaction Guaranteed</h6>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div className="d-flex align-items-center">
										<div className="flex-shrink-0">
											<div
												className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
												style={{ width: "40px", height: "40px" }}
											>
												<i className="bi bi-check-lg"></i>
											</div>
										</div>
										<div className="flex-grow-1 ms-3">
											<h6 className="mb-0">24/7 Emergency</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<img
							src="https://fixityhtml.websitelayout.net/img/content/about-img-06.jpg"
							alt="Handyman Services"
							className="img-fluid rounded-4 shadow-lg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceHeroSection;
