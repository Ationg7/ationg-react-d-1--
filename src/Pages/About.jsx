import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const PerlCorp = () => {
  return (
    
    <Container className="text-center py-5">
       <section className="about-company container">
    <h2>About Company</h2>
    <p>
      PerlCorp, Inc. is a trusted provider of electricity, water distribution, and solar energy solutions. 
      We believe in empowering communities by offering essential services that enhance comfort, 
      productivity, and sustainability. Whether you need a stable power supply, clean water access, 
      or a greener way to generate electricity, we’ve got you covered.
    </p>
  </section>

  {/* Our Services Section */}
  <section className="our-services">
    <h2>Our Services</h2>
    <Row className="g-4 mt-3">
      {/* Electricity Service */}
      <Col md={4}>
        <Card className="service-card p-4">
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/474x/7b/19/e6/7b19e6c0b293a5e99d7d4f7bf7516250.jpg"
            className="service-icon"
            alt="Electricity Icon"
          />
          <Card.Body>
            <Card.Title>🔌 Electricity Solutions</Card.Title>
            <Card.Text>Reliable and uninterrupted power supply for residential, commercial, and industrial needs.</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Water Service */}
      <Col md={4}>
        <Card className="service-card p-4">
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/474x/5b/79/11/5b7911765a2ad889debb658c04759c98.jpg"
            className="service-icon"
            alt="Water Icon"
          />
          <Card.Body>
            <Card.Title>💧 Water Services</Card.Title>
            <Card.Text>Clean, safe, and sustainable water distribution systems designed for efficiency.</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Solar Service */}
      <Col md={4}>
        <Card className="service-card p-4">
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/736x/bc/fe/57/bcfe57841c4cc4973fc3e732756848a9.jpg"
            className="service-icon"
            alt="Solar Panel Icon"
          />
          <Card.Body>
            <Card.Title>☀️ Solar Installation</Card.Title>
            <Card.Text>Harness the power of the sun with our state-of-the-art solar energy solutions.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
</section>
      <section className="why-choose-us">
  <h3>SOME REASONS</h3>
  <h2>Why Choose PerlCorp, Inc.?</h2>
  
  <div className="features">
    <div className="feature-item">
      <span>01</span>
      <strong>Reliable & Affordable Services</strong>
      <p>Cost-effective and dependable solutions tailored to your needs.</p>
    </div>

    <div className="feature-item">
      <span>02</span>
      <strong>Sustainability-Focused</strong>
      <p>Integrating renewable energy to promote a greener future.</p>
    </div>

    <div className="feature-item">
      <span>03</span>
      <strong>Expert Team & Support</strong>
      <p>Top-notch installation, maintenance, and customer service.</p>
    </div>

    <div className="feature-item">
      <span>04</span>
      <strong>Innovative Technology</strong>
      <p>Latest advancements in energy and water efficiency.</p>
    </div>

    <div className="feature-item">
      <span>05</span>
      <strong>Eco-Friendly Solutions</strong>
      <p>Our services prioritize sustainability and energy efficiency.</p>
    </div>

    <div className="feature-item">
      <span>06</span>
      <strong>Customer Satisfaction</strong>
      <p>We ensure excellent service and support for all our clients.</p>
    </div>
  </div>
</section>

    </Container>
  );
};

export default PerlCorp;
