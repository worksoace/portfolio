import Reveal from "./Reveal";

export default function About() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "80%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="section-block bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal animation="fade-up" distance={30}>
          <span className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-3 block">
            &gt; about
          </span>
        </Reveal>
        <Reveal animation="fade-up" distance={30} delayMs={100}>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            Passionate Developer & Designer
          </h2>
        </Reveal>

        <Reveal animation="fade-up" distance={30} delayMs={180}>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-12">
            I'm a full-stack developer and UI/UX designer with over 3 years of
            experience creating digital experiences that combine beautiful design
            with robust functionality. My journey began with graphic design,
            giving me a strong foundation in visual communication and
            user-centered principles.
          </p>
        </Reveal>

        {/* Stats */}
        <Reveal animation="fade-up" distance={30} delayMs={260}>
          <div className="grid grid-cols-3 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-brand mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Cards */}
        <Reveal animation="fade-up" distance={30} delayMs={340}>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                Development
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                React, TypeScript, and modern web tech. Scalable apps with a
                focus on performance and accessibility.
              </p>
            </div>
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                Design
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                UI/UX design that's intuitive and invisible — it just works
                seamlessly for the user.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
