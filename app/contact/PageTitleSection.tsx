import React from "react";
import PageBanner from "@/components/PageBanner";

const PageTitleSection = () => {
	return (
		<PageBanner
			title="Contact Us"
			backgroundImage="/hero.jpeg"
			breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
		/>
	);
};

export default PageTitleSection;
