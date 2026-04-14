import React from 'react';

const ContactInfoSection = () => {
  return (
    <section className="pb-0">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-12">
            <div className="heading-style01 text-sm-center">
              <span className="small-text">Contact Us</span>
              <h2 className="display-5">Need Any Help?</h2>
            </div>
          </div>
        </div>
        <div className="row mt-n2-2">
          <div className="col-sm-6 col-lg-3 mt-2-2">
            <h4 className="text-primary mb-4">
              <i className="ti-location-pin pe-3"></i>Address
            </h4>
            <address className="display-md-29 display-xl-28 mb-0">
              66 Guild Street 512BA, Great North Town.
            </address>
          </div>
          <div className="col-sm-6 col-lg-3 mt-2-2 text-sm-end text-lg-start">
            <h4 className="text-primary mb-4">
              <i className="ti-headphone-alt pe-3"></i>Call Us
            </h4>
            <ul className="list-unstyled display-md-29 display-xl-28 mb-0">
              <li><a href="tel:+44123456789">(+44) 123 456 789</a></li>
              <li><a href="tel:+44123456789">(+44) 123 456 789</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 mt-2-2">
            <h4 className="text-primary mb-4">
              <i className="ti-time pe-3"></i>Opening
            </h4>
            <ul className="list-unstyled display-md-29 display-xl-28 mb-0">
              <li>Mon – Fri: 8am – 4pm</li>
              <li>Sat – Sun: 9am – 5pm</li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 mt-2-2 text-sm-end text-lg-start">
            <h4 className="text-primary mb-4">
              <i className="ti-email pe-3"></i>Contact
            </h4>
            <ul className="list-unstyled display-md-29 display-xl-28 mb-0">
              <li><a href="mailto:info@yourdomain.com">info@example.com</a></li>
              <li><a href="mailto:info@yourdomain.com">info@domain.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
