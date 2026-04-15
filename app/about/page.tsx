import React from "react";
import AboutPageTitleSection from "./AboutPageTitleSection";
import AboutUsSection from "./AboutUsSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import MeetOwnerSection from "./MeetOwnerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"About Us - Professional Handyman Services in Edmonton | 25 Years Experience",
	description:
		"Learn about Edmonton's trusted handyman service with 25 years of experience. Professional home repairs, maintenance, and renovation services by local experts.",
	keywords:
		"about handyman Edmonton, handyman experience Edmonton, professional handyman team, home repair experts Edmonton, local handyman service, handyman company Edmonton",
	authors: [{ name: "Handyman Pro Plus" }],
	openGraph: {
		title:
			"About Us - Professional Handyman Services in Edmonton | 25 Years Experience",
		description:
			"Learn about Edmonton's trusted handyman service with 25 years of experience. Professional home repairs, maintenance, and renovation services by local experts.",
		type: "website",
		locale: "en_CA",
	},
	robots: "index, follow",
};

const About = () => {
	return (
		<div>
			<AboutPageTitleSection />
			<AboutUsSection />
			<WhyChooseUsSection />
			<MeetOwnerSection />
		</div>
	);
};

export default About;
