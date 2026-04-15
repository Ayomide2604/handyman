import React from "react";
import Image from "next/image";

interface PageBannerProps {
	title: string;
	backgroundImage: string;
	breadcrumbs?: Array<{ label: string; href?: string }>;
	overlayOpacity?: number;
	className?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
	title,
	backgroundImage,
	breadcrumbs = [],
	overlayOpacity = 0.9,
	className = "",
}) => {
	return (
		<section
			className={`page-title-section bg-img cover-background top-position1 left-overlay-dark ${className}`}
			style={{
				position: "relative",
			}}
		>
			<Image
				src={backgroundImage}
				alt={`${title} banner background`}
				fill
				style={{
					objectFit: "cover",
					objectPosition: "center",
				}}
				priority
			/>
			<div
				className="overlay-dark"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: `rgba(0,0,0,${overlayOpacity})`,
					zIndex: 1,
				}}
			></div>
			<div className="container" style={{ position: "relative", zIndex: 2 }}>
				<div className="row">
					<div className="col-md-12">
						<h1>{title}</h1>
						{breadcrumbs.length > 0 && (
							<ul className="list-unstyled">
								{breadcrumbs.map((breadcrumb, index) => (
									<li key={index}>
										{breadcrumb.href ? (
											<a href={breadcrumb.href}>{breadcrumb.label}</a>
										) : (
											breadcrumb.label
										)}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PageBanner;
