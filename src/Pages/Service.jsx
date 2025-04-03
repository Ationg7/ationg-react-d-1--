import React from "react";


const HomePage = () => {
  return (
    <div>

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


<section className="container service-map-section">
  <h2 className="text-center text-primary fw-bold">Service Map</h2>

  {/* Electrical Installation */}
  <div className="service-box mt-4">
    <h4 className="service-title">Electrical Installation</h4>
    <div className="service-content">
      <ul>
        <li>Installation of safe and efficient electrical wiring for homes and businesses.</li>
        <li>Upgrading power distribution systems to enhance energy efficiency.</li>
        <li>Providing backup power solutions, including generators and inverters.</li>
      </ul>
    </div>
  </div>

  {/* Water Installation */}
  <div className="service-box mt-4">
    <h4 className="service-title">Water Installation</h4>
    <div className="service-content">
      <ul>
        <li>Design and installation of water distribution systems for residential and commercial use.</li>
        <li>Water purification and filtration solutions for clean and safe consumption.</li>
        <li>Maintenance and repair of plumbing and water supply networks.</li>
      </ul>
    </div>
  </div>

  {/* Solar Installation */}
  <div className="service-box mt-4">
    <h4 className="service-title">Solar Installation</h4>
    <div className="service-content">
      <ul>
        <li>Solar panel installation for homes, businesses, and industrial facilities.</li>
        <li>Customized solar energy solutions to reduce electricity costs.</li>
        <li>Battery storage and hybrid energy solutions for uninterrupted power supply.</li>
      </ul>
    </div>
  </div>
</section>





    </div>
  );
};

export default HomePage;
