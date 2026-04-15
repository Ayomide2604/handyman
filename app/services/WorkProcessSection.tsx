import React from "react";

const WorkProcessSection = () => {
	const processes = [
		{
			id: 1,
			title: "Free Estimate",
			description:
				"Contact us for a detailed, no-obligation quote tailored to your specific handyman needs.",
			icon: "bi-calculator",
		},
		{
			id: 2,
			title: "Schedule Service",
			description:
				"We'll work around your schedule to find the perfect time for your handyman project.",
			icon: "bi-calendar-check",
		},
		{
			id: 3,
			title: "Professional Work",
			description:
				"Our experienced team completes the job with quality craftsmanship and attention to detail.",
			icon: "bi-tools",
		},
		{
			id: 4,
			title: "Satisfaction Guaranteed",
			description:
				"We ensure you're 100% satisfied with our work before we consider the job complete.",
			icon: "bi-shield-check",
		},
	];

	return (
		<section>
			<div className="container">
				<div className="heading-style01 mb-1-9 mb-xl-5 text-center">
					<span className="small-text">Our Process</span>
					<h2 className="display-5">Our Working Process</h2>
				</div>
				<div className="row g-5">
					{processes.map((process) => (
						<div key={process.id} className="col-sm-6 col-lg-3">
							<div className="card card-style06 border-0">
								<div className="card-body p-0 text-center">
									<div className="icon-holder d-inline-block text-center position-relative mb-1-6 mb-lg-2-6">
										<div className="box" />
										<span className="img-box">
											<i
												className={`bi ${process.icon} display-1 text-primary`}
											></i>
										</span>
									</div>
									<div className="text-center">
										<h4>{process.title}</h4>
										<p className="mb-0">{process.description}</p>
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

export default WorkProcessSection;
