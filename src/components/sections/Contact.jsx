import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          {/* Header — consistent with other sections */}
          <div className="text-center mb-10">
            <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-2">
              Contact
            </p>
            <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
            <p className="text-gray-500 text-sm mt-3">
              Have a project in mind? Let's talk.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-white py-3 px-6 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]"
            >
              Send Message
            </button>
          </form>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-8 justify-center">
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-gray-600 text-xs">or reach me via</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <a
              href="mailto:kalansiryan@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-gray-400 hover:border-emerald-500/30 hover:text-emerald-400 text-sm transition-all"
            >
              ✉️ kalansiryan@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-kalansi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-gray-400 hover:border-blue-500/30 hover:text-blue-400 text-sm transition-all"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/ryankalansi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-gray-400 hover:border-white/30 text-sm transition-all"
            >
              🐙 GitHub
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
