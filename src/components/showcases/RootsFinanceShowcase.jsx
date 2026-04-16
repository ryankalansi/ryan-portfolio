import { useEffect, useState } from "react";

export const RootsFinanceShowcase = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const screenshots = [
    {
      src: "/showcases/roots-finance/pengeluaran.png",
      label: "Pengeluaran",
      caption: "Expense Tracking — Daftar Pengeluaran",
      desc: "Summary cards for total spend, pending reviews, remaining budget, and global budget limit. Tabular list with date, description, requester, amount, status, and action controls.",
    },
    {
      src: "/showcases/roots-finance/lembur.png",
      label: "Lembur",
      caption: "Overtime Management — Daftar Lembur Karyawan",
      desc: "Overtime entries per employee with days, rate, total cost, status, and note fields. Shared budget visibility across modules with pending review count.",
    },
    {
      src: "/showcases/roots-finance/laporan.png",
      label: "Laporan",
      caption: "Laporan — Daily Expense Chart",
      desc: "Period-filtered report section with three views: daily expense chart, daily overtime chart, and combined analysis. Includes downloadable monthly report export.",
    },
  ];

  return (
    <div
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
      className="min-h-screen bg-[#F8F9FA] text-gray-900"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>

      {/* NAV */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-3.5 flex items-center justify-between z-50 shadow-sm">
        <span className="font-bold text-lg tracking-tight text-gray-900">
          Ryan<span className="text-[#059669]">.Kalansi</span>
        </span>
        <button
          onClick={onClose ?? (() => window.history.back())}
          className="text-sm text-gray-500 hover:text-[#059669] flex items-center gap-2 transition-colors font-medium"
        >
          ← Back to Projects
        </button>
      </nav>

      {/* HERO */}
      <div className="bg-[#111827] text-white pt-16 pb-14 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-green-500/5 blur-[80px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[#34D399] text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
            Private — Internal System
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
            Roots Finance
            <br />
            <span className="text-[#34D399]">Dashboard</span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
            Internal finance management system for Roots Laboratory <br />
            Replacing messy spreadsheets with a real-time dashboard for expense
            tracking, overtime management, and monthly report exports.
          </p>

          <div className="flex flex-wrap gap-8 text-sm">
            {[
              { label: "Period", value: "Dec 2025" },
              { label: "Client", value: "Roots Laboratory" },
              { label: "Role", value: "Full-Stack Developer" },
              { label: "Stack", value: "Next.js · Supabase · PostgreSQL" },
              { label: "Status", value: "Live (Internal)" },
            ].map((item) => (
              <div key={item.label}>
                <span className="block text-gray-500 uppercase tracking-wider text-xs mb-1 font-semibold">
                  {item.label}
                </span>
                <span className="text-gray-200 font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STAT STRIP */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              num: "3",
              label: "Modules",
              sub: "Pengeluaran · Lembur · Laporan",
            },
            { num: "1", label: "Access Roles", sub: "Admin" },
            { num: "6", label: "Core Features", sub: "Across all modules" },
            { num: "7 Days", label: "Time to Ship", sub: "Freelance delivery" },
          ].map((s) => (
            <div key={s.label} className="text-center py-2">
              <div className="text-3xl font-extrabold text-[#059669] mb-0.5">
                {s.num}
              </div>
              <div className="text-sm font-semibold text-gray-800">
                {s.label}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-20">
        {/* CONTEXT */}
        <section>
          <Label>Overview</Label>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Why this was built
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Roots Laboratory, a creative fabrication workshop in Bekasi, was
            managing all finances through shared spreadsheets. Data was
            scattered, prone to human error, and required manual calculation
            every month. I designed and built a dedicated internal web system
            that gives them a single source of truth: real-time expense
            visibility, automated overtime calculations, and one-click monthly
            report exports.
          </p>
        </section>

        {/* SYSTEM PREVIEW */}
        <section>
          <Label>System Preview</Label>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Module walkthrough
          </h2>

          <div className="flex gap-2 mb-6 border-b border-gray-200 pb-0">
            {screenshots.map((ss, i) => (
              <button
                key={ss.label}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-t-lg border-b-2 transition-all -mb-px ${
                  activeTab === i
                    ? "border-[#059669] text-[#059669] bg-white"
                    : "border-transparent text-gray-500 hover:text-gray-700 bg-transparent"
                }`}
              >
                {ss.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Browser bar — tanpa URL */}
            <div className="bg-[#111827] px-5 py-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <img
              src={screenshots[activeTab].src}
              alt={screenshots[activeTab].caption}
              className="w-full h-auto"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="hidden w-full h-72 bg-[#F8F9FA] items-center justify-center text-gray-400 text-sm gap-3">
              <span className="text-2xl">📊</span>
              Screenshot: {screenshots[activeTab].caption}
            </div>
            <div className="px-5 py-4 border-t border-gray-100 bg-gray-50/50">
              <p className="text-sm font-semibold text-gray-800 mb-1">
                {screenshots[activeTab].caption}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                {screenshots[activeTab].desc}
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section>
          <Label>Features</Label>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            What it does
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: "💸",
                name: "Expense Tracking",
                badge: "Pengeluaran",
                desc: "Log and categorize expenses with date, item description, requester, amount, and status. Supports pending review workflow before finalizing entries.",
              },
              {
                icon: "⏰",
                name: "Overtime Management",
                badge: "Lembur",
                desc: "Track employee overtime days and auto-calculate pay based on configured daily rates. Shared budget cards visible across all modules.",
              },
              {
                icon: "📊",
                name: "Budget Monitoring",
                badge: "Global",
                desc: "Real-time remaining budget vs. total spend. Budget (Global) is editable by admin — updates instantly reflect across Pengeluaran and Lembur views.",
              },
              {
                icon: "⏳",
                name: "Pending Review Queue",
                badge: "Approval",
                desc: "Entries submitted into a pending review queue. Admin approves or rejects, keeping financial data clean and verified.",
              },
              {
                icon: "📅",
                name: "Period-Based Filtering",
                badge: "Laporan",
                desc: "All data filtered by month-year period. Three chart views: Pengeluaran Harian, Lembur Harian, and combined Gabungan analysis.",
              },
              {
                icon: "📥",
                name: "Monthly Report Export",
                badge: "Download",
                desc: "One-click download of the full monthly financial summary — expenses, overtime, and budget — formatted for archiving or sharing with stakeholders.",
              },
            ].map((feat) => (
              <div
                key={feat.name}
                className="flex gap-4 p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-[#A7F3D0] hover:shadow-md transition-all group"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">
                  {feat.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-gray-900 text-sm font-bold">
                      {feat.name}
                    </p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] font-medium">
                      {feat.badge}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section>
          <Label>Built With</Label>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Tech stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              {
                name: "Next.js 16",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                color: "bg-[#111827] text-white border-[#374151]",
              },
              {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                color: "bg-cyan-50 text-cyan-800 border-cyan-200",
              },
              {
                name: "TailwindCSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                color: "bg-teal-50 text-teal-800 border-teal-200",
              },
              {
                name: "PostgreSQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                color: "bg-blue-50 text-blue-800 border-blue-200",
              },
              {
                name: "Supabase",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
                color: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
              },
            ].map((tech) => (
              <div
                key={tech.name}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold border shadow-sm ${tech.color}`}
              >
                <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                {tech.name}
              </div>
            ))}
          </div>
        </section>

        {/* KEY DELIVERABLES */}
        <section>
          <Label>Deliverables</Label>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Key highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Delivered within 7 Days as a freelance project",
              "Real-time data sync via Supabase PostgreSQL",
              "Secure login with role-based access control (RLS)",
              "Period-based filtering for clean monthly views",
              "Downloadable monthly financial reports (PDF/Excel)",
              "Pending review approval workflow",
              "Editable global budget visible across all modules",
              "Fully responsive (desktop & mobile)",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm text-sm text-gray-700 font-medium"
              >
                <span className="w-5 h-5 rounded-full bg-[#ECFDF5] flex-shrink-0 flex items-center justify-center">
                  <span className="text-[#059669] text-xs font-bold">✓</span>
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* REFLECTION */}
        <section>
          <Label>Reflection</Label>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            What I learned
          </h2>
          <div className="space-y-3">
            {[
              "Finance data needs precision. I learned to think carefully about number storage, aggregation, and display to avoid rounding errors or incorrect period totals.",
              "Working closely with an ongoing client (RootsLab) means understanding their existing workflow first before proposing a technical solution, not the other way around.",
              "Building downloadable report exports pushed me to handle data formatting and file generation on the server side cleanly and reliably.",
              "Supabase Auth with RLS gave me hands-on experience securing a real production app, not just UI-level guards, but database-level row security policies.",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 text-gray-700 bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
              >
                <span className="text-[#059669] font-extrabold mt-0.5 flex-shrink-0">
                  →
                </span>
                <span className="leading-relaxed text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#111827] text-gray-500 text-center py-8 text-sm mt-4">
        Built by{" "}
        <span className="text-[#34D399] font-semibold">Ryan Kalansi</span> ·
        Internal project for Roots Laboratory · 2025
      </footer>
    </div>
  );
};

const Label = ({ children }) => (
  <div className="inline-flex items-center gap-2 mb-2">
    <span className="w-1 h-4 rounded-full bg-[#059669] block" />
    <span className="text-xs tracking-widest uppercase text-[#059669] font-bold">
      {children}
    </span>
  </div>
);
