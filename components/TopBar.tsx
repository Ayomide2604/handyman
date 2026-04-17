"use client";

import React from "react";

const TopBar = () => {
	return (
		<div className="topbar bg-dark text-white py-2 d-none d-lg-block">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6">
						<div className="d-flex align-items-center gap-4">
							{/* Phone */}
							<a
								href="tel:7808026830"
								className="d-flex align-items-center gap-2 text-white text-decoration-none"
							>
								<i className="bi bi-telephone-fill"></i>
								<span className="small">(780) 802-6830</span>
							</a>
							{/* Email */}
							<a
								href="mailto:homerepair@handymanplusservices.com"
								className="d-flex align-items-center gap-2 text-white text-decoration-none"
							>
								<i className="bi bi-envelope-fill"></i>
								<span className="small">
									homerepair@handymanplusservices.com
								</span>
							</a>
						</div>
					</div>
					<div className="col-md-6 text-md-end">
						<div className="d-flex align-items-center justify-content-md-end gap-3">
							{/* Social Links */}
							<a
								href="https://www.facebook.com/profile.php?id=61570681256562&mibextid=wwXIfr&rdid=x1UZBWjNT0drjsMA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CLxrkixK2%2F%3Fmibextid%3DwwXIfr%23rdid%3Dx1UZBWjNT0drjsMA"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white text-secondary-hover"
							>
								<i className="bi bi-facebook"></i>
							</a>
							<a
								href="https://www.instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white text-secondary-hover"
							>
								<i className="bi bi-instagram"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
