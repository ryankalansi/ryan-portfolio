import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      bg: "bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      bg: "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:shadow-md cursor-pointer",
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
      name: "NextJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      bg: "bg-gray-400/10 text-gray-200 hover:bg-gray-400/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      bg: "bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      bg: "bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:shadow-md cursor-pointer",
    },
  ];

  const backendSkills = [
    {
      name: "NodeJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      bg: "bg-teal-600/10 text-teal-400 hover:bg-teal-600/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      bg: "bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      bg: "bg-blue-600/10 text-blue-300 hover:bg-blue-600/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      bg: "bg-blue-800/10 text-blue-400 hover:bg-blue-800/20 hover:shadow-md cursor-pointer",
    },
    {
      name: "Supabase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      bg: "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:shadow-md cursor-pointer",
    },
  ];

  const designSkills = [
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      bg: "bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 hover:shadow-md cursor-pointer",
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

  const experiences = [
    {
      role: "Freelance Front-End Web Developer",
      period: "Apr 2023 – Present",
      desc: "Independently built and delivered 8+ web projects, including internal dashboards and company profiles for various clients (studio, education, and business sectors).",
    },
    {
      role: "Deputy IT Dev Bureau – BEM FIKTI UG",
      period: "Oct 2024 – Oct 2025",
      desc: "Led a team of 7 in planning and delivering 5 web projects, managing bi-weekly meetings, and conducting 16 structured technical training sessions.",
    },
    {
      role: "Full-Stack Developer Cohort – DBS Coding Camp",
      period: "Feb 2025 – Jul 2025",
      desc: "Developed responsive web applications using HTML, CSS, JavaScript, Node.js, and RESTful APIs through intensive hands-on training.",
    },
  ];

  const SkillBadge = ({ tech }) => (
    <span
      className={`flex items-center gap-2 py-1.5 px-3 rounded-full text-sm transition-all ${tech.bg}`}
    >
      <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
      {tech.name}
    </span>
  );

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-2">
              About Me
            </p>
            <h2 className="text-3xl font-bold text-white">
              Bridging Code, Design, and Business Needs.
            </h2>
          </div>

          <div className="rounded-2xl p-8 border border-white/10 bg-white/2 mb-8">
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              I'm a Front-End Developer with over{" "}
              <span className="text-emerald-400 font-medium">2 years</span> of
              hands-on experience building tailored web solutions. Whether it's
              crafting an interactive landing page or architecting a complex
              internal dashboard, my focus is always on writing clean code that
              directly solves client problems and drives actual value.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-white/10">
              {[
                { num: "8+", label: "Projects delivered" },
                { num: "5+", label: "Real clients" },
                { num: "3.82", label: "GPA / 4.00" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">
                    {stat.num}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Front-end
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <SkillBadge key={tech.name} tech={tech} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Back-end
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <SkillBadge key={tech.name} tech={tech} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Design
                </h3>
                <div className="flex flex-wrap gap-2">
                  {designSkills.map((tech) => (
                    <SkillBadge key={tech.name} tech={tech} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/2">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center text-xs">
                  🎓
                </span>
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-white font-medium text-sm">
                    Information Systems
                  </p>
                  <p className="text-gray-400 text-sm">
                    Universitas Gunadarma · 2022 – 2026
                  </p>
                  <p className="text-emerald-400 text-sm font-medium">
                    GPA: 3.82 / 4.00
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <p className="text-gray-500 text-xs">Relevant Coursework:</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Web Development, Database Management System
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/2">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center text-xs">
                  💼
                </span>
                Experience
              </h3>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div
                    key={exp.role}
                    className="relative pl-3 border-l border-emerald-500/30"
                  >
                    <p className="text-white text-sm font-medium leading-snug">
                      {exp.role}
                    </p>
                    <p className="text-emerald-400 text-xs mb-1">
                      {exp.period}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
