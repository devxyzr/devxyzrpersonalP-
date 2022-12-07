import React from 'react';
import './testimonials.css';
import IMG from '../../assets/Octocat.png';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        <article className="testimonial">
          <div className="client_avatar">
            <img src={IMG} alt="avatar one" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            consequuntur suscipit tenetur obcaecati accusamus enim, possimus,
            aperiam veniam, perspiciatis beatae commodi inventore veritatis vero
            aspernatur amet doloremque similique sunt qui.
          </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={IMG} alt="avatar one" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            consequuntur suscipit tenetur obcaecati accusamus enim, possimus,
            aperiam veniam, perspiciatis beatae commodi inventore veritatis vero
            aspernatur amet doloremque similique sunt qui.
          </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={IMG} alt="avatar one" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            consequuntur suscipit tenetur obcaecati accusamus enim, possimus,
            aperiam veniam, perspiciatis beatae commodi inventore veritatis vero
            aspernatur amet doloremque similique sunt qui.
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
