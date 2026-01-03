import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Sleep Disorder Analysis',
      description: 'Investigated the link between sleep quality and stress using the "Sleep Health and Lifestyle Dataset". Developed a reproducible regression model pipeline using Docker, Make, and GitHub Actions to predict stress levels based on physiological and lifestyle factors. (UBC MDS Project)',
      imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      link: '',
      repoLink: 'https://github.com/e-riveras/sleep-disorder-analysis'
    },
    {
      title: 'Market Study on Public Procurement',
      description: 'Co-authored a comprehensive empirical analysis of the ~$12B USD/year Chilean state purchasing system. Utilized stratified sampling and structural analysis to identify inefficiencies, directly grounding the 2021 legislative reform to Law N° 19.886.',
      imageUrl: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&w=600&q=80',
      link: 'https://www.fne.gob.cl/en/market-studies/market-studies-carried-out/',
      repoLink: ''
    },
     {
      title: 'Anomaly Detection in Banking Supervision',
      description: 'Implemented deep learning models (LSTM) at the Central Bank of Chile to detect anomalies in banking supervision reports, enhancing the real-time monitoring capabilities of financial stability.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      link: '',
      repoLink: ''
    },
  ];

  return (
    <Container id="projects" className="py-5">
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
