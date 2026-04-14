import React from "react";
import PageBanner from "@/components/PageBanner";

const PageTitle = () => {
	return (
		<PageBanner
			title="Services"
			backgroundImage="https://fixityhtml.websitelayout.net/img/banner/page-title-01.jpg"
			breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
		/>
	);
};

export default PageTitle;
