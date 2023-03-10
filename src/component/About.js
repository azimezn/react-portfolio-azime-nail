import React, { useState } from 'react';
import recentPhoto from '../images/recent-photo.png'
// bootstrap
import Button from 'react-bootstrap/Button';

const About = ({ setCurrentPage }) => {

  const [nopeButton, setNopeButton] = useState(false);

  return (
    <div className="aboutme container">
      <h2>About Me</h2>
      <img className="recent-photo" src={recentPhoto} alt="Azime" />
      <section>
        <p>My name is Azime Nail. I'm Turkish-American. I started getting interested in high school with a coding class
          and I have coded programs for experiments during college. I also had a career in teaching ESL in Turkey, where
          I was the go to person for any problems, whether it be a tehcnical issue or they are just in need of a helping hand.
          Fun fact: I have a Bachelor's Degree in Psychology.</p>
        <p>Would you like to know more about me?</p>
        {/* ??? when you click 'yes', it takes you to the contact section */}
        {/* {' '} is adding space */}
        <Button variant="outline-success" onClick={() => setCurrentPage("Contact")}>yes!</Button>{' '}
        {/* ??? show sad face next to the button when clicked */}
        <Button variant="outline-danger" onClick={() => setNopeButton(true)}>nope</Button>{' '}
        {nopeButton && <p>okay...</p>}
      </section>
    </div>
  )
}

export default About