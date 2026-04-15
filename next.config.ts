import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fixityhtml.websitelayout.net",
				pathname: "/img/content/**",
			},
		],
	},
};

export default nextConfig;
