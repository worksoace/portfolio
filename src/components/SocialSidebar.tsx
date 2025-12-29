import { FiGithub, FiLinkedin} from "react-icons/fi";

export default function SocialSidebar() {
  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      href: "https://github.com/worksoace",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin size={20} />,
      href: "https://www.linkedin.com/in/emmanuelchijioke",
      label: "LinkedIn",
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="w-12 h-12 bg-white/80 dark:bg-zinc-800/80 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-brand hover:bg-brand/10 transition-all duration-300 border border-zinc-200 dark:border-zinc-700 shadow-lg hover:shadow-xl"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
