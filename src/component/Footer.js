import React from 'react';
// images
import { emailIcon, githubIcon, instagramIcon, twitterIcon, youtubeIcon, linkedinIcon } from '../images'
// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    {/* rel="noreferrer" is for security. it doesn't let the opened page get any information from the current page */}
                    <Col><a href="mailto:azimeznail@gmail.com" target="_blank" rel="noreferrer"><img className="icon" src={emailIcon} alt="email icon" /></a></Col>
                    <Col><a href="https://www.linkedin.com/in/azime-nail/" target="_blank" rel="noreferrer"><img className="icon" src={linkedinIcon} alt="linkedin icon" /></a></Col>
                    <Col><a href="https://github.com/azimezn" target="_blank" rel="noreferrer"><img className="icon" src={githubIcon} alt="github icon" /></a></Col>
                    <Col><a href="https://www.instagram.com/azimezn/" target="_blank" rel="noreferrer"><img className="icon" src={instagramIcon} alt="instagram icon" /></a></Col>
                    <Col><a href="https://www.youtube.com/@azimezn" target="_blank" rel="noreferrer"><img className="icon" src={youtubeIcon} alt="youtube icon" /></a></Col>
                    <Col><a href="https://twitter.com/azimezn" target="_blank" rel="noreferrer"><img className="icon" src={twitterIcon} alt="twitter icon" /></a></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer