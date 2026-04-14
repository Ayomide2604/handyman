import React from "react";

const ServicesGrid = () => {
	const services = [
		{
			id: 1,
			title: "Loading & Unloading",
			link: "loading-unloading.html",
			image: "https://fixityhtml.websitelayout.net/img/services/service-01.jpg",
			icon: "https://fixityhtml.websitelayout.net/img/icons/service-icon-01.png",
			description: "Quality Work is Best Organization Building Make all time."
		},
		{
			id: 2,
			title: "Commercial & Local",
			link: "commercial-local.html",
			image: "https://fixityhtml.websitelayout.net/img/services/service-02.jpg",
			icon: "https://fixityhtml.websitelayout.net/img/icons/service-icon-02.png",
			description: "Quality Work is Best Organization Building Make all time."
		},
		{
			id: 3,
			title: "Storage Units",
			link: "storage-units.html",
			image: "https://fixityhtml.websitelayout.net/img/services/service-03.jpg",
			icon: "https://fixityhtml.websitelayout.net/img/icons/service-icon-03.png",
			description: "Quality Work is Best Organization Building Make all time."
		},
		{
			id: 4,
			title: "Road Transport",
			link: "road-transport.html",
			image: "https://fixityhtml.websitelayout.net/img/services/service-04.jpg",
			icon: "https://fixityhtml.websitelayout.net/img/icons/service-icon-04.png",
			description: "Quality Work is Best Organization Building Make all time."
		},
		{
			id: 5,
			title: "Warehousing",
			link: "warehousing.html",
			image: "https://fixityhtml.websitelayout.net/img/services/service-05.jpg",
			icon: "https://fixityhtml.websitelayout.net/img/icons/service-icon-05.png",
			description: "Quality Work is Best Organization Building Make all time."
		},
		{
			id: 6,
			title: "Cargo Insurance",
			link: "cargo-insurance.html",
			image: "https://fixityhtml.websitelayout.net/img/services/service-06.jpg",
			icon: "https://fixityhtml.websitelayout.net/img/icons/service-icon-06.png",
			description: "Quality Work is Best Organization Building Make all time."
		}
	];

	return (
		<section className="position-relative z-index-9 bg-light">
			<div className="container position-relative z-index-9">
				<div className="heading-style01 mb-1-9 mb-xl-5 text-center">
					<span className="small-text">Our Services</span>
					<h2 className="display-5">Provide Best Services</h2>
				</div>
				<div className="row gx-xxl-5 mt-n1-9">
					{services.map((service) => (
						<div key={service.id} className="col-md-6 col-xl-4 mt-1-9">
							<div className="card rounded-0 border-0 card-style05">
								<div className="card-body">
									<img
										src={service.image}
										alt={service.title}
									/>
									<div className="title">
										<div className="blue-bg" />
										<div className="card-text">
											<h3 className="h5 mb-0">
												<a href={service.link}>
													{service.title}
												</a>
											</h3>
											<div className="text">
												<p className="mb-0">
													{service.description}
												</p>
											</div>
										</div>
										<div className="card-butn">
											<a href={service.link} className="text-white">
												More Details
												<i className="ti-arrow-right align-middle ms-2" />
											</a>
										</div>
										<div className="icon">
											<img
												src={service.icon}
												className="w-50px"
												alt={service.title}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesGrid;
