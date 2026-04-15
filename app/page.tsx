import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import ContactFormSection from "./contact/ContactFormSection";

export default function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Services />
			<ContactFormSection />
		</div>
	);
}
