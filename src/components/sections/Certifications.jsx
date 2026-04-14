import { RevealOnScroll } from "../RevealOnScroll";

const certifications = [
  {
    title: "Google Project Management",
    issuer: "Google",
    year: "2025",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    color: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    link: "https://drive.google.com/file/d/1U4sZrN0fv42bd5i5LY1nhoG6-mt1gkGj/view?usp=drive_link",
  },
  {
    title: "Front-End & Back-End Developer",
    issuer: "Coding Camp powered by DBS Foundation",
    year: "2025",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    link: "https://drive.google.com/file/d/1O-3uTmU4Z117Wkn8LVhdBjNhVdTOVTnQ/view?usp=drive_link",
  },
  {
    title: "Information Systems Auditing, Controls and Assurance",
    issuer: "The Hong Kong University of Science and Technology (HKUST)",
    year: "2023",
    // Using a generic academic/certificate icon instead of Trello
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coursera/coursera-original.svg",
    color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    link: "https://drive.google.com/file/d/1KcrmmgBq1v0tB4qcqAAEFcTP_yh6j_YW/view?usp=drive_link",
  },
];

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-2">
              Credentials
            </p>
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl border p-6 flex flex-col gap-4 hover:scale-[1.02] transition-all duration-300 ${cert.color} bg-white/2`}
              >
                <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/10">
                  {cert.year}
                </span>

                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <img src={cert.icon} alt={cert.issuer} className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <p className="text-white font-semibold text-sm leading-snug mb-1">
                    {cert.title}
                  </p>
                  <p className="text-gray-500 text-xs">{cert.issuer}</p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-emerald-400 transition-colors mt-auto"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://drive.google.com/drive/u/1/folders/19__zutli1jDrzvcZPq5vv6hfsTN8iY14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-gray-400 hover:border-emerald-500/30 hover:text-emerald-400 text-sm font-medium transition-all duration-200"
            >
              View All Certificates
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
