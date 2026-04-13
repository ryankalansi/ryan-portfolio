import { RevealOnScroll } from "../RevealOnScroll";

const activities = [
  {
    category: "Creative Tech Exploration",
    emoji: "🎛️",
    color: "border-cyan-500/20 bg-cyan-500/5",
    accent: "text-cyan-400",
    dotColor: "bg-cyan-400",
    items: [
      {
        title: "TouchDesigner",
        period: "2025 – Present",
        desc: "Exploring real-time generative visuals and interactive installations using TouchDesigner. Combining visual programming with creative technology for live visual experiences.",
        tags: ["Visual Programming", "Generative Art", "Real-time"],
        status: "Exploring",
        statusColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      },
      {
        title: "Strudel (Live Coding Music)",
        period: "2025 – Present",
        desc: "Learning live coding music patterns through Strudel. Exploring the intersection of code, sound, and performance in the creative coding community.",
        tags: ["Live Coding", "Music", "Creative Code"],
        status: "Exploring",
        statusColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      },
    ],
  },
  {
    category: "Events & Documentation",
    emoji: "📸",
    color: "border-yellow-500/20 bg-yellow-500/5",
    accent: "text-yellow-400",
    dotColor: "bg-yellow-400",
    items: [
      {
        title: "ARCH:ID 2024 — Rootslab",
        period: "February 2024",
        desc: "Documented Rootslab's activities during installation and event sessions at ARCH:ID 2024, Indonesia Architecture Exhibition & Conference.",
        tags: ["Photography", "Documentation", "Architecture"],
        status: "Completed",
        statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      },
      {
        title: "Bulan Bung Karno — PDI Perjuangan",
        period: "June 2023",
        desc: "Participated in a large-scale cultural performance broadcast nationally, commemorating Soekarno's legacy at Gelora Bung Karno Stadium.",
        tags: ["Performance", "Cultural", "National Event"],
        status: "Completed",
        statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      },
    ],
  },
];

export const Activities = () => {
  return (
    <section
      id="activities"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-2">
              Beyond Code
            </p>
            <h2 className="text-3xl font-bold text-white">
              Activities & Explorations
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
              Outside of client work — exploring creative technology, events,
              and community involvement.
            </p>
          </div>

          {/* Activity groups */}
          <div className="space-y-8">
            {activities.map((group, gIdx) => (
              <div key={gIdx}>
                {/* Group label */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-lg">{group.emoji}</span>
                  <h3
                    className={`text-sm font-semibold uppercase tracking-wider ${group.accent}`}
                  >
                    {group.category}
                  </h3>
                  <div className="flex-1 h-px bg-white/5" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className={`rounded-2xl border p-6 flex flex-col gap-3 hover:scale-[1.01] transition-all duration-300 ${group.color}`}
                    >
                      {/* Title + status */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-white font-semibold text-sm leading-snug">
                            {item.title}
                          </p>
                          <p className="text-gray-500 text-xs mt-0.5">
                            {item.period}
                          </p>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full border whitespace-nowrap flex-shrink-0 ${item.statusColor}`}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed flex-1">
                        {item.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-500 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
