import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold text-primary">
            Welcome to PerlCorp, Inc.<br /> -Powering Your Future
            </h1>
            <p>
            At PerlCorp, Inc., we are committed to delivering reliable electricity, clean water solutions, and innovative solar installations to homes and businesses.
            </p>
            <button className="btn btn-primary">
  <Link to="/About" className="text-white text-decoration-none">Learn More →</Link>
</button>
          </div>
          <div className="col-md-6">
            <img src="https://scontent.fceb1-3.fna.fbcdn.net/v/t1.15752-9/486155780_2052363325271774_4917913458129522925_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEXtQ78ucrL5UB39N3ijJswCBc53n-XpwoIFznef5enCs1lDYJjymfpPG_SWSh4GZlvcKEvPF_DFo00z-4xQJaX&_nc_ohc=zTpa4ZCGG84Q7kNvgFSaCd7&_nc_oc=AdnE5B-8PTBU0afB2aFXeI_NJxuBUJlih7RZ3d4yyb2euuUgcWrotvGNFvGCPbfrauc&_nc_zt=23&_nc_ht=scontent.fceb1-3.fna&oh=03_Q7cD1wEjX36urLzdk_R1s82v7xKbxozV8fOsPUsAZHiCrVFlIg&oe=680DCD48" alt="Hero" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container bg-light p-5 rounded">
        <h2 className="text-primary fw-bold">About Company</h2>
        <p>
        PerlCorp, Inc. is a trusted provider of electricity, water distribution, and solar energy solutions. We believe in empowering communities by offering essential services that enhance comfort, productivity, and sustainability. Whether you need a stable power supply, clean water access, or a greener way to generate electricity, we’ve got you covered.
        </p>
      </section>

     {/* Our Services */}
<section className="services-section container">
  <h2 className="text-center text-primary fw-bold">Our Services</h2>

  {/* Electrical Installation */}
  <div className="row">
    <div className="col-md-12">
      <div className="service-box">
        <div className="service-content">
          <h4 className="service-title">Electrical Installation</h4>
          <p className="service-text">
            We provide safe and reliable electrical installation services for residential, commercial, 
            and industrial properties. Our expert electricians ensure high-quality wiring, efficient 
            power distribution, and compliance with safety standards.
          </p>
          <button className="learn-more-btn">Learn More →</button>
        </div>
        <div className="service-image">
          <img src="https://i.pinimg.com/736x/2a/94/9c/2a949c68ab617b2f96875ae10008d861.jpg" alt="Electrical Installation" />
        </div>
      </div>
    </div>
  </div>

  {/* Water Installation */}
  <div className="row mt-4">
    <div className="col-md-12">
      <div className="service-box">
        <div className="service-image">
          <img src="https://i.pinimg.com/736x/93/5b/94/935b946385c8d4a87cb76dcf3ea1b001.jpg" alt="Water Installation" />
        </div>
        <div className="service-content">
          <h4 className="service-title">Water Installation</h4>
          <p className="service-text">
            Our water installation services ensure clean, efficient, and sustainable water distribution. 
            We specialize in pipeline systems, water purification, and large-scale water management 
            solutions for homes, businesses, and communities.
          </p>
          <button className="learn-more-btn">Learn More →</button>
        </div>
      </div>
    </div>
  </div>

  {/* Solar Installation */}
  <div className="row mt-4">
    <div className="col-md-12">
      <div className="service-box">
        <div className="service-content">
          <h4 className="service-title">Solar Installation</h4>
          <p className="service-text">
            We provide top-tier solar energy solutions to help you harness renewable energy efficiently. 
            Our solar panel installation services cater to residential, commercial, and industrial clients, 
            reducing energy costs while promoting sustainability.
          </p>
          <button className="learn-more-btn">Learn More →</button>
        </div>
        <div className="service-image">
          <img src="https://i.pinimg.com/736x/d0/68/c7/d068c7e45d1a1a7f444543c9cdf7de51.jpg" alt="Solar Installation" />
        </div>
      </div>
    </div>
  </div>
</section>





<section className="contact-section">
  <h2>Contact Us</h2>
  <form className="contact-form">
    <input type="text" placeholder="Full Name" />
    <input type="email" placeholder="Email Address" />
    <input type="text" placeholder="Phone Number" />
    <textarea placeholder="Have anything to say?"></textarea>
    <button type="submit">Send</button>
  </form>
</section>

    </div>
  );
};

export default HomePage;
