import Image from "next/image";

const About = () => {
	return (
		<section className="about-style-02">
			<div className="container z-index-9 position-relative">
				<div className="row align-items-xl-center mt-n1-9">
					<div className="col-lg-6 mt-1-9 mb-lg-0">
						<div className="position-relative pb-sm-22 me-xxl-1-9">
							<div className="about-img1 z-index-2 position-relative text-center text-sm-start">
								<Image
									src="/about_us.jpg"
									alt="Professional handyman at work"
									width={400}
									height={500}
									className="img-fluid"
									// style={{ objectFit: "contain" }}
								/>
							</div>

							
						</div>
					</div>
					<div className="col-lg-6 mt-1-9">
						<div className="ps-lg-1-6 ps-xl-7">
							<div className="heading-style01 mb-1-9 mb-xl-2-0">
								<span className="small-text">About Us</span>
								<h2 className="display-5">
									Safe, Reliable &amp; Professional Handyman Services!
								</h2>
							</div>
							<p className="mb-xl-4">
								With 25 years of service excellence, Handyman Pro Plus
								understands that your home is your most valuable asset. Our team
								of skilled professionals provides comprehensive handyman
								services throughout Edmonton community and its surrounding
								cities but not limited to St. Albert, Leduc, Sherwood Park and
								Stony Plain. From minor repairs to major renovations, we deliver
								quality workmanship with attention to detail and customer
								satisfaction.
							</p>
							<ul className="list-unstyled border-bottom mb-1-9 pb-1-9">
								<li className="mb-3">
									<i className="bi bi-circle-fill text-secondary me-3" />
									Licensed & Insured Professionals
								</li>
								<li className="mb-3">
									<i className="bi bi-circle-fill text-secondary me-3" />
									Serving All Edmonton Area Communities
								</li>
								<li>
									<i className="bi bi-circle-fill text-secondary me-3" />
									100% Satisfaction Guarantee
								</li>
							</ul>

							{/* Signature Section */}
							{/* <div className="d-sm-flex justify-content-between align-items-center">
								<div className="d-flex mb-4 mb-sm-0">
									<div>
										<img
											src="https://fixityhtml.websitelayout.net/img/avatars/avatar-07.jpg"
											alt="..."
											className="rounded-circle"
										/>
									</div>
									<div className="ps-3">
										<h3 className="h5">George Soyemi</h3>
										<p className="mb-0">Founder</p>
									</div>
								</div>
								<div>
									<img src="/signature.png" alt="..." />
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
