import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="py-5 mt-auto" style={{ backgroundColor: '#0f172a', borderTop: '1px solid #334155' }}>
      <Container className="text-center">
        <p className="mb-0" style={{ color: '#94a3b8' }}>
          © {new Date().getFullYear()} Eduardo Rivera Silva. Built with React & Bootswatch.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
