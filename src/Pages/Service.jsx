import React from "react";

const Service = () => {
  return (
    <div className="services-container">
      {/* Card 1 */}
      <div className="card">
        <img src="https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Service 1" />
        <div className="card-body">
          <h5 className="card-title">Electrical Installation</h5>
          <p className="card-text">Reliable electrical installation services ensuring safety and efficiency.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">High-Quality Wiring</li>
          <li className="list-group-item">Energy-Efficient Solutions</li>
          <li className="list-group-item">24/7 Support</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Learn More</a>
          <a href="/Contact" className="card-link">Contact Us</a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYDML9mgu4zcCB1HRkmpo1kXZRk2YSwOq1A&s" className="card-img-top" alt="Service 2" />
        <div className="card-body">
          <h5 className="card-title">Solar Power Installation</h5>
          <p className="card-text">Sustainable solar solutions for a cleaner and greener future.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Solar Panel Installation</li>
          <li className="list-group-item">Maintenance & Repairs</li>
          <li className="list-group-item">Custom Solutions</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Learn More</a>
          <a href="/Contact" className="card-link">Contact Us</a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCvDrPPYVA6k1Ff_Izg-LWkdNP4XgLnAo9g&s" className="card-img-top" alt="Service 3" />
        <div className="card-body">
          <h5 className="card-title">Water System Installation</h5>
          <p className="card-text">Efficient water system solutions tailored to your needs.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Pipeline Installation</li>
          <li className="list-group-item">Water Purification</li>
          <li className="list-group-item">Leak Detection</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Learn More</a>
          <a href="/Contact" className="card-link">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Service;
