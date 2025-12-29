import Reveal from "./Reveal";
import ScrollArrows from "./ScrollArrows";

export default function About() {
  return (
    <section id="about" className="fullscreen-section">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <Reveal animation="fade-right" distance={50}>
            <div className="space-y-8">
              <div>
                <span className="text-blue-600 text-2xl font-bold p-6 flex justify-center tracking-wider">
                  ABOUT
                </span>
                <h2 className="text-5xl font-bold text-zinc-900 dark:text-white mt-2 mb-6">
                  Passionate Developer & Designer
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  I'm a passionate full-stack developer and UI/UX designer with
                  over 3 years of experience creating digital experiences that
                  combine beautiful design with robust functionality. My journey
                  began with graphic design, which gave me a strong foundation
                  in visual communication and user-centered design principles.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/80 dark:bg-zinc-800/80 rounded-xl p-6 border border-zinc-200 dark:border-zinc-700">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                    Development
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    I specialize in React, TypeScript, and modern web
                    technologies. I build scalable, maintainable applications
                    with a focus on performance, accessibility, and user
                    experience.
                  </p>
                </div>
                <div className="bg-white/80 dark:bg-zinc-800/80 rounded-xl p-6 border border-zinc-200 dark:border-zinc-700">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                    Design
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    With expertise in UI/UX design, I create intuitive
                    interfaces that users love. I believe great design is
                    invisible—it just works seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right side - Visual elements */}
          <Reveal animation="fade-left" distance={50}>
            <div className="relative">
              <div className="bg-white/80 dark:bg-zinc-800/80 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-700 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12  rounded-xl flex items-center justify-center">
                      <span className="text-brand font-bold text-lg">5+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white">
                        Years Experience
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        Frontend development
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12  rounded-xl flex items-center justify-center">
                      <span className="text-brand font-bold text-lg">50+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white">
                        Projects Completed
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        Web applications & designs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12  rounded-xl flex items-center justify-center">
                      <span className="text-brand font-bold text-lg">80%</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white">
                        Client Satisfaction
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        Delivering excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand/5 rounded-full blur-2xl"></div>
            </div>
          </Reveal>
        </div>
      </div>
      <ScrollArrows prevId="home" nextId="experience"></ScrollArrows>
    </section>
  );
}
