import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    const { name, email, phone, subject, message } = formData;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:chijiokeemma2003@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Contact Inquiry"
    )}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-950 focus:ring-2 focus:ring-zinc-950/10 transition-all duration-200 shadow-xs";

  return (
    <section
      id="contact"
      className="section-block bg-zinc-50/70 border-t border-zinc-200"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal animation="fade-up" distance={20}>
            <span className="text-zinc-500 font-mono text-xs tracking-[0.25em] uppercase mb-3 block font-semibold">
              &gt; GET IN TOUCH
            </span>
          </Reveal>
          <Reveal animation="fade-up" distance={20} delayMs={100}>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight mb-3">
              Let's Connect
            </h2>
          </Reveal>
          <Reveal animation="fade-up" distance={20} delayMs={180}>
            <p className="text-zinc-600 text-base leading-relaxed">
              Available for freelance engagements, full-time roles, and consultations.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (5 cols): Contact details & Direct channels */}
          <Reveal
            animation="fade-up"
            distance={20}
            delayMs={220}
            className="lg:col-span-5 flex"
          >
            <div className="w-full rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-zinc-950 mb-4">
                  Direct Channels
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: <FiMail size={18} />,
                      label: "Email Address",
                      value: "chijiokeemma2003@gmail.com",
                      href: "mailto:chijiokeemma2003@gmail.com",
                    },
                    {
                      icon: <FiMapPin size={18} />,
                      label: "Location",
                      value: "Nsukka, Enugu, Nigeria (UTC+1)",
                      href: null,
                    },
                    {
                      icon: <FaWhatsapp size={18} />,
                      label: "WhatsApp",
                      value: "+234 903 963 1182",
                      href: "https://wa.me/2349039631182",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-50 border border-zinc-100"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-950 shrink-0 shadow-xs">
                        {item.icon}
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-0.5">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-zinc-800 hover:text-zinc-950 transition-colors truncate block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-zinc-800 truncate block">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8 mt-8 border-t border-zinc-100">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                  Find me on
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/2349039631182"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 text-zinc-700 text-xs font-medium hover:text-zinc-950 hover:bg-zinc-200 transition-colors"
                  >
                    <FaWhatsapp size={15} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="https://github.com/worksoace"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 text-zinc-700 text-xs font-medium hover:text-zinc-950 hover:bg-zinc-200 transition-colors"
                  >
                    <FiGithub size={15} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/emmanuelchijioke"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 text-zinc-700 text-xs font-medium hover:text-zinc-950 hover:bg-zinc-200 transition-colors"
                  >
                    <FiLinkedin size={15} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column (7 cols): Message Form */}
          <Reveal
            animation="fade-up"
            distance={20}
            delayMs={280}
            className="lg:col-span-7 flex"
          >
            <div className="w-full rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-950 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-zinc-500 mb-6">
                Fill in the details below to generate a pre-filled email inquiry.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">
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
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder="Project Inquiry / Job Opportunity"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={inputClass}
                    placeholder="Tell me about your project, timeline, and requirements..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-950 text-white font-semibold text-sm py-3.5 px-6 rounded-xl hover:bg-black transition-all duration-200 shadow-md shadow-zinc-950/15 transform hover:-translate-y-0.5"
                >
                  <FiSend size={16} />
                  <span>Send Message</span>
                </button>

                <p className="text-[11px] font-mono text-zinc-400 text-center pt-1">
                  Clicking will open your default email client with your message pre-formatted.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
