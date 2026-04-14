"use client";
import React, { useEffect, useRef } from "react";

import "./Header.css";

const Header = () => {
	const logoDefaultRef = useRef<HTMLImageElement>(null);
	const logoScrolledRef = useRef<HTMLImageElement>(null);
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;

			if (
				logoDefaultRef.current &&
				logoScrolledRef.current &&
				headerRef.current &&
				headerRef.current.parentNode
			) {
				try {
					if (scrollTop <= 50) {
						// At the top - show logo-dark.png (default)
						headerRef.current.classList.remove("scrollHeader");
						headerRef.current.classList.add("fixedHeader");
						logoDefaultRef.current.style.display = "block";
						logoScrolledRef.current.style.display = "none";
					} else {
						// Scrolled down - show logo1.png
						headerRef.current.classList.remove("fixedHeader");
						headerRef.current.classList.add("scrollHeader");
						logoDefaultRef.current.style.display = "none";
						logoScrolledRef.current.style.display = "block";
					}
				} catch (error) {
					console.warn("Header logo switching error:", error);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Check immediately on load

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header ref={headerRef} className="header-style1 menu_area-light mt-n2">
			<div className="navbar-default border-bottom border-color-light-white">
				<div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
					<div className="row align-items-center">
						<div className="col-12 col-lg-12">
							<div className="menu_area alt-font">
								<nav className="navbar navbar-expand-lg navbar-light p-0">
									<div className="navbar-header navbar-header-custom">
										{/* start logo */}
										<a href="/" className="navbar-brand">
											<img
												ref={logoDefaultRef}
												className="logo-default"
												src="/logo.png"
												alt="logo"
											/>
											<img
												ref={logoScrolledRef}
												className="logo-scrolled"
												src="/logo-dark.png"
												alt="logo"
												style={{ display: "none" }}
											/>
										</a>
										{/* end logo */}
									</div>
									<div className="navbar-toggler bg-secondary" />
									{/* start menu area */}
									<ul
										className="navbar-nav ms-auto"
										id="nav"
										style={{ display: "none" }}
									>
										<li>
											<a href="/">Home</a>
										</li>
										<li>
											<a href="/about">About</a>
										</li>
										<li>
											<a href="/services">Services</a>
										</li>
										<li>
											<a href="/contact">Contact Us</a>
										</li>
									</ul>
									{/* end menu area */}
									{/* start attribute navigation */}
									<div className="attr-nav align-items-xl-center ms-xl-auto main-font">
										<ul>
											<li className="d-none d-xl-inline-block">
												<a href="/contact" className="butn secondary md">
													<span className="text-white">Get Free Quote</span>
												</a>
											</li>
										</ul>
									</div>
									{/* end attribute navigation */}
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
