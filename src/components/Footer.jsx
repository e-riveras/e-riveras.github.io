import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-3 mt-auto">
      <Container className="text-center">
        <p className="mb-0 text-muted">
          © {new Date().getFullYear()} My Portfolio. Built with React & Vite.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
