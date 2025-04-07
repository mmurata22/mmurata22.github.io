import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/mmurata22" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/michele-de-guzman-murata-685839228/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="mailto:michele.h.murata@mail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;
