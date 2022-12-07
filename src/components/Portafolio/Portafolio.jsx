import React from 'react';
import './portafolio.css';
import IMGWORK from '../../assets/Octocat.png';

const Portafolio = () => {
  const demoWork = [
    {
      id: 1,
      image: IMGWORK,
      title: 'Title to work',
      github: 'https://github.com/devxyzr',
      demo: 'https://github.com/devxyzr',
    },
    {
      id: 2,
      image: IMGWORK,
      title: 'Title to work',
      github: 'https://github.com/devxyzr',
      demo: 'https://github.com/devxyzr',
    },
    {
      id: 3,
      image: IMGWORK,
      title: 'Title to work',
      github: 'https://github.com/devxyzr',
      demo: 'https://github.com/devxyzr',
    },
    {
      id: 4,
      image: IMGWORK,
      title: 'Title to work',
      github: 'https://github.com/devxyzr',
      demo: 'https://github.com/devxyzr',
    },
    {
      id: 5,
      image: IMGWORK,
      title: 'Title to work',
      github: 'https://github.com/devxyzr',
      demo: 'https://github.com/devxyzr',
    },
    {
      id: 6,
      image: IMGWORK,
      title: 'Title to work',
      github: 'https://github.com/devxyzr',
      demo: 'https://github.com/devxyzr',
    },
  ];

  return (
    <section id="portafolio">
      <h5>My Rencent Work</h5>
      <h2>Portafolio </h2>

      <div className="container portafolio_container">
        {demoWork.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portafolio_item">
              <div className="portafolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portafolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portafolio;
