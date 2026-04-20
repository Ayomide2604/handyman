import React from "react";
import PageBanner from "@/components/PageBanner";
import CareersHeroSection from "./CareersHeroSection";
import CareersPositionsSection from "./CareersPositionsSection";
import CareersBenefitsSection from "./CareersBenefitsSection";
import CareersApplicationSection from "./CareersApplicationSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"Careers - Join Our Professional Handyman Team in Edmonton | Handyman Pro Plus",
	description:
		"Build your career with Edmonton's trusted handyman service. Join our team of licensed professionals serving Edmonton area communities. Competitive pay, benefits, and growth opportunities.",
	keywords:
		"handyman careers Edmonton, handyman jobs Edmonton, professional handyman employment, construction careers Edmonton, home repair jobs, handyman work Edmonton, skilled trades careers",
	authors: [{ name: "Handyman Pro Plus" }],
	openGraph: {
		title:
			"Careers - Join Our Professional Handyman Team in Edmonton | Handyman Pro Plus",
		description:
			"Build your career with Edmonton's trusted handyman service. Join our team of licensed professionals serving Edmonton area communities.",
		type: "website",
		locale: "en_CA",
	},
	robots: "index, follow",
};

const Careers = () => {
	return (
		<div>
			{/* <PageBanner
				title="Careers"
				backgroundImage="/hero.jpeg"
				breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
			/> */}
			<CareersHeroSection />
			{/* <CareersPositionsSection /> */}
			<CareersBenefitsSection />
			<CareersApplicationSection />
		</div>
	);
};

export default Careers;
