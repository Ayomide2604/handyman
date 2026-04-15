import React from 'react';

const MeetOwnerSection = () => {
  const socialLinks = [
    { icon: "bi-facebook", color: "text-primary" },
    { icon: "bi-twitter", color: "text-info" },
    { icon: "bi-instagram", color: "text-danger" },
    { icon: "bi-linkedin", color: "text-primary" }
  ];

  return (
    <section className="py-6">
      <div className="container">
        <div className="heading-style01 mb-1-9 mb-xl-5 text-center">
          <span className="small-text">Leadership</span>
          <h2 className="display-5">Meet the Owner</h2>
        </div>
        <div className="row mt-n2-9">
          <div className="col-lg-4 mt-2-9">
            <div>
              <div className="position-relative text-center mb-lg-0 mb-5">
                {/* <img
                  src="https://fixityhtml.websitelayout.net/img/team/team-01.jpg"
                  alt="Owner"
                  style={{ width: "100%", borderRadius: "8px" }}
                /> */}
              </div>
              <div className="agent-detail-des">
                <h3 className="text-primary h4">George Soyemi</h3>
                <div className="border-bottom mb-3 pb-3">
                  <span className="d-inline-block text-uppercase">
                    Founder & CEO
                  </span>
                </div>
                <p>
                  With over 10 years of experience in home improvement and
                  handyman services, George founded our company with a simple
                  mission: to provide homeowners with reliable, professional,
                  and affordable solutions for all their home maintenance
                  needs.
                </p>
                <ul className="agent-social-links list-unstyled d-flex mb-0">
                  {socialLinks.map((social, index) => (
                    <li key={index} className="me-2">
                      <a href="#!" className={social.color}>
                        <i className={`bi ${social.icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-2-9">
            <div className="ps-xl-1-9">
              <div className="mb-1-9">
                <h3 className="mb-3">Our Story</h3>
                <p className="mb-1-9">
                  What started as a small family business in 2008 has grown
                  into one of the most trusted handyman services in the
                  region. Our commitment to quality craftsmanship and customer
                  satisfaction has been the cornerstone of our success.
                </p>
                <p className="mb-0">
                  As a certified professional with extensive expertise in home
                  improvement, I believe that every home deserves the best
                  care. Our team shares this vision and works tirelessly to
                  exceed customer expectations on every project.
                </p>
              </div>

              <div className="z-index-9 position-relative">
                <h2 className="mb-3">Get In Touch</h2>
                <p className="mb-4">
                  Have a project in mind or want to discuss your home
                  improvement needs? I'd love to hear from you personally.
                </p>
                <div className="d-flex gap-3">
                  <a href="/contact" className="butn">
                    Contact Me Directly
                  </a>
                  <a href="tel:+1234567890" className="butn secondary">
                    Call (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOwnerSection;
