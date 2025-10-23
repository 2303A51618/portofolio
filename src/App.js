import React from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { skills, expertise, projects, education } from "./data";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-[#1e2235] shadow-md sticky top-0 z-50">
        <div className="text-xl font-bold tracking-wide">VC. PORTFOLIO</div>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Expertise</li>
          <li>Projects</li>
          <li>Education</li>
          <li>Contact</li>
        </ul>
        <a href="https://vasu-chippa.github.io/Protofolio/" target="_blank" rel="noopener noreferrer">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
            Editz ⚡
          </button>
        </a>
      </nav>

      {/* Home Section */}
      <section className="px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="mb-2 text-lg">Hey there! 👋</div>
          <h1 className="text-4xl md:text-5xl font-extrabold gradient-text">
            I'm Vasu Chippa
          </h1>
          <h2 className="text-2xl mt-2 font-semibold text-purple-400">Aspiring Software Engineer ✨</h2>
          <p className="mt-4 max-w-xl text-lg">
            I love building scalable and user-friendly solutions with modern web technologies. Thanks for visiting my portfolio! <span className="text-blue-300 font-bold">Happy coding..!</span>
          </p>
          <div className="flex gap-4 mt-6">
            <a href="/Vasu__CV-1.docx" download className="bg-gray-800 px-5 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-2">
              My Resume <span>↓</span>
            </a>
            <a href="mailto:chippavasu3@gmail.com" className="bg-purple-600 px-5 py-2 rounded-lg hover:bg-purple-700 text-white">
              Contact Me
            </a>
          </div>
          <div className="flex gap-6 mt-6 text-2xl">
            <a href="https://github.com/vasu-chippa" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/vasu-chippa" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://vasu-chippa.github.io/Protofolio/" target="_blank" rel="noopener noreferrer"><FaCode /></a>
          </div>
        </div>
        {/* Skills Ring */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <div className="text-2xl font-bold mb-4">SKILLS</div>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <div key={skill} className="bg-gray-700 px-4 py-2 rounded-full text-base">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-16 bg-[#191c26]">
        <h2 className="text-3xl font-bold mb-3 text-purple-400">⚡ ABOUT ME</h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Profile placeholder */}
          <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-4xl font-bold text-white">
            VC
          </div>
          <div>
            <p className="text-lg mb-4">
              Aspiring Software Engineer experienced in full-stack web development, cloud deployment, and automation. Passionate about building robust platforms and contributing to innovative tech solutions. I’m always eager to learn, collaborate, and adapt to new challenges!
            </p>
            <ul className="list-disc ml-6 text-base">
              <li>Passionate Full-Stack Developer</li>
              <li>Problem-solver with a love for innovation</li>
              <li>Building scalable & efficient applications</li>
              <li>Cloud technologies for reliable solutions</li>
              <li>Always learning and adapting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-purple-400">✨ Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map(exp => (
            <div key={exp.title} className="bg-[#1e2235] p-6 rounded-lg shadow-lg">
              <div className="text-xl font-bold mb-2">{exp.title}</div>
              <div className="text-base">{exp.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-8 py-16 bg-[#191c26]">
        <h2 className="text-3xl font-bold mb-8 text-purple-400">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.title} className="bg-[#1e2235] p-6 rounded-lg shadow-lg">
              <img src={project.img} alt={project.title} className="rounded mb-4 h-32 object-cover" />
              <div className="text-xl font-bold mb-2">{project.title}</div>
              <div className="text-base mb-2">{project.desc}</div>
              <div className="text-sm mb-4 text-purple-400">{project.stack}</div>
              <div className="flex gap-2">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-400">Live</a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-blue-400">Code</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-3 text-purple-400">🎓 Education</h2>
        <ul className="list-disc ml-6 text-base">
          {education.map(edu => (
            <li key={edu.degree}>
              <span className="font-semibold">{edu.degree}</span> – {edu.school} ({edu.year}) | <span className="font-bold">{edu.score}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-16 bg-[#191c26] flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-3 text-purple-400">Contact</h2>
        <div className="text-lg mb-2">Phone: +91-9381701606</div>
        <div className="text-lg mb-2">Email: chippavasu3@gmail.com</div>
        <div className="flex gap-6 text-2xl mt-4">
          <a href="https://github.com/vasu-chippa" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/vasu-chippa" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400">
        © {new Date().getFullYear()} Vasu Chippa. All Rights Reserved.
      </footer>
    </div>
  );
}