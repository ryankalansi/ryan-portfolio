import { useEffect } from "react";

export const TrujivaShowcase = ({ onClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* NAV */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex items-center justify-between z-50">
        <a href="/" className="font-bold text-lg text-gray-900 tracking-tight">
          Ryan<span className="text-emerald-600">.Kalansi</span>
        </a>
        <button
          onClick={onClose ?? (() => window.history.back())}
          className="text-sm text-gray-500 hover:text-emerald-600 flex items-center gap-2 transition-colors font-medium"
        >
          ← Back to Projects
        </button>
      </nav>

      {/* HERO */}
      <div className="bg-gray-900 text-white pt-20 pb-16 px-6 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Private — Internal System
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Trujiva
            <br />
            <span className="text-emerald-500">Business Management</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
            A full-scale internal ERP-style web system built for Trujiva, a
            product distribution business under Rumah Perubahan, covering 7
            operational modules from executive dashboard to partner management.
          </p>

          <div className="flex flex-wrap gap-8 text-sm">
            {[
              { label: "Period", value: "Jan – Feb 2026" },
              { label: "Client", value: "Trujiva – Rumah Perubahan" },
              { label: "Role", value: "Full-Stack Developer" },
              { label: "Status", value: "Live (Internal)" },
            ].map((item) => (
              <div key={item.label}>
                <span className="block text-gray-500 uppercase tracking-wider text-xs mb-1 font-semibold">
                  {item.label}
                </span>
                <span className="text-gray-200">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* OVERVIEW */}
        <section>
          <div className="text-xs tracking-widest uppercase text-emerald-600 font-semibold mb-2">
            Overview
          </div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Project at a glance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { num: "7", label: "Operational modules" },
              { num: "5", label: "Partner tiers managed" },
              { num: "1", label: "Month to deliver" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm"
              >
                <div className="text-4xl font-extrabold text-emerald-600 mb-2">
                  {stat.num}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed text-base">
            Trujiva needed a centralized system to manage their product
            distribution operations, tracking inventory, partners, orders, and
            cash flow all in one place. I designed and built the entire system
            from scratch, including role-based login, period-based reporting,
            and a master Excel export for monthly review.
          </p>
        </section>

        {/* MODULES */}
        <section>
          <div className="text-xs tracking-widest uppercase text-emerald-600 font-semibold mb-2">
            Modules
          </div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            System modules
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: "📊",
                name: "Executive Dashboard",
                desc: "Real-time KPIs — total orders, revenue, stock status, and top-performing partners in one view.",
              },
              {
                icon: "📦",
                name: "Product & Stock Management",
                desc: "Full CRUD for product catalog with stock quantity tracking and low-stock indicators.",
              },
              {
                icon: "🤝",
                name: "Partner (Mitra) Database",
                desc: "Multi-tier partner classification with searchable database and contact management.",
              },
              {
                icon: "🧾",
                name: "Order Input & Processing",
                desc: "Order entry with product selection, quantity, and partner linking — synced to cash flow automatically.",
              },
              {
                icon: "💰",
                name: "Cash Flow Tracking",
                desc: "Income and expense records with period-based filtering and visual balance overview.",
              },
              {
                icon: "📈",
                name: "Sales Performance",
                desc: "Monthly sales charts and exportable performance reports per product and partner.",
              },
              {
                icon: "🧪",
                name: "Sample Expense Management",
                desc: "Track sample distribution costs separately for accurate and clean monthly reporting.",
              },
            ].map((mod) => (
              <div
                key={mod.name}
                className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-emerald-300 transition-all"
              >
                <span className="text-2xl flex-shrink-0">{mod.icon}</span>
                <div>
                  <p className="text-gray-900 text-sm font-semibold mb-1">
                    {mod.name}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section>
          <div className="text-xs tracking-widest uppercase text-emerald-600 font-semibold mb-2">
            Built with
          </div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Tech stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              {
                name: "Next.js 16",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
              },
              {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "TailwindCSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
              },
              {
                name: "PostgreSQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
              },
              {
                name: "Supabase",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
              },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium shadow-sm"
              >
                <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                {tech.name}
              </div>
            ))}
          </div>
        </section>

        {/* SCREENSHOTS */}
        <section>
          <div className="text-xs tracking-widest uppercase text-emerald-600 font-semibold mb-2">
            Screenshots
          </div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            System preview
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {[
              {
                src: "/showcases/trujiva/executive-dashboard.png",
                caption: "Executive Dashboard",
              },
              {
                src: "/showcases/trujiva/manajemen-produk.png",
                caption: "Manajemen Produk",
              },
              {
                src: "/showcases/trujiva/arus-kas.png",
                caption: "Arus Kas & Stok Gabungan",
              },
              {
                src: "/showcases/trujiva/performa.png",
                caption: "Performa Jualan Mitra",
              },
            ].map((ss) => (
              <div
                key={ss.caption}
                className="rounded-xl overflow-hidden border border-gray-200 shadow-md"
              >
                <img src={ss.src} alt={ss.caption} className="w-full h-auto" />
                <div className="bg-white p-3 text-center text-sm font-semibold text-gray-700 border-t border-gray-200">
                  {ss.caption}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 text-center mt-4">
            * Some data has been anonymized to protect client confidentiality.
          </p>
        </section>

        {/* KEY HIGHLIGHTS */}
        <section>
          <div className="text-xs tracking-widest uppercase text-emerald-600 font-semibold mb-2">
            Highlights
          </div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Key deliverables
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Built and deployed solo in under 6 weeks",
              "Period-based reporting with Excel export",
              "Role-based access control",
              "Real-time data via Supabase PostgreSQL",
              "7 modules in one unified system",
              "Fully responsive (mobile & desktop)",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm text-sm text-gray-700"
              >
                <span className="text-emerald-500 font-bold text-base">✓</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* REFLECTION */}
        <section>
          <div className="text-xs tracking-widest uppercase text-emerald-600 font-semibold mb-2">
            Reflection
          </div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            What I learned
          </h2>
          <ul className="space-y-4">
            {[
              "Building a multi-module system requires careful state and data architecture upfront. I learned to plan database schema and component structure before writing a single line of UI code.",
              "Clients have evolving requirements. I practiced handling mid-project scope changes while keeping delivery on schedule.",
              "Supabase Row Level Security (RLS) taught me how to implement proper role-based access control at the database level, not just the UI.",
              "Period-based filtering and Excel export required me to think about data aggregation and formatting beyond just displaying records.",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex gap-4 text-gray-700 bg-white p-5 rounded-xl border border-gray-100 shadow-sm"
              >
                <span className="text-emerald-500 font-bold mt-0.5">→</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-500 text-center py-8 text-sm mt-12">
        Built by <span className="text-emerald-500">Ryan Kalansi</span> ·
        Internal project for Rumah Perubahan · 2026
      </footer>
    </div>
  );
};
