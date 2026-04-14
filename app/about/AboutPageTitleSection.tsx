import React from "react";
import PageBanner from "@/components/PageBanner";

const AboutPageTitleSection = () => {
	return (
		<PageBanner
			title="About Us"
			backgroundImage="https://fixityhtml.websitelayout.net/img/banner/page-title-01.jpg"
			breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
		/>
	);
};

export default AboutPageTitleSection;
