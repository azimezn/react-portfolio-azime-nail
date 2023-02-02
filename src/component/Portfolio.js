import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
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
            <Col className="projects" md={5}>
              <h3>{item.name} <a href={item.githubLink} target="_blank" rel="noreferrer"><AiFillGithub /></a></h3>
              <p>{item.description}</p>
              <p>Technologies used: {item.technologies}</p>
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