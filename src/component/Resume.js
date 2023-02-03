import React from 'react';
import { uniGraduation, hsGraduation } from '../images';
import resumePDF from '../downloadables/Resume-Azime-Nail-Web-Development.pdf'
// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Resume-Azime-Nail-Web-Development.pdf";
    link.click();
  };

  return (
    <div className="resume container">
      <h2>Resume</h2>
      <p><a href="https://www.linkedin.com/in/azime-nail/" target="_blank" rel="noreferrer">Here</a> is my LinkedIn profile and <br></br>
        <a style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }} onClick={downloadResume}>here</a> is a downloadable PDF of my resume.</p>


      <Container>
        <Row>
          <h3>Education</h3>
          <Col className="resume-box">
            <p><b>Rutgers Bootcamps</b></p>
            <p><i>Full Stack Flex Development Certificate</i></p>
            <p>Nov 2022 - Feb 2023</p>
            <p>A 12-week program covering a wide range of programming languages and technologies: </p>
            <Row>
              <Col md={6}>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                  <li>Express.js</li>
                </ul>
              </Col>
              <Col md={6}>
                <ul>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Handlebars.js</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>GitHub</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col className="resume-box">
            <p><b>Hacettepe University</b></p>
            <p><i>Bachelor's Degree in Psychology</i></p>
            <p>2012-2016</p>
            <p> Learned technologies including: </p>
            <Row>
              <Col>
                <ul>
                  <li>SPSS</li>
                  <li>MAXQDA</li>
                </ul>
              </Col>
              <Col>
                <img src={uniGraduation} alt="university graduation" />
              </Col>
            </Row>
          </Col>
          <Col className="resume-box">
            <p><b>Pennsauken High School</b></p>
            <p><i>High School Diploma</i></p>
            <p>2009-2012</p>
            <p> Learned technologies including: </p>
            <Row>
              <Col>
                <ul>
                  <li>Introduction to Programming</li>
                  <li>Computer Animation I</li>
                </ul>
              </Col>
              <Col>
                <img src={hsGraduation} alt="high school graduation" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <h3>Experience</h3>
          <Col className="resume-box">
            <p><b>Gi Group</b></p>
            <p><i>Native English Teacher</i></p>
            <p>April 2019 - July 2019 (4 months)</p>
            <p>Bursa, Turkey</p>
          </Col>
          <Col className="resume-box">
            <p><b>Wall Street English</b></p>
            <p><i>Native Teacher</i></p>
            <p>June 2017 - June 2018 (1 year 1 month)</p>
            <p>Bursa, Turkey</p>
          </Col>
          <Col className="resume-box">
            <p><b>Social Psychology Lab.</b></p>
            <p><i>Research Assistant</i></p>
            <p>May 2014 - June 2016 (2 years 2 months)</p>
            <p>Ankara, Turkey</p>
          </Col>
          <Col className="resume-box">
            <p><b>Hacettepe University Psychometrics Research and Application Center (HUPAM)</b></p>
            <p><i>Research Intern</i></p>
            <p>March 2015 - December 2015 (10 months)</p>
            <p>Ankara, Turkey</p>
          </Col>
          <Col className="resume-box">
            <p><b>Pennsauken Library</b></p>
            <p><i>Library Assistant</i></p>
            <p>April 2012 - June 2012 (3 months)</p>
            <p>New Jersey, USA</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Resume