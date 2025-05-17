import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

// IMAGE PATHS (swap these for your own images later if desired)
const HERO_IMG = "/hero.svg"; // Place your replacement SVG/JPG in /public and update this path
const MINOR_IMAGES = [
  "/minor1.svg",  // To-Do List
  "/minor2.svg",  // Login/Register
  "/minor3.svg",  // Feedback Form
  "/minor4.svg",  // Weather App
];

const minorProjects = [
  {
    title: "To-Do List Web App",
    description: "Organize your tasks with a simple, elegant React-based to-do list. Tasks are saved in your browser (localStorage). Pure front-end.",
    tech: ["React", "CSS", "localStorage"],
    image: MINOR_IMAGES[0],
    github: "https://github.com/your-repo"
  },
  {
    title: "Login/Register Form UI",
    description: "A beautiful UI for login & registration, with in-browser form validation and fake/mock backend responses.",
    tech: ["React", "CSS", "JS"],
    image: MINOR_IMAGES[1],
    github: "https://github.com/your-repo"
  },
  {
    title: "Simple Feedback Form",
    description: "Send feedback messages. Front-end only: on submit, a 'Thank you' is shown. Easily connect a backend if desired later.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: MINOR_IMAGES[2],
    github: "https://github.com/your-repo"
  },
  {
    title: "Weather App",
    description: "See current weather by city using fetch from a free public API. Clean front-end app with real data.",
    tech: ["JavaScript", "CSS", "API"],
    image: MINOR_IMAGES[3],
    github: "https://github.com/your-repo"
  },
];

const majorProject = {
  title: "College Event Management System",
  description:
    "A web-based solution for organizing, scheduling, and managing collegiate events. Enables event creation, registration, notifications, and reporting. Built using HTML, CSS, JavaScript, PHP and MySQL.",
  tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  image: "/minor1.svg", // Place your major project image in /public and update path
  github: "https://github.com/Mohd-Kamil/College-event-management-system"
};

const resumeURL = "/resume.pdf";
const myEmail = "mohkamil.info@gmail.com";

function App() {
  return (
    <div className="relative min-h-screen font-sans">
      {/* Immersive Gradient Background Layer */}
      <div className="fixed inset-0 z-0">
        <div className="absolute w-full h-full bg-gradient-to-tr from-blue-100 via-indigo-50 to-violet-100"/>
        {/* Decorative SVG Abstract Shapes */}
        <svg className="absolute top-0 left-0 opacity-30 z-[1]" width="620" height="180" viewBox="0 0 620 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="180" cy="80" rx="140" ry="60" fill="#a5b4fc"/>
        </svg>
        <svg className="absolute bottom-0 right-0 opacity-20 z-[1]" width="420" height="130" viewBox="0 0 420 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="340" cy="100" rx="85" ry="30" fill="#c7d2fe"/>
        </svg>
        <svg className="absolute top-32 right-32 opacity-10 z-[1]" width="300" height="140" viewBox="0 0 300 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="40" rx="80" ry="33" fill="#6366f1"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen bg-transparent">
        {/* Hero Section */}
        <div className="w-full flex flex-col items-center pt-10 pb-6 relative">
          <img
            src={HERO_IMG}
            alt="Tech hero"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow h-44 object-cover object-center mb-6 opacity-90"
          />
          <header className="text-center">
            <h1 className="text-5xl font-black tracking-tight">Mohd Kamil</h1>
            <p className="mt-2 text-zinc-600 text-xl font-medium">BCA Graduate | Web Developer</p>
            <p className="mt-5 text-zinc-700 max-w-xl mx-auto">Motivated BCA graduate passionate about building practical web solutions. Adept at front-end & back-end technologies. Eager to contribute and learn in a dynamic team.</p>
            <div className="mt-4 flex justify-center gap-5">
              <a href={`mailto:${myEmail}`} className="hover:text-blue-600" title="Email"><Mail /></a>
              <a href="https://github.com/Mohd-Kamil" target="_blank" rel="noopener" className="hover:text-blue-600" title="GitHub"><Github /></a>
              <a href="https://www.linkedin.com/in/mohd-kamil-4b6241366/" target="_blank" rel="noopener" className="hover:text-blue-600" title="LinkedIn"><Linkedin /></a>
            </div>
          </header>
        </div>

        {/* Projects */}
        <section className="max-w-3xl mx-auto p-4 mb-16">
          <h2 className="text-3xl font-bold border-b-2 border-zinc-200 pb-3 mt-2 mb-7">Projects</h2>
          {/* Major Project (replace image path as desired) */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 bg-white p-5 rounded-xl shadow-md">
            <img
              src={majorProject.image}
              alt="College Event Management System"
              className="w-full md:w-1/3 rounded-lg object-cover h-40 border"
            />
            <div className="w-full">
              <h3 className="text-2xl font-semibold flex gap-2 items-center">{majorProject.title}</h3>
              <p className="mt-2 text-zinc-700">{majorProject.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 mb-2">
                {majorProject.tech.map(t => (
                  <span key={t} className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full uppercase tracking-widest font-bold">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={majorProject.github}
                target="_blank"
                className="inline-block underline text-blue-700 font-semibold mt-1"
                rel="noopener"
              >View on GitHub</a>
            </div>
          </div>
          {/* Minor Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {minorProjects.map((proj, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow flex flex-col">
                {/* Swap out image: upload yours to /public, update MINOR_IMAGES above */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="h-32 rounded object-cover mb-3 w-full border"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">{proj.title}</h4>
                  <p className="mb-2 text-zinc-700">{proj.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto mb-2">
                  {proj.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 text-xs bg-zinc-200 rounded-full text-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener"
                    className="inline-block mt-1 text-blue-600 underline text-sm font-medium"
                  >View on GitHub</a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Resume */}
        <section className="max-w-2xl mx-auto bg-blue-50 mt-16 mb-12 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold border-b-2 border-blue-100 pb-2 mb-4">Resume</h2>
          <div>
            <p><strong>Degree:</strong> Bachelor of Computer Applications (BCA)</p>
            <p className="mt-1"><strong>Skills:</strong> HTML, CSS, JavaScript, PHP, MySQL, React, MongoDB, Python, Java, C++</p>
          </div>
          <a
            href={resumeURL}
            download
            className="inline-block mt-4 px-5 py-2 bg-blue-700 text-white rounded font-medium shadow hover:bg-blue-800"
          >Download Resume (PDF)</a>
        </section>

        {/* Contact */}
        <section className="max-w-2xl mx-auto mb-16 py-4 bg-white rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold mb-3">Contact</h2>
          <p className="mb-2">Reach me at <a href={`mailto:${myEmail}`} className="underline text-blue-700 font-medium">{myEmail}</a></p>
          <div className="flex justify-center gap-6 mt-2">
            <a href={`mailto:${myEmail}`} className="hover:text-blue-600"><Mail /></a>
            <a href="https://github.com/Mohd-Kamil" target="_blank" rel="noopener" className="hover:text-blue-600"><Github /></a>
            <a href="https://www.linkedin.com/in/mohd-kamil-4b6241366/" target="_blank" rel="noopener" className="hover:text-blue-600"><Linkedin /></a>
          </div>
        </section>

        <footer className="mt-10 pb-8 text-center text-xs text-zinc-400">&copy; {new Date().getFullYear()} Mohd Kamil. All rights reserved.</footer>
      </div>
    </div>
  );
}

export default App;
