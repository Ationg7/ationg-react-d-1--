import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";


const Contact = () => {
  return (
    <Container className="contact-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <p>We’d love to hear from you! Fill out the form below and we'll get back to you soon.</p>

            <Form>
              {/* Name Field */}
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              {/* Email Field */}
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              {/* Message Field */}
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" required />
              </Form.Group>

              {/* Submit Button */}
              <Button variant="primary" type="submit" className="submit-btn">
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
