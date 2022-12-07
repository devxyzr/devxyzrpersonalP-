import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              {' '}
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              {' '}
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              {' '}
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              {' '}
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              {' '}
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4> React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              {' '}
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Bakend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              {' '}
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              {' '}
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              {' '}
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              {' '}
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Posgrest</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              {' '}
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Sequalize</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              {' '}
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
