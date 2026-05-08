import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function SocialSidebar() {
  const socialLinks = [
    {
      icon: <FiGithub size={18} />,
      href: "https://github.com/worksoace",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin size={18} />,
      href: "https://www.linkedin.com/in/emmanuelchijioke",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand hover:border-brand/50 transition-colors"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
