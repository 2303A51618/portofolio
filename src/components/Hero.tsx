
import React, { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

import reactIcon from './skill-icons--react-dark.svg';
import nodeIcon from './skill-icons--nodejs-dark.svg';
import mongoIcon from './skill-icons--mongodb.svg';
import expressIcon from './skill-icons--expressjs-dark.svg';
import jsIcon from './skill-icons--javascript.svg';
import javaIcon from './skill-icons--java-dark.svg';
import pythonIcon from './skill-icons--python-dark.svg';
import gitIcon from './skill-icons--git.svg';
import githubIcon from './skill-icons--github-dark.svg';
import postmanIcon from './skill-icons--postman.svg';
import htmlIcon from './skill-icons--html.svg';
import awsIcon from './skill-icons--aws-dark.svg';
import postgresIcon from './skill-icons--postgresql-dark.svg';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const TITLES = useMemo(() => [
    'MERN Stack Developer 🚀',
    'Frontend Developer ✨',
    'Full Stack Developer 💻'
  ], []);

  // Skills arrays split into inner and outer orbit with imported icons
  const innerSkills = [
    { name: 'React', src: reactIcon },
    { name: 'Node.js', src: nodeIcon },
    { name: 'MongoDB', src: mongoIcon },
    { name: 'Express', src: expressIcon },
  ];

  const outerSkills = [
    { name: 'JavaScript', src: jsIcon },
    { name: 'TypeScript', src: awsIcon },
    { name: 'HTML', src: htmlIcon },
    { name: 'Java', src: javaIcon },
    { name: 'Python', src: pythonIcon },
    { name: 'GitHub', src: githubIcon },
    { name: 'Git', src: gitIcon },
    { name: 'Postman', src: postmanIcon },
    { name: 'Postgres', src: postgresIcon },
  ];

  // no hover pause: keep orbits always animating
  useEffect(() => {
    const currentTitle = TITLES[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterComplete = 2000;
    const pauseAfterDelete = 500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseAfterComplete);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % TITLES.length);
          }, pauseAfterDelete);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIndex, TITLES]);

  return (
    <>
      

      <section className="hero-section">
        <div className="grid-background"></div>
        <div className="grid-overlay">
          {Array.from({ length: 300 }).map((_, index) => (
            <div key={index} className="grid-cell"></div>
          ))}
        </div>

        {/* Left Side - Content */}
        <div className="hero-content">
          <div className="greeting-animate">Hey there! 👋</div>
          <h1 className="name-animate">I'm Vasu</h1>

          <div className="title-container">
            <h2 className="typing-text">
              {displayedText}
              <span className="typing-cursor"></span>
            </h2>
          </div>

          <p className="description-animate">
            I love learning new technologies and building solutions that make a difference. 
            Thanks for visiting my portfolio! 
            <span className="highlight"> Happy coding..!</span>
          </p>

          <div className="buttons-animate buttons-row">
            <a 
    href="/Vasu__CV.docx" 
    target="_blank" 
    className="btn-hover btn-resume"
>
    My Resume <span>↓</span>
</a>
            <a 
              href="mailto:chippavasu3@gmail.com" 
              className="btn-hover btn-contact"
            >
              Contact Me
            </a>
          </div>

          <div className="social-animate social-row">
            <a
              href="https://github.com/2303A51618"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-hover"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/vasu-chippa-0640112a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-hover"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:chippavasu3@gmail.com"
              className="social-icon-hover"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>

        {/* Right Side - Orbiting Skills */}
        <div className="skills-orbit-container">
          <div className="orbit-ring orbit-ring-inner"></div>
          <div className="orbit-ring orbit-ring-outer"></div>

          <div className="skills-text">SKILLS</div>

          {/* Inner orbit */}
          <div className={`orbit orbit-inner`}>
            {innerSkills.map((s) => (
              <div key={s.name} className="orbit-item" title={s.name}>
                <div className="icon-wrap">
                  <img src={s.src} alt={s.name} />
                </div>
              </div>
            ))}
          </div>

          {/* Outer orbit */}
          <div className={`orbit orbit-outer`}>
            {outerSkills.map((s) => (
              <div key={s.name} className="orbit-item" title={s.name}>
                <div className="icon-wrap">
                  <img src={s.src} alt={s.name} />
                </div>
              </div>
            ))}
          </div>

          {/* Static grid fallback for very small screens (CSS handles visibility) */}
          <div className="skills-grid" aria-hidden>
            {[...innerSkills, ...outerSkills].map((s) => (
              <div key={s.name} className="orbit-item" title={s.name}>
                <div className="icon-wrap">
                  <img src={s.src} alt={s.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}