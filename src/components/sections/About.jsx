import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      bg: "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      bg: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      bg: "bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 hover:shadow-md cursor-pointer",
    },
    {
      name: "ReactJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      bg: "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      bg: "bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      bg: "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:shadow-md cursor-pointer",
    },
  ];

  const backendSkills = [
    {
      name: "NodeJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      bg: "bg-green-600/10 text-green-500 hover:bg-green-600/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      bg: "bg-blue-600/10 text-blue-300 hover:bg-blue-600/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      bg: "bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:shadow-md cursor-pointer",
    },
  ];

  const designSkills = [
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      bg: "bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "Canva",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      bg: "bg-blue-400/10 text-blue-300 hover:bg-blue-400/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "Adobe Illustrator",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      bg: "bg-orange-400/10 text-orange-300 hover:bg-orange-400/20 hover:shadow-md cursor-pointer",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am an enthusiastic Web Developer with a focus on Front-end
              development, currently deepening in Full-stack technologies. I am
              highly adaptable, open to learning new skills, and effective in
              teamwork settings to drive successful outcomes
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Front-end</h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className={`flex items-center gap-2 py-2 px-3 rounded-full text-sm transition-all ${tech.bg}`}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-4 h-4"
                      />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Back-end</h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className={`flex items-center gap-2 py-2 px-3 rounded-full text-sm transition-all ${tech.bg}`}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-4 h-4"
                      />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Design</h3>
                <div className="flex flex-wrap gap-3">
                  {designSkills.map((tech, key) => (
                    <span
                      key={key}
                      className={`flex items-center gap-2 py-2 px-3 rounded-full text-sm transition-all ${tech.bg}`}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-4 h-4"
                      />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Undergraduate Information System</strong> -
                  Universitas Gunadarma (2022 - present)
                </li>
                <li>
                  Relevant Coursework: Web Development, Database Management
                  System
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Full-Stack Developer Cohort - DBS Coding Camp (Feb
                    2025-present)
                  </h4>
                  <p>
                    Building web applications using HTML, CSS, JavaScript, and
                    Node.js through hands-on.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Deputy IT Dev Bureau - BEM FIKTI UG (Oct 2024-Present)
                  </h4>
                  <p>
                    Supporting team coordination and leading technical tasks in
                    website planning and development.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Front-End Web Developer - Upwork (Aug 2024-Present)
                  </h4>
                  <p>
                    Working on freelance Front-End development with clients who
                    open jobs.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Front-End Web Developer - Roots Laboratory (Apr
                    2023-Present)
                  </h4>
                  <p>
                    Created and maintained the Studiodirootslab website,
                    contributing ideas, UI/UX design, and digital support for
                    project development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
