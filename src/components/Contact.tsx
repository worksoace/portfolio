import { FiMail, FiMapPin } from "react-icons/fi";
import ScrollArrows from "./ScrollArrows";
import Reveal from "./Reveal";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:chijiokeemma2003@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Contact"
    )}&body=${body}`;
  };

  return (
    <section id="contact" className="fullscreen-section">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-16">
          <Reveal animation="fade-up" distance={30}>
            <span className="text-blue-600 text-2xl font-bold uppercase tracking-wider">
              CONTACT
            </span>
          </Reveal>
          <Reveal animation="fade-up" distance={30} delayMs={100}>
            <h2 className="text-5xl font-bold text-zinc-900 dark:text-white mt-2 mb-6">
              Let's Work Together
            </h2>
          </Reveal>
          <Reveal animation="fade-up" distance={30} delayMs={200}>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and
              create something amazing together.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Reveal animation="fade-right" distance={50}>
              <div className="bg-white/80 dark:bg-zinc-800/80 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700 shadow-xl">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                  I'm always excited to take on new challenges and help bring
                  innovative ideas to life. Whether you need a full-stack
                  application, UI/UX design, or consultation, I'm here to help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center">
                      <FiMail className="text-brand" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white">
                        Email
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        <a
                          href="mailto:chijiokeemma2003@gmail.com"
                          className="hover:underline"
                        >
                          chijiokeemma2003@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center">
                      <FiMapPin className="text-brand" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white">
                        Location
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        Remote / Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center">
                      <FaWhatsapp className="text-brand" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white">
                        WhatsApp
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        <a
                          href="https://wa.me/qr/XOH4QOTOC7R7O1...."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Chat on WhatsApp
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal animation="fade-left" distance={50}>
            <div className="bg-white/80 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200 dark:border-zinc-700 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors"
                    placeholder="Phone Number"
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors"
                    placeholder="Subject"
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors resize-none"
                  placeholder="Tell me about your project, goals, and how I can help..."
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-brand text-white py-4 px-6 rounded-xl font-semibold hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-colors"
                >
                  Send Message
                </button>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
                  This will open your email client with the message pre-filled
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
      <ScrollArrows prevId="skills" />
    </section>
  );
}
