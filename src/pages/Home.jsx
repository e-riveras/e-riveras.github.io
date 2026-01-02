import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="py-5">
      <Row className="align-items-center py-5">
        <Col lg={6}>
          <h1 className="display-4 fw-bold">Hi, I'm [Your Name]</h1>
          <p className="lead text-muted mb-4">
            I am a passionate developer building modern web applications. 
            Check out my work and professional journey.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-start">
            <Button as={Link} to="/projects" variant="primary" size="lg" className="px-4 gap-3">
              View Projects
            </Button>
            <Button as={Link} to="/resume" variant="outline-secondary" size="lg" className="px-4">
              My Resume
            </Button>
          </div>
        </Col>
        <Col lg={6} className="d-none d-lg-block text-center">
            {/* Placeholder for a profile picture or illustration */}
            <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center" style={{ width: '300px', height: '300px', fontSize: '100px' }}>
                👋
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
