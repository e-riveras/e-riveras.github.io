import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container id="home" className="py-5">
      <Row className="align-items-center py-5">
        <Col lg={6}>
          <h1 className="display-4 fw-bold">Hi, I'm Eduardo Rivera Silva</h1>
          <p className="lead text-muted mb-4">
            I am a Data Scientist and Economist specializing in Labor Economics, Industrial Organization, and Computational Methods.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-start">
            <Button href="#projects" variant="primary" size="lg" className="px-4 gap-3">
              View Projects
            </Button>
            <Button href="#resume" variant="outline-secondary" size="lg" className="px-4">
              My Resume
            </Button>
          </div>
        </Col>
        <Col lg={6} className="d-none d-lg-block text-center">
            <img 
              src="https://placehold.co/400x400/2c3e50/ffffff?text=ER" 
              alt="Eduardo Rivera Silva" 
              className="rounded-circle shadow-lg"
              style={{ width: '350px', height: '350px', objectFit: 'cover' }}
            />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
