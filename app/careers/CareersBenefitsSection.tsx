import React from "react";

const CareersBenefitsSection = () => {
	const benefits = [
		{
			icon: "bi-cash-stack",
			title: "Competitive Pay",
			description:
				"Above-industry wages with performance bonuses and overtime opportunities",
		},
		{
			icon: "bi-calendar-check",
			title: "Flexible Schedule",
			description:
				"Work-life balance with flexible scheduling and paid time off",
		},
		{
			icon: "bi-people",
			title: "Great Work Culture",
			description:
				"Supportive team environment with collaborative atmosphere and mutual respect",
		},
	];

	return (
		<section className="py-6 bg-light">
			<div className="container">
				<div className="heading-style01 mb-1-9 mb-xl-5 text-center">
					<span className="small-text">Why Join Us</span>
					<h2 className="display-5">Benefits & Perks</h2>
				</div>
				<div className="row">
					{benefits.map((benefit, index) => (
						<div key={index} className="col-lg-4 col-md-6 mb-4">
							<div className="text-center">
								<div className="mb-3">
									<i
										className={`bi ${benefit.icon} text-primary`}
										style={{ fontSize: "2.5rem" }}
									></i>
								</div>
								<h4 className="h5 text-dark mb-3">{benefit.title}</h4>
								<p className="text-muted">{benefit.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CareersBenefitsSection;
