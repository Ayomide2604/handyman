import React from "react";
import PageTitle from "./PageTitle";
import ServiceHeroSection from "./ServiceHeroSection";
import Services from "@/sections/Services";
import WorkProcessSection from "./WorkProcessSection";
import MissionSection from "./MissionSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"Our Services - Professional Handyman in Edmonton | Plumbing, Electrical, Carpentry & More",
	description:
		"Complete handyman services in Edmonton. Expert plumbing, electrical, carpentry, painting, fencing, decks, drywall & flooring repairs. 25 years of trusted service.",
	keywords:
		"handyman services Edmonton, plumbing repairs Edmonton, electrical services Edmonton, carpentry Edmonton, painting services Edmonton, fencing Edmonton, deck repair Edmonton, drywall repair Edmonton, flooring Edmonton, home maintenance Edmonton",
	authors: [{ name: "Handyman Pro Plus" }],
	openGraph: {
		title:
			"Our Services - Professional Handyman in Edmonton | Plumbing, Electrical, Carpentry & More",
		description:
			"Complete handyman services in Edmonton. Expert plumbing, electrical, carpentry, painting, fencing, decks, drywall & flooring repairs. 25 years of trusted service.",
		type: "website",
		locale: "en_CA",
	},
	robots: "index, follow",
};

const page = () => {
	return (
		<>
			{/* PAGE TITLE */}
			<PageTitle />

			{/* SERVICE HERO SECTION */}
			<ServiceHeroSection />

			{/* SERVICES SECTION */}
			<Services />

			{/* WORK PROCESS SECTION */}
			<WorkProcessSection />

			{/* MISSION SECTION */}
			<MissionSection />
		</>
	);
};

export default page;
