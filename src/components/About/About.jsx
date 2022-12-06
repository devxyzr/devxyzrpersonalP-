import React from 'react';
import './about.css';
import ME from '../../assets/thinking_man_PNG11606.png';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container"></div>
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="About image" />
        </div>
      </div>
      <div className="about_content"></div>
    </section>
  );
};

export default About;
