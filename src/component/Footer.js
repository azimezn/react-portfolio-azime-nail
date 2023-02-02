import React from 'react';
// images
import emailIcon from '../images/email-icon.png'
import githubIcon from '../images/github-icon.png'
import instagramIcon from '../images/instagram-icon.png';
import twitterIcon from '../images/twitter-icon.png';
import youtubeIcon from '../images/youtube-icon.png'
import linkedinIcon from '../images/linkedin-icon.png';
// import pinterestIcon from '../images/pinterest-icon.png';
// import snapchatIcon from '../images/snapchat-icon.png';
// import tumblrIcon from '../images/tumblr-icon.png';
// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <div className="d-flex justify-content-center">
            <Container>
                <Row md={6}>
                    {/* rel="noreferrer" is for security. it doesn't let the opened page get any information from the current page */}
                    <Col><a href="mailto:azimeznail@gmail.com" target="_blank" rel="noreferrer"><img class="icon" src={emailIcon} alt="email icon" /></a></Col>
                    <Col><a href="https://www.linkedin.com/in/azime-nail/" target="_blank" rel="noreferrer"><img class="icon" src={linkedinIcon} alt="linkedin icon" /></a></Col>
                    <Col><a href="https://github.com/azimezn" target="_blank" rel="noreferrer"><img class="icon" src={githubIcon} alt="github icon" /></a></Col>
                    <Col><a href="https://www.instagram.com/azimezn/" target="_blank" rel="noreferrer"><img class="icon" src={instagramIcon} alt="instagram icon" /></a></Col>
                    <Col><a href="https://www.youtube.com/@azimezn" target="_blank" rel="noreferrer"><img class="icon" src={youtubeIcon} alt="youtube icon" /></a></Col>
                    <Col><a href="https://twitter.com/azimezn" target="_blank" rel="noreferrer"><img class="icon" src={twitterIcon} alt="twitter icon" /></a></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer