import { RevealOnScroll } from "../RevealOnScroll";

const techStack = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    bg: "bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 cursor-pointer",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    bg: "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 cursor-pointer",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    bg: "bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 cursor-pointer",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    bg: "bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 cursor-pointer",
  },
  {
    name: "ReactJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    bg: "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 cursor-pointer",
  },
  {
    name: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    bg: "bg-gray-400/10 text-gray-200 hover:bg-gray-400/20 cursor-pointer",
  },
  {
    name: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    bg: "bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 cursor-pointer",
  },
  {
    name: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    bg: "bg-teal-600/10 text-teal-400 hover:bg-teal-600/20 cursor-pointer",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    bg: "bg-blue-600/10 text-blue-300 hover:bg-blue-600/20 cursor-pointer",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    bg: "bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 cursor-pointer",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    bg: "bg-blue-800/10 text-blue-400 hover:bg-blue-800/20 cursor-pointer",
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    bg: "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 cursor-pointer",
  },
  {
    name: "ExpressJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    bg: "bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    bg: "bg-orange-600/10 text-orange-500 hover:bg-orange-600/20 cursor-pointer",
  },
  {
    name: "FlaskAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    bg: "bg-neutral-700 text-white hover:bg-neutral-600 cursor-pointer",
  },
  {
    name: "Adobe Illustrator",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    bg: "bg-orange-400/10 text-orange-300 hover:bg-orange-400/20 cursor-pointer",
  },
];

const getTechData = (names) =>
  names
    .map((name) => techStack.find((item) => item.name === name))
    .filter(Boolean);

const projects = [
  {
    title: "Trujiva — Business Management System",
    description:
      "Full-scale internal ERP-style web system with 7 modules: executive dashboard, product & inventory management, multi-tier partner database, order processing, cash flow tracking, sales performance, and sample expense management.",
    badge: "Private — Internal System",
    thumbnail: "/thumbnails/trujiva.png",
    showcaseId: "trujiva", // <-- Diubah dari showcaseLink menjadi showcaseId
    tech: ["NextJS", "ReactJS", "TailwindCSS", "PostgreSQL", "Supabase"],
  },
  {
    title: "Roots Finance Dashboard",
    description:
      "Private internal finance dashboard for Roots Laboratory featuring expense tracking, overtime management, real-time budget monitoring, period-based filtering, and downloadable monthly reports.",
    badge: "Private — Internal System",
    thumbnail: "/thumbnails/roots-finance.png",
    showcaseId: "roots-finance", // <-- Disiapkan untuk showcase Roots Finance nanti
    tech: ["NextJS", "ReactJS", "TailwindCSS", "PostgreSQL", "Supabase"],
  },
  {
    title: "TK Kutilang — School Web System",
    description:
      "Complete full-stack web system for a kindergarten in Bekasi. Responsive 7-page public profile site + admin dashboard with student enrollment tracking, data filtering, Excel export, and secure admin login.",
    thumbnail: "/thumbnails/kutilang.png",
    tech: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
    link: "https://kutilang.sch.id/",
  },
  {
    title: "Smart Recruiter",
    description:
      "Led a team of 6 to build an AI-powered recruitment web app. Analyzes uploaded resumes, generates a score, and recommends matching jobs.",
    thumbnail: "/thumbnails/smart-recruiter.png",
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
      "Built and delivered the official website for a photo/video studio within 1 month, improving digital presence and enabling direct client inquiries online.",
    thumbnail: "/thumbnails/studiodirootslab.png",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://studiodirootslab.com/",
  },
  {
    title: "Ocra Activity",
    description:
      "Product showcase site for an outdoor lifestyle brand, combining classic layout with modern aesthetics.",
    thumbnail: "/thumbnails/ocraactivity.png",
    badge: "Domain deactivated by client",
    tech: ["HTML", "CSS", "Bootstrap"],
    link: "https://ryankalansi.github.io/ocraactivity/",
  },
  {
    title: "Logo Design — Yakosei",
    description:
      "Logo design for coffee brand 'Yakosei' with a nocturnal concept to reflect its bold identity.",
    thumbnail: "/thumbnails/yakosei.jpg",
    tech: ["Adobe Illustrator"],
    link: "https://www.instagram.com/yakosei.id",
  },
];

// Menerima props onOpenShowcase dari App.jsx
export const Projects = ({ onOpenShowcase }) => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-2">
              Portfolio
            </p>
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 hover:border-emerald-500/30 hover:shadow-[0_4px_20px_rgba(52,211,153,0.1)] transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {project.thumbnail ? (
                  <div className="w-full h-48 overflow-hidden bg-gray-900">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
                      <div className="w-2 h-2 rounded-full bg-cyan-500/40" />
                      <div className="w-2 h-2 rounded-full bg-blue-500/40" />
                    </div>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-white leading-snug">
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 whitespace-nowrap flex-shrink-0">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {getTechData(project.tech).map((tech, key) => (
                      <span
                        key={key}
                        className={`flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs transition-all ${tech.bg}`}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-3 h-3"
                        />
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {(project.link || project.demo || project.showcaseId) && (
                    <div className="flex flex-wrap gap-2 pt-3 mt-auto border-t border-white/5">
                      {/* Tombol yang memicu fungsi internal React */}
                      {project.showcaseId && (
                        <button
                          onClick={() => onOpenShowcase(project.showcaseId)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 rounded-lg transition-all text-sm font-medium cursor-pointer"
                        >
                          View Showcase →
                        </button>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 rounded-lg transition-all text-sm font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://cdn.jsdelivr.net/npm/feather-icons@4.29.0/dist/icons/external-link.svg"
                            alt=""
                            className="w-3.5 h-3.5 filter invert opacity-60"
                          />
                          Live Site
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="inline-flex items-center gap-1.5 px-4 py-2 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all text-sm font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://cdn.jsdelivr.net/npm/feather-icons@4.29.0/dist/icons/play.svg"
                            alt=""
                            className="w-3.5 h-3.5 filter brightness-0 invert"
                          />
                          Watch Demo
                        </a>
                      )}
                    </div>
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
