import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Resume() {
  return (
    <Container id="resume" className="py-5">
      <div className="text-center mb-5">
        <h2 className="mb-2">EDUARDO RIVERA SILVA</h2>
        <h5 className="text-muted mb-3">Labor Economics | Industrial Organization | Computational Economics</h5>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
            <span>Email: ef.riveras@gmail.com</span>
            <span>Phone: +1 236 863 1722</span>
            <span><a href="https://linkedin.com/in/eriverasilva" target="_blank" rel="noopener noreferrer">linkedin.com/in/eriverasilva</a></span>
            <span>Location: Vancouver, BC (Current) / Santiago, Chile (Previous)</span>
        </div>
      </div>

      <Row className="mb-4">
        <Col>
          <h3 className="border-bottom pb-2 mb-3">Education</h3>
          
          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Master of Data Science</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">University of British Columbia | Vancouver, BC | 2025 – Present</Card.Subtitle>
              <Card.Text>
                <strong>Focus:</strong> Machine Learning, Causal Inference, Bayesian Statistics, High-Dimensional Data Analysis, Convex Optimization, Experimental Design.<br />
                <strong>Leadership:</strong> Elected International Student Representative.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>M.Sc. Applied Economics</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Universidad de Chile | Santiago, Chile | 2015 – 2017</Card.Subtitle>
              <Card.Text>
                <strong>Distinction:</strong> Graduated cum laude (Distinction).<br />
                <strong>Thesis:</strong> "Wage Inequality in Chile" (Desigualdad de salarios en un modelo con heterogeneidad de habilidades).<br />
                <ul>
                    <li>Advisor: Elton Dusha.</li>
                    <li>Funding: Supported by Anillo Soc 1402 Scholarship.</li>
                    <li>Details: Developed a structural search model with Markov chains to identify a stationary state of skill distribution and analyzed sources of wage inequality using national survey data (CASEN).</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

           <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>B.Sc. Industrial Engineering</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Universidad de Chile | Santiago, Chile | 2009 – 2014</Card.Subtitle>
              <Card.Text>
                <strong>Distinction:</strong> Graduated with Highest Distinction (summa cum laude).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
            <h3 className="border-bottom pb-2 mb-3">Research Interests</h3>
            <p>Labor Economics, Industrial Organization, Computational Economics, Structural Modeling, Causal Inference, Policy Evaluation, Market Design.</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3 className="border-bottom pb-2 mb-3">Academic & Research Experience</h3>
          
          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Graduate Research Assistant</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Talhouk Research Lab, UBC Faculty of Medicine | Vancouver, BC | 2025 – Present</Card.Subtitle>
              <Card.Text>
                <ul>
                  <li><strong>Health Economics & Data Governance:</strong> Developing secure, reproducible analytical pipelines in R to study health outcomes across distributed networks.</li>
                  <li><strong>Privacy Tech:</strong> Implementing federated learning protocols to ensure strict privacy compliance for sensitive health data.</li>
                  <li><strong>Methodology:</strong> Designing standardized meta-analysis frameworks to validate multi-site health data.</li>
                  <li><strong>Reproducibility:</strong> Engineering automated workflows using renv and Git for partner institutions.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Research Assistant</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Millenium Institute for Market Imperfections and Public Policy | Santiago, Chile | 2015 – 2016</Card.Subtitle>
              <Card.Text>
                <strong>Supervisors:</strong> Patricio Valenzuela, Andrea Peroni, Benjamin Villena.
                <ul>
                  <li><strong>Evaluation Design:</strong> Co-authored official methodological manuals for the National Training and Employment Service (SENCE), establishing micro-econometric standards for government program evaluation.</li>
                  <li><strong>Impact Evaluation:</strong> Designed identification strategies and survey instruments for the "Más Capaz" program evaluation (large-scale labor intervention).</li>
                  <li><strong>Data Enrichment:</strong> Supported Professor Benjamin Villena using data mining and geo-referencing techniques to enrich administrative datasets for labor market research.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

           <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Lecturer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Universidad de Chile | Santiago, Chile | 2025</Card.Subtitle>
              <Card.Text>
                <strong>Course:</strong> Undergraduate Macroeconomics.<br />
                <strong>Responsibilities:</strong> Delivered lectures on economic theory (growth, business cycles, fiscal/monetary policy). Designed assessments and grading rubrics.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Teaching Assistant</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Universidad de Chile | Santiago, Chile | 2013 – 2017</Card.Subtitle>
              <Card.Text>
                <strong>Courses:</strong> Macroeconomics (4 Semesters), Economics 101 (2 Semesters), Impact Evaluation, Behavioural Economics.<br />
                <strong>Responsibilities:</strong> Led review sessions, graded problem sets (Stata/R), and provided mentorship on empirical methods.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3 className="border-bottom pb-2 mb-3">Policy Reports & Market Studies (Fiscalía Nacional Económica)</h3>
          
          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Market Study on Public Procurement (EM05, 2020)</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Role: Co-author</Card.Subtitle>
              <Card.Text>
                <ul>
                    <li><strong>Scope:</strong> Empirical analysis of the ~$12B USD/year Chilean state purchasing system.</li>
                    <li><strong>Methodology:</strong> Stratified sampling of 400 tenders; structural analysis of bidder participation and direct contracts.</li>
                    <li><strong>Impact:</strong> Grounded the 2021 legislative reform to Law N° 19.886 (Public Procurement).</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

           <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Market Study on Pharmaceuticals (EM03, 2020)</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Role: Co-author</Card.Subtitle>
              <Card.Text>
                <ul>
                    <li><strong>Scope:</strong> Vertical analysis of the pharmaceutical value chain (labs to retail).</li>
                    <li><strong>Findings:</strong> Identified market failures in bioequivalence, vertical integration, and brand loyalty.</li>
                    <li><strong>Impact:</strong> Proposed structural remedies (mandatory INN prescribing) informing the "Ley de Fármacos II" bill.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

           <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Market Study on Textbooks (EM04, 2019)</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Role: Co-author</Card.Subtitle>
              <Card.Text>
                <ul>
                    <li><strong>Scope:</strong> Analysis of public procurement vs. private choice in educational publishing.</li>
                    <li><strong>Findings:</strong> Diagnosed principal-agent problems in private school selection and auction inefficiencies.</li>
                    <li><strong>Impact:</strong> Led to the unbundling of content development from printing services in state auctions.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3 className="border-bottom pb-2 mb-3">Professional Experience</h3>
          
          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Data Analyst</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">PlayStudios | Vancouver, BC | Apr 2025 – Aug 2025</Card.Subtitle>
              <Card.Text>
                <ul>
                  <li><strong>Experimental Economics:</strong> Designed/analyzed large-scale A/B tests for user behavior and retention.</li>
                  <li><strong>Behavioral Modeling:</strong> Applied micro-econometric models (survival analysis, churn prediction) to analyze response to incentives.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Senior Economic and Financial Analyst</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Banco Central de Chile | Santiago, Chile | Sep 2022 – May 2024</Card.Subtitle>
              <Card.Text>
                <ul>
                  <li><strong>Monetary Policy Infrastructure:</strong> Implemented deep learning models (LSTM) to detect anomalies in banking supervision reports.</li>
                  <li><strong>Institutional Reporting:</strong> Authored recurring financial stability reports for the IMF and BIS.</li>
                  <li><strong>Capacity Building:</strong> Spearheaded the creation of new high-frequency statistical series for real-time monitoring.</li>
                  <li><strong>Modernization:</strong> Updated official UF (Unidad de Fomento) calculation processes and dashboards using PowerBI.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Economist</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Fiscalía Nacional Económica (Antitrust Agency) | Santiago, Chile | Aug 2018 – Aug 2022</Card.Subtitle>
              <Card.Text>
                <em>Studies Division (2018-2020), Antitrust Division/Intelligence Unit (2020-2022).</em>
                <ul>
                  <li><strong>IO & Antitrust:</strong> Screened for market power abuses; developed algorithmic tools to detect bid-rigging collusion.</li>
                  <li><strong>Forensic Economics:</strong> Used NLP/ML to structure administrative data for investigations.</li>
                  <li><strong>Technical Support:</strong> Collaborated with police units (OS9) on digital forensics and data retrieval.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Risk Specialist</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">BancoEstado Microempresas | Santiago, Chile | Oct 2017 – 2018</Card.Subtitle>
              <Card.Text>
                 <em>Department: Risk Management.</em>
                <ul>
                  <li><strong>Modeling:</strong> Created risk scoring models using generalized regression neural networks to support pre-approval campaigns.</li>
                  <li><strong>Optimization:</strong> Developed non-linear optimization tools to generate interest rate tiers for customer subgroups.</li>
                  <li><strong>Tools:</strong> Python, R.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3 className="border-bottom pb-2 mb-3">Academic Service & Leadership</h3>
           <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>International Student Representative</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Master of Data Science, UBC | Vancouver, BC | 2025 – Present</Card.Subtitle>
              <Card.Text>
               Role: Elected representative liaising between faculty and international students.
              </Card.Text>
            </Card.Body>
          </Card>

           <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Graduate Student Representative (Admissions)</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Department of Industrial Engineering, U. de Chile | Santiago, Chile | 2015</Card.Subtitle>
              <Card.Text>
               Role: Elected to the departmental admissions committee for all graduate programs.
              </Card.Text>
            </Card.Body>
          </Card>

           <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Vice President</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Industrial Engineering Student Union (CEIN), U. de Chile | Santiago, Chile | 2014</Card.Subtitle>
              <Card.Text>
               Role: Led student representation and coordinated academic/social activities.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row className="mb-4">
        <Col>
            <h3 className="border-bottom pb-2 mb-3">Technical Skills</h3>
            <Card className="border-0 shadow-sm">
                <Card.Body>
                     <p><strong>Computational Methods:</strong> Python (Pandas, NumPy, Scikit-learn, PyTorch, Django), R (Tidyverse, caret, data.table), SQL, SAS, Stata, Bash.</p>
                     <p><strong>Econometrics:</strong> Causal Inference, Time Series, Panel Data, A/B Testing, Survey Design, Bayesian Methods.</p>
                     <p><strong>Machine Learning:</strong> Structural Estimation, Deep Learning (TensorFlow/Keras), NLP (Transformers, Spacy), Gradient Boosting (XGBoost).</p>
                     <p><strong>Tools:</strong> LaTeX, Git, Docker, BigQuery, Tableau, PowerBI, Microsoft Office.</p>
                </Card.Body>
            </Card>
        </Col>
      </Row>
      
      <Row>
        <Col>
            <h3 className="border-bottom pb-2 mb-3">Languages</h3>
            <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary fs-6">Spanish: Native</span>
                <span className="badge bg-primary fs-6">English: Advanced (C1 IELTS certified)</span>
            </div>
        </Col>
      </Row>

    </Container>
  );
}

export default Resume;
