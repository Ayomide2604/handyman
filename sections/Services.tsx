"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import servicesData from "../data/services.json";

const Services = () => {
	return (
		<section className="position-relative z-index-9 bg-light">
			<div className="container position-relative z-index-9">
				<div className="heading-style01 mb-1-9 mb-xl-5 text-center">
					<span className="small-text">Our Services</span>
					<h2 className="display-5">Professional Handyman Services</h2>
				</div>

				<Swiper
					modules={[Pagination]}
					spaceBetween={30}
					slidesPerView={1}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 25,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					pagination={{
						clickable: true,
						el: ".swiper-pagination",
					}}
					className="services-swiper"
				>
					{servicesData.mainServices.map((service) => (
						<SwiperSlide key={service.id}>
							<div className="card rounded-0 border-0 card-style05 h-100">
								<div className="card-body">
									<div className="text-center mb-3">
										<img
											src={service.image}
											alt={service.title}
											className="img-fluid w-100"
											style={{
												height: "200px",
												objectFit: "cover",
												borderRadius: "8px",
											}}
										/>
									</div>
									<div className="title">
										<div className="blue-bg" />
										<div className="card-text">
											<h3 className="h5 mb-0">
												<a href={`/services/${service.id}`}>{service.title}</a>
											</h3>
											<div className="text">
												<p className="mb-0">{service.description}</p>
											</div>
										</div>
										<div className="card-butn">
											<a
												href={`/services/${service.id}`}
												className="text-white"
											>
												More Details
												<span className="align-middle ms-2">»</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
					<div
						className="swiper-pagination"
						style={{
							marginTop: "20px",
							marginBottom: "20px",
							position: "relative",
						}}
					></div>
				</Swiper>

				<div className="row mt-5">
					<div className="col-12">
						<div className="heading-style01 mb-4 text-center">
							<span className="small-text">Specialty Services</span>
							<h3 className="h4">Additional Services</h3>
						</div>
					</div>
				</div>

				<div className="row gx-xxl-5">
					{servicesData.specialtyServices.map((service) => (
						<div key={service.id} className="col-md-6 col-lg-3 mt-1-9">
							<div className="text-center">
								<div className="mb-3">
									<img
										src={service.image}
										alt={service.title}
										className="display-4"
									/>
								</div>
								<h5 className="h6 mb-2">{service.title}</h5>
								<p className="mb-0 small">{service.description}</p>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-5">
					<a href="#contact" className="butn secondary">
						Get a Free Quote
					</a>
				</div>
			</div>
			<div className="position-absolute top-0 right-1 opacity1 shape-img-one">
				<img
					src="https://fixityhtml.websitelayout.net/img/content/shape-14.png"
					alt="..."
				/>
			</div>
		</section>
	);
};

export default Services;
