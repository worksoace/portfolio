import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:chijiokeemma2003@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Contact Inquiry"
    )}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-950 focus:ring-2 focus:ring-zinc-950/10 transition-all duration-200 shadow-2xs";

  return (
    <section
      id="contact"
      className="section-block bg-zinc-50/70 border-t border-zinc-200 scroll-mt-20 pt-16 sm:pt-20 lg:pt-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <Reveal animation="fade-up" distance={20}>
            <span className="text-zinc-500 font-mono text-xs tracking-[0.25em] uppercase mb-1.5 sm:mb-2 block font-semibold">
              &gt; GET IN TOUCH
            </span>
          </Reveal>
          <Reveal animation="fade-up" distance={20} delayMs={80}>
            <h2 className="text-2xl sm:text-4xl font-bold text-zinc-950 tracking-tight mb-2">
              Let's Connect
            </h2>
          </Reveal>
          <Reveal animation="fade-up" distance={20} delayMs={140}>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              Available for freelance engagements, full-time roles, and consultations.
            </p>
          </Reveal>
        </div>

        {/* Focused Clean Form */}
        <Reveal animation="fade-up" distance={20} delayMs={180}>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-8 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="e.g. john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={inputClass}
                  placeholder="Project Inquiry / Role Opportunity"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={inputClass}
                  placeholder="Tell me about your project, timeline, or requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-zinc-950 text-white font-semibold text-xs sm:text-sm py-3 sm:py-3.5 px-6 rounded-xl hover:bg-black transition-all duration-150 shadow-md shadow-zinc-950/15 transform hover:-translate-y-0.5 active:scale-95"
              >
                <FiSend size={15} />
                <span>Send Message</span>
              </button>

              <p className="text-[11px] font-mono text-zinc-400 text-center pt-0.5">
                Opens your default email client with your message pre-formatted.
              </p>
            </form>
          </div>
        </Reveal>

        {/* Simple & Clean Bottom Bar: Direct Channels & Socials */}
        <Reveal animation="fade-up" distance={20} delayMs={240}>
          <div className="mt-8 pt-6 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            {/* Direct Channels */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-zinc-600 font-mono text-[11px] sm:text-xs">
              <a
                href="mailto:chijiokeemma2003@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-zinc-950 transition-colors"
              >
                <FiMail size={13} className="text-zinc-950" />
                <span>chijiokeemma2003@gmail.com</span>
              </a>
              <a
                href="https://wa.me/2349039631182"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-zinc-950 transition-colors"
              >
                <FaWhatsapp size={13} className="text-zinc-950" />
                <span>+234 903 963 1182</span>
              </a>
              <span className="inline-flex items-center gap-1.5 text-zinc-500">
                <FiMapPin size={13} className="text-zinc-950" />
                <span>Nsukka, Enugu (UTC+1)</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/2349039631182"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="w-8 h-8 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-950 transition-all shadow-2xs active:scale-95"
              >
                <FaWhatsapp size={15} />
              </a>
              <a
                href="https://github.com/worksoace"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="w-8 h-8 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-950 transition-all shadow-2xs active:scale-95"
              >
                <FiGithub size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuelchijioke"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-8 h-8 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-950 transition-all shadow-2xs active:scale-95"
              >
                <FiLinkedin size={15} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
