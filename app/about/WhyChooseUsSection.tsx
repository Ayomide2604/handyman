import React from 'react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: "bi-truck",
      iconColor: "text-primary",
      title: "Fast Service",
      description: "Quick response times and efficient service delivery for all your handyman needs. We arrive on time and complete projects efficiently."
    },
    {
      icon: "bi-headset",
      iconColor: "text-info",
      title: "24/7 Online Support",
      description: "Round-the-clock customer support to address your concerns and schedule appointments at your convenience."
    },
    {
      icon: "bi-shield-check",
      iconColor: "text-success",
      title: "Safety & Reliability",
      description: "Licensed, insured professionals committed to safety standards and reliable service delivery every time."
    }
  ];

  return (
    <section className="why-choose-style01 pt-1-6 pt-md-7">
      <div className="container">
        <div className="heading-style01 mb-1-9 mb-xl-5 text-center">
          <span className="small-text">Our Mission</span>
          <h2 className="display-5">Why Choose Us</h2>
        </div>
        <div className="row mt-n4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-6 col-xl-4 mt-4">
              <div className="why-choose-area text-center h-100 border border-color-light-black p-4">
                <i className={`bi ${feature.icon} display-1 ${feature.iconColor} mb-4`}></i>
                <h3 className="mb-4 h4">{feature.title}</h3>
                <p className="mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
