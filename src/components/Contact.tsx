import { FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { SiX } from "react-icons/si";
import ScrollArrows from "./ScrollArrows";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="fullscreen-section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl p-6 sm:p-8 bg-zinc-900 text-white relative overflow-hidden">
            <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-brand/30 blur-2xl"></div>
            <Reveal>
              <h3 className="text-3xl font-bold">Let’s Work Together!</h3>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="mt-2 text-zinc-300">
                Tell me about your project and how I can help.
              </p>
            </Reveal>
            <Reveal delayMs={120}>
              <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                <li>✉️ chijiokeemma2003@gmail.com</li>
                <li>📍 Remote / Nigeria</li>
              </ul>
            </Reveal>
            <div className="mt-6 flex gap-5 text-2xl text-zinc-300">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-brand"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-brand"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="hover:text-brand"
              >
                <SiX />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-brand"
              >
                <FiInstagram />
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 sm:p-8">
            <Reveal>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                Contact
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  className="col-span-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand"
                  placeholder="Your Name"
                ></input>
                <input
                  className="col-span-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand"
                  placeholder="Your Email"
                ></input>
                <input
                  className="col-span-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand"
                  placeholder="Phone Number"
                ></input>
                <input
                  className="col-span-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand"
                  placeholder="Subject"
                ></input>
                <textarea
                  className="col-span-1 sm:col-span-2 min-h-28 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand"
                  placeholder="Tell me about your project"
                ></textarea>
                <div className="col-span-1 sm:col-span-2 flex items-center gap-3">
                  <button type="button" className="btn-primary">
                    Send Message
                  </button>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    Get in touch!
                  </span>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
      <ScrollArrows prevId="skills" />
    </section>
  );
}
