import React from "react";
import PageBanner from "@/components/PageBanner";

const PageTitle = () => {
	return (
		<PageBanner
			title="Services"
			backgroundImage="/hero.jpeg"
			breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
		/>
	);
};

export default PageTitle;
