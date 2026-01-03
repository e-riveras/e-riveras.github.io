import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function ProjectCard({ title, description, imageUrl, link, repoLink }) {
  const [imgSrc, setImgSrc] = useState(imageUrl);

  return (
    <Card className="h-100 shadow-sm">
      {imgSrc ? (
        <Card.Img 
          variant="top" 
          src={imgSrc} 
          alt={title} 
          style={{ height: '200px', objectFit: 'cover' }} 
          onError={() => setImgSrc('https://placehold.co/600x400/2c3e50/ffffff?text=Image+Unavailable')}
        />
      ) : (
        <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
          No Image Available
        </div>
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="mt-auto">
          {link && (
            <Button variant="primary" href={link} target="_blank" className="me-2 mb-2">
              View Live
            </Button>
          )}
          {repoLink && (
            <Button variant="outline-dark" href={repoLink} target="_blank" className="mb-2">
              GitHub Repo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
