import React from "react";

const CareersPositionsSection = () => {
	const positions = [
		{
			title: "Professional Handyman",
			type: "Full-Time",
			experience: "3+ Years",
			location: "Edmonton & Surrounding Areas",
			description: "Seeking experienced handymen with strong skills in residential repairs, maintenance, and renovation projects."
		},
		{
			title: "Apprentice Handyman",
			type: "Full-Time",
			experience: "1-2 Years",
			location: "Edmonton & Surrounding Areas", 
			description: "Great opportunity for motivated individuals looking to grow their skills in the handyman trade."
		},
		{
			title: "Specialized Tradesperson",
			type: "Full-Time/Contract",
			experience: "5+ Years",
			location: "Edmonton & Surrounding Areas",
			description: "Looking for specialists in plumbing, electrical, carpentry, or other skilled trades."
		}
	];

	return (
		<section id="positions" className="py-6">
			<div className="container">
				<div className="heading-style01 mb-1-9 mb-xl-5 text-center">
					<span className="small-text">Open Positions</span>
					<h2 className="display-5">Current Opportunities</h2>
				</div>
				<div className="row">
					{positions.map((position, index) => (
						<div key={index} className="col-lg-4 col-md-6 mb-4">
							<div className="card h-100 border-0 shadow-hover">
								<div className="card-body p-4">
									<div className="mb-3">
										<span className="badge bg-primary me-2">{position.type}</span>
										<span className="badge bg-secondary">{position.experience}</span>
									</div>
									<h4 className="card-title text-dark mb-3">{position.title}</h4>
									<p className="text-muted mb-3">
										<i className="bi bi-geo-alt me-2"></i>
										{position.location}
									</p>
									<p className="card-text text-dark mb-4">{position.description}</p>
									<a href="#application" className="butn secondary md">
										Apply Now
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CareersPositionsSection;
