import React from 'react';

const AboutUsSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row align-items-center mt-n5">
          <div className="col-lg-6 mt-5">
            <div className="pe-1-9 pe-xl-6 pe-xxl-15">
              <div className="heading-style01 mb-1-9 mb-xl-5">
                <span className="small-text">Who We Are</span>
                <h2 className="display-5">
                  We keep your home in perfect condition!
                </h2>
              </div>
              <p className="mb-5">
                Providers of professional handyman services, personal safety,
                comfort, and protection solutions for homeowners. It has been
                our experience that quality craftsmanship and reliable service
                are the foundation of every successful home improvement
                project.
              </p>
              <div>
                <a href="/services" className="butn">
                  More Services
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <div className="text-end position-relative">
              <img
                src="https://fixityhtml.websitelayout.net/img/content/about-img-06.jpg"
                alt="About Us"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <div className="position-absolute bottom-n15 left-n5 d-none d-md-block">
                <img
                  src="https://fixityhtml.websitelayout.net/img/content/about-img-07.jpg"
                  alt="About Us"
                  style={{
                    width: "200px",
                    borderRadius: "8px",
                    border: "4px solid white",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
