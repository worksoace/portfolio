import Reveal from "./Reveal";
import ScrollArrows from "./ScrollArrows";

export default function About() {
  return (
    <section id="about" className="fullscreen-section">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            About
          </h2>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="mt-4 max-w-3xl text-zinc-700 dark:text-zinc-300">
            I am a passionate frontend developer and graphic designer, dedicated
            to crafting accessible, performant, and visually engaging user
            interfaces with React and TypeScript. With a strong background in
            both web development and graphic design, I bring a unique blend of
            creativity and technical expertise to every project. My experience
            spans building responsive web applications, designing brand
            identities, and creating compelling visual content. I thrive on
            transforming ideas into beautiful, functional digital experiences,
            and I am always eager to learn new technologies and design trends to
            deliver the best results for users and clients alike.
          </p>
        </Reveal>
      </div>
      <ScrollArrows prevId="home" nextId="experience"></ScrollArrows>
    </section>
  );
}
