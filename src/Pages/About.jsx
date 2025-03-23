import React from "react";


const About = () => {
  return (
    <div className="about-container" style={{ marginTop: "80px" }}>
      
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>About Our Company</h1>
          <p>Providing top-notch installation services with trust and excellence.</p>
        </div>
      </div>

      {/* Company Overview Section */}
      <div className="container about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            We are a dedicated team of professionals offering high-quality installation services, including 
            electrical, solar power, and water systems. With years of experience, we ensure safe, efficient, 
            and sustainable solutions for residential and commercial projects.
          </p>
        </div>

        {/* Services Overview */}
        <div className="about-section">
          <h2>What We Do</h2>
          <ul>
            <li>Professional Electrical Installations</li>
            <li>Renewable Solar Power Solutions</li>
            <li>Water System Planning & Installation</li>
            <li>24/7 Customer Support</li>
            <li>Eco-friendly & Energy-efficient Solutions</li>
          </ul>
        </div>

        {/* Our Mission */}
        <div className="about-section mission">
          <h2>Our Mission</h2>
          <p>
            To provide reliable and innovative installation services that empower communities and businesses 
            with sustainable, cost-effective, and long-lasting solutions.
          </p>
        </div>

        {/* Why Choose Us Section with Bootstrap Cards */}
        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card text-center">
                <img src="https://cdn-icons-png.flaticon.com/128/9319/9319106.png" className="card-img2-top" alt="Quality Service" />
                <div className="card-body">
                  <h5 className="card-title">High-Quality Service</h5>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card text-center">
                <img src="https://cdn-icons-png.flaticon.com/128/9428/9428488.png" className="card-img2-top" alt="Affordable Pricing" />
                <div className="card-body">
                  <h5 className="card-title">Affordable Pricing</h5>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card text-center">
                <img src="https://cdn-icons-png.flaticon.com/128/8070/8070589.png" className="card-img2-top" alt="Customer Support" />
                <div className="card-body">
                  <h5 className="card-title">24/7 Customer Support</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
