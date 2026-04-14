import { RevealOnScroll } from "../RevealOnScroll";
import profilePic from "../../assets/profile.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <RevealOnScroll>
        <div className="z-10 px-4 max-w-5xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* LEFT — Text */}
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for freelance
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Ryan Kalansi
                </span>
              </h1>

              <div className="text-gray-400 text-lg mb-2 max-w-lg leading-relaxed">
                <p>
                  Front-End Developer specializing in{" "}
                  <span className="text-emerald-400 font-medium">
                    React.js & Next.js
                  </span>
                </p>
                <p className="mt-2">
                  I help businesses build scalable internal dashboards and
                  engaging company profiles, turning complex ideas into seamless
                  digital experiences.
                </p>
              </div>

              <p className="text-gray-500 text-sm mb-6 max-w-lg">
                Currently open for new opportunities to collaborate and build
                something great together.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]"
                >
                  View Projects
                </a>
                <a
                  href="https://www.linkedin.com/in/ryan-kalansi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-white/10 text-gray-300 hover:border-emerald-500/50 hover:text-emerald-400 font-medium transition-all duration-200 hover:-translate-y-0.5"
                >
                  LinkedIn
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-lg border border-white/10 text-gray-300 hover:border-white/30 font-medium transition-all duration-200 hover:-translate-y-0.5"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* RIGHT — Photo */}
            <div className="flex-shrink-0 relative">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/20 blur-xl" />
                {/* Photo container */}
                <div className="relative w-full h-full rounded-full border-2 border-emerald-500/30 overflow-hidden bg-gray-800">
                  <img
                    src={profilePic}
                    alt="Ryan Kalansi"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-full h-full items-center justify-center text-6xl hidden"
                    style={{ display: "none" }}
                  >
                    👨‍💻
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 bg-gray-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-gray-300">
                  <span className="text-emerald-400 font-bold">2+</span> yrs exp
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
