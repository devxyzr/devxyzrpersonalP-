import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/ricardo-cuartas-2147a2215/"
        target="_blank"
      >
        {' '}
        <BsLinkedin />{' '}
      </a>
      <a href="https://github.com/devxyzr" target="_blank">
        {' '}
        <FaGithub />
      </a>
      <a href="https://twitter.com/devxyzr" target="_blank">
        {' '}
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
