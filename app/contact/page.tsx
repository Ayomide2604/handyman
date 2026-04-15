import React from "react";
import PageTitleSection from "./PageTitleSection";
import ContactInfoSection from "./ContactInfoSection";
import ContactFormSection from "./ContactFormSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"Contact Us - Edmonton Handyman Services | Free Quotes | 25 Years Experience",
	description:
		"Contact Edmonton's trusted handyman service for free quotes on plumbing, electrical, carpentry, painting & more. Call or message us for professional home repairs.",
	keywords:
		"contact handyman Edmonton, handyman phone Edmonton, handyman quote Edmonton, free handyman estimate Edmonton, handyman contact information, emergency handyman Edmonton, book handyman service Edmonton",
	authors: [{ name: "Handyman Pro Plus" }],
	openGraph: {
		title:
			"Contact Us - Edmonton Handyman Services | Free Quotes | 25 Years Experience",
		description:
			"Contact Edmonton's trusted handyman service for free quotes on plumbing, electrical, carpentry, painting & more. Call or message us for professional home repairs.",
		type: "website",
		locale: "en_CA",
	},
	robots: "index, follow",
};

const ContactPage = () => {
	return (
		<>
			<PageTitleSection />
			<ContactInfoSection />
			<ContactFormSection />
		</>
	);
};

export default ContactPage;
