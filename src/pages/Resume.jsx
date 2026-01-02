import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Resume() {
  return (
    <Container className="py-5">
      <h2 className="mb-5 text-center">My Resume</h2>

      <Row className="mb-4">
        <Col>
          <h3 className="border-bottom pb-2 mb-3">Experience</h3>
          
          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Software Engineer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Company Name | 2023 - Present</Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>Developed and maintained web applications using React and Node.js.</li>
                  <li>Collaborated with cross-functional teams to define requirements.</li>
                  <li>Improved application performance by 20% through code optimization.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Junior Developer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Another Company | 2021 - 2023</Card.Subtitle>
              <Card.Text>
                <ul>
                    <li>Assisted in the development of frontend components.</li>
                    <li>Participated in code reviews and agile ceremonies.</li>
                    <li>Wrote unit tests to ensure code quality.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3 className="border-bottom pb-2 mb-3">Education</h3>
           <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Bachelor of Science in Computer Science</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">University Name | 2017 - 2021</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
            <h3 className="border-bottom pb-2 mb-3">Skills</h3>
            <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-secondary fs-6">JavaScript</span>
                <span className="badge bg-secondary fs-6">React</span>
                <span className="badge bg-secondary fs-6">Node.js</span>
                <span className="badge bg-secondary fs-6">Python</span>
                <span className="badge bg-secondary fs-6">Git</span>
                <span className="badge bg-secondary fs-6">SQL</span>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
