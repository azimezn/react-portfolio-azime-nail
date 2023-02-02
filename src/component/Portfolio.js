import React from 'react';
import { projects } from '../info'
// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <Container>
        <Row>
          {projects.map(item => (
            <Col>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <a href={item.deployedLink} target="_blank" rel="noreferrer">
                <img className="project-screenshots" src={item.source} alt={item.alt} /></a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio