import React from "react";
import PageTitle from "./PageTitle";
import ServiceHeroSection from "./ServiceHeroSection";
import Services from "@/sections/Services";
import WorkProcessSection from "./WorkProcessSection";
import MissionSection from "./MissionSection";

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
