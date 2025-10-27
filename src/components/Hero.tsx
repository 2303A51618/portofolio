
import React, { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const TITLES = useMemo(() => [
    'MERN Stack Developer 🚀',
    'Frontend Developer ✨',
    'Full Stack Developer 💻'
  ], []);

  // Skills array ordered to match the visual placement in the target image (labels used for safe rendering)
  const skills = [
    { color: '#61DAFB', name: 'React' },
    { color: '#339933', name: 'Node.js' },
    { color: '#47A248', name: 'MongoDB' },
    { color: '#FFFFFF', name: 'Express' },
    { color: '#F7DF1E', name: 'JavaScript' },
    { color: '#3178C6', name: 'TypeScript' },
    { color: '#2496ED', name: 'Docker' },
    { color: '#4479A1', name: 'MySQL' },
    { color: '#007396', name: 'Java' },
    { color: '#3776AB', name: 'Python' },
    { color: '#FFFFFF', name: 'GitHub' },
    { color: '#F05032', name: 'Git' },
    { color: '#FF6C37', name: 'Postman' },
    { color: '#61DAFB', name: 'React Native' }
  ];
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
      <style>{`
        /* --- Animation Keyframes --- */
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Inner Orbit: Radius 190px (matches previous good setting for 8 icons, spacing them evenly looks good for 6 too) */
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(190px) rotate(0deg); } 
          to { transform: rotate(360deg) translateX(190px) rotate(-360deg); }
        }

        /* Outer Orbit: Radius 270px (matches previous good setting for 7 icons) */
        @keyframes orbitOuter {
          from { transform: rotate(0deg) translateX(270px) rotate(0deg); } 
          to { transform: rotate(-360deg) translateX(270px) rotate(360deg); }
        }

        .hero-section {
          position: relative; overflow: hidden; display: flex;
          align-items: center; justify-content: space-between; min-height: 100vh;
          padding-left: 8rem; padding-right: 4rem; gap: 6rem; background: #0a0e27;
        }

        @media (max-width: 1200px) {
          .hero-section {
            flex-direction: column; padding-left: 2rem; padding-right: 2rem;
            justify-content: center; gap: 3rem;
          }
        }

        /* --- Grid & Content Styles (unchanged) --- */
        .grid-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: linear-gradient(to right, rgba(139, 92, 246, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.08) 1px, transparent 1px); background-size: 60px 60px; z-index: 1; pointer-events: none; }
        .grid-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: grid; grid-template-columns: repeat(auto-fill, 60px); grid-template-rows: repeat(auto-fill, 60px); pointer-events: none; z-index: 2; }
        .grid-cell { border: 1px solid transparent; transition: all 0.3s ease; pointer-events: auto; }
        .grid-cell:hover { background: rgba(139, 92, 246, 0.15); border-color: rgba(139, 92, 246, 0.4); box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
        .hero-content { max-width: 550px; z-index: 10; }
        .hero-section .greeting-animate { opacity: 0; animation: fadeInLeft 0.8s ease-out 0.2s forwards; font-size: 1.125rem; color: #e2e8f0; margin-bottom: 0.5rem; }
        .hero-section .name-animate { opacity: 0; animation: fadeInLeft 0.8s ease-out 0.4s forwards; font-size: 3rem; font-weight: 800; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 0.5rem; }
        .hero-section .title-container { opacity: 0; animation: fadeInLeft 0.8s ease-out 0.6s forwards; min-height: 40px; }
        .hero-section .typing-text { font-size: 1.5rem; font-weight: 600; color: #c084fc; }
        .hero-section .typing-cursor { display: inline-block; width: 2px; height: 1.2em; background-color: #c084fc; margin-left: 2px; animation: blink 1s step-end infinite; vertical-align: text-bottom; }
        .hero-section .description-animate { opacity: 0; animation: fadeInLeft 0.8s ease-out 0.8s forwards; color: #cbd5e1; font-size: 1.125rem; line-height: 1.75; margin-top: 1.5rem; }
        .hero-section .buttons-animate { opacity: 0; animation: fadeInLeft 0.8s ease-out 1s forwards; margin-top: 2rem; }
        .hero-section .social-animate { opacity: 0; animation: fadeInLeft 0.8s ease-out 1.2s forwards; margin-top: 1.5rem; }
        .hero-section .btn-hover { padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 500; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); display: inline-flex; align-items: center; gap: 0.5rem; }
        .hero-section .btn-resume { background: #1e293b; color: #f1f5f9; border: 1px solid #334155; }
        .hero-section .btn-contact { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
        .hero-section .btn-hover:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4); }
        .hero-section .social-icon-hover { color: #94a3b8; font-size: 1.5rem; transition: all 0.3s ease; }
        .hero-section .social-icon-hover:hover { color: #c084fc; transform: translateY(-4px); }
  .buttons-row { display:flex; gap:1rem; }
  .social-row { display:flex; gap:1.5rem; }
  .highlight { color: #60a5fa; font-weight: 700; }
  .skill-label { font-weight: 700; font-size: 12px; color: inherit; }
        
        .skills-orbit-container {
          position: relative; width: 600px; height: 600px; display: flex;
          align-items: center; justify-content: center; opacity: 0;
          animation: fadeInRight 1s ease-out 0.8s forwards; z-index: 10;
        }

        @media (max-width: 1200px) {
          .skills-orbit-container { width: 450px; height: 450px; }
        }

        .skills-text {
          position: absolute; font-size: 3.5rem; font-weight: 800;
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; z-index: 5; letter-spacing: 4px;
        }

        .orbit-ring { position: absolute; border: 2px dashed rgba(139, 92, 246, 0.25); border-radius: 50%; }
        
        /* Inner Ring: 190px radius (380px diameter) */
        .orbit-ring-inner { width: 380px; height: 380px; }
        
        /* Outer Ring: 270px radius (540px diameter) */
        .orbit-ring-outer { width: 540px; height: 540px; }

        @media (max-width: 1200px) {
          .orbit-ring-inner { width: 300px; height: 300px; }
          .orbit-ring-outer { width: 420px; height: 420px; }
        }

        .skill-icon {
          position: absolute; width: 65px; height: 65px; display: flex;
          align-items: center; justify-content: center; background: rgba(30, 41, 59, 0.85);
          backdrop-filter: blur(10px); border-radius: 50%;
          border: 2px solid rgba(139, 92, 246, 0.35); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease; cursor: pointer;
        }

        .skill-icon:hover {
          transform: scale(1.3) !important; box-shadow: 0 12px 48px rgba(139, 92, 246, 0.6);
          z-index: 10; border-color: rgba(139, 92, 246, 0.9);
        }

        .skill-icon svg { font-size: 30px; }

        /* --- INNER ORBIT: 6 Icons (25s / 6 = 4.167s interval) --- */
        .skill-icon:nth-child(1) { animation: orbit 25s linear infinite; animation-delay: 0s; }
        .skill-icon:nth-child(2) { animation: orbit 25s linear infinite; animation-delay: -4.167s; }
        .skill-icon:nth-child(3) { animation: orbit 25s linear infinite; animation-delay: -8.334s; }
        .skill-icon:nth-child(4) { animation: orbit 25s linear infinite; animation-delay: -12.5s; }
        .skill-icon:nth-child(5) { animation: orbit 25s linear infinite; animation-delay: -16.667s; }
        .skill-icon:nth-child(6) { animation: orbit 25s linear infinite; animation-delay: -20.834s; }

        /* --- OUTER ORBIT: 9 Icons (30s / 9 = 3.333s interval) --- */
        .skill-icon:nth-child(7) { animation: orbitOuter 30s linear infinite; animation-delay: 0s; }
        .skill-icon:nth-child(8) { animation: orbitOuter 30s linear infinite; animation-delay: -3.333s; }
        .skill-icon:nth-child(9) { animation: orbitOuter 30s linear infinite; animation-delay: -6.666s; }
        .skill-icon:nth-child(10) { animation: orbitOuter 30s linear infinite; animation-delay: -10.0s; }
        .skill-icon:nth-child(11) { animation: orbitOuter 30s linear infinite; animation-delay: -13.333s; }
        .skill-icon:nth-child(12) { animation: orbitOuter 30s linear infinite; animation-delay: -16.666s; }
        .skill-icon:nth-child(13) { animation: orbitOuter 30s linear infinite; animation-delay: -20.0s; }
        .skill-icon:nth-child(14) { animation: orbitOuter 30s linear infinite; animation-delay: -23.333s; }
        .skill-icon:nth-child(15) { animation: orbitOuter 30s linear infinite; animation-delay: -26.666s; }
        
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>

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

            {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-icon"
              title={skill.name}
            >
              <span className="skill-label">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}