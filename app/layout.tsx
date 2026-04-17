import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

export const metadata: Metadata = {
	title:
		"Professional Handyman Services in Edmonton | 25 Years of Quality Home Repairs & Maintenance",
	description:
		"Expert handyman services in Edmonton, Sherwood Park, St. Albert, Leduc & Stony Plain. Professional plumbing, electrical, carpentry, painting, fencing, decks, drywall & flooring repairs.",
	keywords:
		"handyman Edmonton, home repairs Edmonton, plumbing services Edmonton, electrical repairs Edmonton, carpentry Edmonton, painting Edmonton, fencing Edmonton, deck repair Edmonton, drywall repair Edmonton, flooring installation Edmonton, handyman Sherwood Park, handyman St. Albert, handyman Leduc, handyman Stony Plain, professional handyman services, residential repairs, home maintenance Edmonton",
	authors: [{ name: "Handyman Pro Plus" }],
	openGraph: {
		title:
			"Professional Handyman Services in Edmonton | 25 Years of Quality Home Repairs & Maintenance",
		description:
			"Expert handyman services in Edmonton, Sherwood Park, St. Albert, Leduc & Stony Plain. Professional plumbing, electrical, carpentry, painting, fencing, decks, drywall & flooring repairs.",
		type: "website",
		locale: "en_CA",
	},
	robots: "index, follow",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				{/* Enhanced favicon for all devices */}
				<link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" />
				<link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" />
				<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<meta name="theme-color" content="#063b8b" />
				<meta name="msapplication-TileColor" content="#063b8b" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
					integrity="sha384-tViUnnbYAV00FLIhhi3v/dWt3Jxw4gZQcNoSCxCIFNJVCx7/D55/wXsrNIRANwdD"
					crossOrigin="anonymous"
				/>

				{/* Font Awesome rules are in plugins.css; webfonts are copied to /assets/fonts/ by scripts/copy-fontawesome.mjs on postinstall/build (from @fortawesome/fontawesome-free). */}

				{/* CSS */}
				<link rel="stylesheet" href="/assets/css/plugins.css" />
				<link rel="stylesheet" href="/assets/css/search.css" />
				<link rel="stylesheet" href="/assets/css/base.css" />
				<link rel="stylesheet" href="/assets/css/styles.css" />
			</head>

			<body>
				{/* Preloader */}
				<div id="preloader"></div>

				{/* Main Wrapper */}
				<div className="main-wrapper">
					<TopBar />
					<Header />
					{children}
					<Footer />
				</div>

				{/* JS Scripts */}
				<Script src="/assets/js/jquery.min.js" />
				<Script src="/assets/js/popper.min.js" />
				<Script src="/assets/js/bootstrap.min.js" />
				<Script src="/assets/js/core.min.js" />
				<Script src="/assets/js/search.js" />
				<Script src="/assets/js/main.js" />
				<Script src="/assets/js/plugins.js" />
				<Script src="/assets/js/scripts.js" />
			</body>
		</html>
	);
}
