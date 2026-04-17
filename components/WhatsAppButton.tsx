"use client";

import React from "react";

const WhatsAppButton = () => {
	const phoneNumber = "17808026830"; // Your phone number with country code
	const message = "Hello! I need help with handyman services.";
	
	const handleClick = () => {
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
		window.open(whatsappUrl, '_blank');
	};

	return (
		<div 
			className="whatsapp-float"
			onClick={handleClick}
			title="Chat on WhatsApp"
		>
			<i className="bi bi-whatsapp"></i>
		</div>
	);
};

export default WhatsAppButton;
