import PageBanner from "@/components/PageBanner";

const AboutPageTitleSection = () => {
	return (
		<PageBanner
			title="About Us"
			backgroundImage="/hero.jpeg"
			breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
		/>
	);
};

export default AboutPageTitleSection;
