import React from 'react';
// images
import souporsandwichScreenshot from '../images/soup-or-sandwich-screenshot.png';
import portfolioScreenshot from '../images/azime-nail-portfolio-screenshot.png';
import monthlyCalendarScreenshot from '../images/monthly-calendar-screenshot.png';
import preworkScreenshot from '../images/prework-study-guide-screenshot.png';
// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <Container>
        <Row>
          <Col>
            <section className="new-project">
              <h3>Soup or Sandwich</h3>
              <p>This is my most recent project. A game where the user must choose a picture according to the instructions. The pictures consist of soup and sandwiches, or maybe not. The user can login to save their progress or score.</p>
              {/* <!-- when clicked, it will take you to the website/project --> */}
              <a href="https://soup-or-sandwich.herokuapp.com/" target="_blank" rel="noreferrer"><img className="project-screenshots" src={souporsandwichScreenshot} alt="screenshot of the game Soup or Sandwich" /></a>
            </section>
          </Col>
        </Row>
        <Row>
          <Col className="old-project">
            <h3>Monthly Calendar</h3>
            <p>It's a personal calendar with interactive user experience. The calendar will reflect the user's schedule based on the following: desired NFL teams and their game schedules, holidays, and personal tasks.</p>
            <a href="https://jennahopeclem.github.io/monthly-planner/" target="_blank" rel="noreferrer"><img className="project-screenshots" src={monthlyCalendarScreenshot} alt="screenshot of the monthly planner" /></a>
          </Col>

          <Col className="old-project">
            <h3>My Portfolio</h3>
            <p>I think you will see that it looks very familiar. You can find all of my current and previous project, my resume, and a little bit about me on this page. You can also contact me through this page.</p>
            <a href="https://azimezn.github.io/azime-nail-portfolio/" target="_blank" rel="noreferrer"><img className="project-screenshots" src={portfolioScreenshot} alt="Azime Nail's portfolio" /></a>
          </Col>
          <Col className="old-project">
            <h3>Pre-Work Study Guide </h3>
            <p>My very first attempt in coding for the bootcamp I attended by Rutgers University.</p>
            <a href="https://azimezn.github.io/prework-study-guide/" target="_blank" rel="noreferrer"><img className="project-screenshots" src={preworkScreenshot} alt="screenshot of my prework study guide" /></a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio