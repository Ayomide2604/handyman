import React from "react";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import servicesData from "@/data/services.json";
import { getServiceContent } from "@/data/serviceContent";

interface Service {
	id: string;
	title: string;
	description: string;
	image: string;
}

interface ServicePageProps {
	params: Promise<{
		slug: string;
	}>;
}

const ServicePage = async ({ params }: ServicePageProps) => {
	const { slug } = await params;
	const allServices = [
		...servicesData.mainServices,
		...servicesData.specialtyServices,
	];
	const service = allServices.find((s) => s.id === slug);
	const detail = getServiceContent(slug);

	if (!service || !detail) {
		notFound();
	}

	return (
		<>
			<PageBanner
				title={detail.title}
				backgroundImage="https://fixityhtml.websitelayout.net/img/banner/page-title-01.jpg"
				breadcrumbs={[
					{ label: "Home", href: "/" },
					{ label: "Services", href: "/services" },
					{ label: detail.title },
				]}
			/>

			<section>
				<div className="container">
					<div className="row mt-n5">
						<div className="col-lg-4 mt-5 order-2 order-lg-1">
							<div className="pe-xl-4">
								<div className="sidebar">
									<div className="bg-light p-2-2 mb-1-9">
										<div className="heading-style01 mb-1-9">
											<h3 className="small-text mb-0 h6 text-primary">
												Our Services
											</h3>
										</div>
										<ul className="service-list list-unstyled mb-0">
											{servicesData.mainServices.map((s: Service) => (
												<li
													key={s.id}
													className={s.id === service.id ? "active" : ""}
												>
													<a href={`/services/${s.id}`}>{s.title}</a>
												</li>
											))}
											<li>
												<hr className="dropdown-divider" />
											</li>
											{servicesData.specialtyServices.map((s: Service) => (
												<li
													key={s.id}
													className={s.id === service.id ? "active" : ""}
												>
													<a href={`/services/${s.id}`}>{s.title}</a>
												</li>
											))}
										</ul>
									</div>
									<div className="bg-primary p-1-6 p-sm-1-9 p-xxl-5 mb-1-9">
										<img
											src="https://fixityhtml.websitelayout.net/img/icons/service-details-01.png"
											alt=""
											className="mb-4"
										/>
										<h4 className="h2 text-white mb-3">
											Edmonton's Trusted Handyman
										</h4>
										<p className="text-white opacity7 mb-1-9">
											Professional handyman services with years of experience
											serving Edmonton homeowners.
										</p>
										<a href="/contact" className="butn secondary white-hover">
											Get a Free Quote
										</a>
									</div>
									<div
										className="bg-img cover-background p-1-6 p-sm-1-9 p-xxl-5 dark-overlay"
										style={{
											backgroundImage:
												"url('https://fixityhtml.websitelayout.net/img/services/service-details-05.jpg')",
										}}
									>
										<div className="position-relative z-index-9">
											<h3 className="display-4 display-xxl-3 font-weight-800 text-secondary">
												24/7
											</h3>
											<p className="text-white lead lh-base">
												Emergency Services Available
											</p>
											<h4 className="text-white mb-0 lh-base">
												<a
													href="tel:+17808026830"
													className="text-secondary display-25 d-block font-weight-500"
												>
													Call Now: (780) 802-6830
												</a>
											</h4>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-8 mt-5 order-1 order-lg-2">
							<div>
								<img
									src={detail.image}
									alt={detail.title}
									className="mb-1-9 img-fluid rounded-3"
								/>
								<h2 className="mb-4">{detail.title} Services in Edmonton</h2>
								<p className="mb-1-9 mb-md-5">{detail.longDescription}</p>

								<div className="row align-items-xl-center mb-5 mt-n5">
									<div className="col-md-6 mt-5">
										<div className="pe-xl-5">
											<h4 className="mb-4 h3">
												Common {detail.title} Issues
											</h4>
											<p className="mb-4">
												Edmonton homeowners often face these{" "}
												{detail.title.toLowerCase()} challenges due to our
												climate, aging homes, and day-to-day use.
											</p>
											<ul className="list-unstyled mb-0">
												{detail.commonIssues.map((issue) => (
													<li
														key={issue}
														className="d-flex align-items-center mb-3"
													>
														<i className="ti-check text-secondary pe-3 font-weight-800 display-28 pt-2"></i>
														{issue}
													</li>
												))}
											</ul>
										</div>
									</div>
									<div className="col-md-6 mt-5">
										<div className="text-end">
											<img
												src={detail.heroImage}
												alt=""
												className="img-fluid rounded-3"
											/>
										</div>
									</div>
								</div>

								<h3 className="mb-4">What We Offer</h3>
								<p className="mb-4">
									Our {detail.title.toLowerCase()} work covers the full scope of
									what Edmonton homes need, from quick fixes to full projects.
								</p>
								<div className="row mb-5">
									<div className="col-md-6">
										<ul className="list-unstyled">
											{detail.features
												.slice(0, Math.ceil(detail.features.length / 2))
												.map((item) => (
													<li
														key={item}
														className="d-flex align-items-start mb-3"
													>
														<i className="ti-check text-secondary pe-3 font-weight-800 display-28 pt-2"></i>
														<span>{item}</span>
													</li>
												))}
										</ul>
									</div>
									<div className="col-md-6">
										<ul className="list-unstyled">
											{detail.features
												.slice(Math.ceil(detail.features.length / 2))
												.map((item) => (
													<li
														key={item}
														className="d-flex align-items-start mb-3"
													>
														<i className="ti-check text-secondary pe-3 font-weight-800 display-28 pt-2"></i>
														<span>{item}</span>
													</li>
												))}
										</ul>
									</div>
								</div>

								<h3 className="mb-4">Our Process</h3>
								<p className="mb-4">
									Every job follows a clear process so you know what to expect
									from first call to final walkthrough.
								</p>
								<div className="row mb-5 mt-n4">
									{detail.process.map((step) => (
										<div key={step.step} className="col-md-6 col-xl-4 mt-4">
											<div className="border rounded-3 p-3 h-100 bg-light">
												<span className="text-primary font-weight-800 display-26 d-block mb-2">
													{String(step.step).padStart(2, "0")}
												</span>
												<h4 className="h5 mb-2">{step.title}</h4>
												<p className="mb-0 small">{step.description}</p>
											</div>
										</div>
									))}
								</div>

								<h3 className="mb-4">Why Choose Us</h3>
								<p className="mb-5">
									Choosing our {detail.title.toLowerCase()} services in Edmonton
									means working with a team that understands local conditions and
									stands behind the work.
								</p>
								<div className="row mb-5 mt-n5">
									{detail.benefits.map((b) => (
										<div
											key={b.title}
											className="col-sm-6 col-xl-3 mt-5"
										>
											<div className="text-center">
												<img
													src={b.icon}
													alt=""
													className="mb-2"
												/>
												<h4 className="h5 mb-2">{b.title}</h4>
												<p className="small mb-0 text-muted lh-base">
													{b.description}
												</p>
											</div>
										</div>
									))}
								</div>

								<div className="row mb-5">
									<div className="col-md-6 mb-3 mb-md-0">
										<div className="border rounded-3 p-4 h-100">
											<h4 className="h5 mb-3">Areas We Serve</h4>
											<p className="mb-0">{detail.areas}</p>
										</div>
									</div>
									<div className="col-md-6">
										<div className="border rounded-3 p-4 h-100 bg-primary bg-opacity-10">
											<h4 className="h5 mb-3">Emergency &amp; Urgent Needs</h4>
											<p className="mb-0">{detail.emergency}</p>
										</div>
									</div>
								</div>

								<div id="accordion" className="accordion-style1">
									{detail.faqs.map((faq, index) => (
										<div key={faq.question} className="card mb-2">
											<div className="card-header" id={`heading${index}`}>
												<h5 className="mb-0">
													<button
														className="btn btn-link"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target={`#collapse${index}`}
														aria-expanded={index === 0 ? "true" : "false"}
														aria-controls={`collapse${index}`}
													>
														{faq.question}
													</button>
												</h5>
											</div>
											<div
												id={`collapse${index}`}
												className={`collapse ${index === 0 ? "show" : ""}`}
												aria-labelledby={`heading${index}`}
												data-bs-parent="#accordion"
											>
												<div className="card-body">{faq.answer}</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ServicePage;
