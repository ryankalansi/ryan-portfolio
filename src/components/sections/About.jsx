import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Bootstrap",
    "Tailwind CSS",
  ];

  const backendSkills = ["NodeJS", "MySQL", "PHP"];
  const designSkills = ["Figma", "Canva", "Adobe Illustrator"];

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
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Back-end</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Design</h3>
                <div className="flex flex-wrap gap-2">
                  {designSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
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
