import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Studio */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all">
              <h3 className="text-xl font-bold mb-2">Studiodirootslab</h3>
              <p className="text-gray-400 mb-4">
                Delivered a fully functional and visually engaging website for a
                photo and video studio within a 1-month timeline.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Html, CSS, JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://studiodirootslab.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Ocra */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all">
              <h3 className="text-xl font-bold mb-2">Ocra Activity </h3>
              <p className="text-gray-400 mb-4">
                A shop offering outdoor goods and clothing with a classic yet
                modern website design that emphasizes aesthetics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Html, CSS, Bootstrap"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://ocraactivity.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Bootcamp */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Final Project - Web Programming & Human-Computer Interaction
                Course
              </h3>
              <p className="text-gray-400 mb-4">
                Making the final project of the course with the theme of
                education (Front-End and Back-End bootcamp), contributing as
                chairman and getting the most satisfactory results in making it
                with the team.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP, CSS, Bootstrap, JavaScript, MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="http://kelompok1pbw.infinityfreeapp.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Kutilang */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all">
              <h3 className="text-xl font-bold mb-2">TK KUTILANG - WIP</h3>
              <p className="text-gray-400 mb-4">
                Ongoing school website development using user-centered design
                principles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Html, CSS, Bootstrap"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://ryankalansi.github.io/kutilang1/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all">
              <h3 className="text-xl font-bold mb-2">Logo Design - Yakosei</h3>
              <p className="text-gray-400 mb-4">
                Logo design for coffee brand "Yakosei" with a nocturnal theme
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Adobe Illustrator"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.instagram.com/yakosei.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
