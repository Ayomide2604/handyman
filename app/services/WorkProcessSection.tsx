import React from "react";

const WorkProcessSection = () => {
	const processes = [
		{
			id: 1,
			title: "Business Planning",
			description: "Taking seamless key performance indicators.",
			icon: "https://fixityhtml.websitelayout.net/img/icons/icon-04.png"
		},
		{
			id: 2,
			title: "Human Resources",
			description: "Engage fully tested process improvement platforms.",
			icon: "https://fixityhtml.websitelayout.net/img/icons/icon-05.png"
		},
		{
			id: 3,
			title: "Strategic Planning",
			description: "Leverage other resource leveling convergence.",
			icon: "https://fixityhtml.websitelayout.net/img/icons/icon-06.png"
		},
		{
			id: 4,
			title: "Worldwide Coverage",
			description: "Globally network focused material products.",
			icon: "https://fixityhtml.websitelayout.net/img/icons/icon-07.png"
		}
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
											<img
												src={process.icon}
												alt={process.title}
											/>
										</span>
									</div>
									<div className="text-center">
										<h4>{process.title}</h4>
										<p className="mb-0">
											{process.description}
										</p>
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
