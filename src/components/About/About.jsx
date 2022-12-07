import React from 'react';
import './about.css';
import ME from '../../assets/thinking_man_PNG11606.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderActive } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} className="img_me" alt="About image " />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderActive className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Siempre pensando en la tecnología, la innovación y el desarrollo;
            soy un desarrollador con buenas habilidades de trabajo en equipo,
            curva de aprendizaje y capaz de generar más valor a las
            organizaciones a través de ideas e iniciativa para la resolución de
            problemas. Énfasis en desarrollo frontend, diseño web con react.
            Tengo experiencia trabajando en NodeJS, JavaScript, React, React
            Native, Redux, SQL, Express, Sequelize, Postman entre otras
            tecnologías
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
