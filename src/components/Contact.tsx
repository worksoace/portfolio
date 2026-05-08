import { FiMail, FiMapPin } from "react-icons/fi";
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
      subject || "Portfolio Contact"
    )}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-colors";

  return (
    <section
      id="contact"
      className="section-block bg-zinc-50 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <Reveal animation="fade-up" distance={30}>
            <span className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-3 block">
              &gt; contact
            </span>
          </Reveal>
          <Reveal animation="fade-up" distance={30} delayMs={100}>
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
              Let's Work Together
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <Reveal animation="fade-right" distance={40} delayMs={150}>
            <div className="space-y-8">
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                I'm always open to new challenges and ideas. Whether you need a
                full-stack app, UI/UX design, or just want to chat — reach out.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: <FiMail size={18} />,
                    label: "Email",
                    value: "chijiokeemma2003@gmail.com",
                    href: "mailto:chijiokeemma2003@gmail.com",
                  },
                  {
                    icon: <FiMapPin size={18} />,
                    label: "Location",
                    value: "Remote / Nigeria",
                    href: null,
                  },
                  {
                    icon: <FaWhatsapp size={18} />,
                    label: "WhatsApp",
                    value: "Chat on WhatsApp",
                    href: "https://wa.me/qr/XOH4QOTOC7R7O1....",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-brand">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 dark:text-zinc-500 mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-brand transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal animation="fade-left" distance={40} delayMs={200}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={inputClass}
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={inputClass}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={inputClass}
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={inputClass}
                  placeholder="Subject"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className={inputClass}
                placeholder="Tell me about your project..."
                required
              />
              <button
                type="submit"
                className="w-full bg-brand text-zinc-900 font-semibold text-sm py-3 px-6 rounded-lg hover:bg-brand-dark transition-colors"
              >
                Send Message
              </button>
              <p className="text-xs text-zinc-400 dark:text-zinc-600 text-center">
                Opens your email client with the message pre-filled
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
