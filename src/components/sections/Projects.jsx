import { RevealOnScroll } from "../RevealOnScroll";

const techStack = [
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
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    bg: "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:shadow-md cursor-pointer",
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
  {
    name: "ExpressJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    bg: "bg-neutral-800 text-white hover:bg-neutral-700 hover:shadow-md cursor-pointer",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    bg: "bg-blue-800/10 text-blue-400 hover:bg-blue-800/20 hover:shadow-md cursor-pointer",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    bg: "bg-orange-600/10 text-orange-500 hover:bg-orange-600/20 hover:shadow-md cursor-pointer",
  },
  {
    name: "FlaskAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    bg: "bg-neutral-700 text-white hover:bg-neutral-600 hover:shadow-md cursor-pointer",
  },
  {
    name: "Adobe Illustrator",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    bg: "bg-orange-400/10 text-orange-300 hover:bg-orange-400/20 hover:shadow-md cursor-pointer",
  },
];

const getTechData = (names) =>
  names
    .map((name) => techStack.find((item) => item.name === name))
    .filter(Boolean);

const projects = [
  {
    title: "Smart Recruiter",
    description:
      "Led a team of six to develop a web application that analyzes resumes and recommends suitable jobs using AI. I served as the Front-End Developer, responsible for building a responsive user interface using React.js and Tailwind CSS. The application displays an overall resume score along with a list of job recommendations. This project was completed as part of a culminating challenge during a coding camp program.",
    note: "The server must be running to access the full features, especially the results section. This project is still under active development to deliver improved versions in the future.",
    tech: [
      "ReactJS",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "PostgreSQL",
      "TensorFlow",
      "FlaskAPI",
    ],
    link: "https://smart-recruiter-capstone.vercel.app/",
    demo: "https://youtu.be/KEejlM_DXOc",
  },
  {
    title: "Studiodirootslab",
    description:
      "Delivered a fully functional and visually engaging website for a photo and video studio within a 1-month timeline.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://studiodirootslab.com/",
  },
  {
    title: "Ocra Activity",
    description:
      "A shop offering outdoor goods and clothing with a classic yet modern website design that emphasizes aesthetics.",
    tech: ["HTML", "CSS", "Bootstrap"],
    link: "https://ocraactivity.com/",
  },
  // {
  //   title: "TK KUTILANG - WIP",
  //   description:
  //     "Ongoing school website development using user-centered design principles.",
  //   tech: ["HTML", "CSS", "Bootstrap"],
  //   link: "https://ryankalansi.github.io/kutilang/",
  // },
  {
    title: "Logo Design - Yakosei",
    description:
      "Logo design for coffee brand 'Yakosei' with a nocturnal theme.",
    tech: ["Adobe Illustrator"],
    link: "https://www.instagram.com/yakosei.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {project.note && (
                  <p className="text-gray-400 mb-4">
                    <strong>Note:</strong> {project.note}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {getTechData(project.tech).map((tech, key) => (
                    <span
                      key={key}
                      className={`flex items-center gap-2 py-1 px-3 rounded-full text-sm transition-all ${tech.bg}`}
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
                <div className="flex flex-wrap gap-3 pt-5">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/npm/feather-icons@4.29.0/dist/icons/external-link.svg"
                      alt="external link"
                      className="w-4 h-4 filter invert"
                    />
                    View Project
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-500 rounded-lg transition-all duration-200 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/npm/feather-icons@4.29.0/dist/icons/play.svg"
                        alt="play"
                        className="w-4 h-4 filter brightness-0 invert"
                      />
                      Watch Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
