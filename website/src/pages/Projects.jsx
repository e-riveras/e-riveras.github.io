import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of your first project. Explain what tech stack you used and the problem it solves.',
      imageUrl: '', // Add image URL here
      link: 'https://example.com',
      repoLink: 'https://github.com/yourusername/project-one'
    },
    {
      title: 'Project Two',
      description: 'Another interesting project showcasing your skills in frontend or backend development.',
      imageUrl: '',
      link: '',
      repoLink: 'https://github.com/yourusername/project-two'
    },
     {
      title: 'Project Three',
      description: 'A third project to demonstrate versatility. Maybe a mobile app or a data science script.',
      imageUrl: '',
      link: 'https://example.com',
      repoLink: ''
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-5 text-center">My Projects</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, index) => (
          <Col key={index}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
