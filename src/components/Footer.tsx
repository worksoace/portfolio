export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-zinc-100 dark:border-zinc-900 py-8 px-4">
      <div className="mx-auto max-w-2xl px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs font-mono text-zinc-400 dark:text-zinc-600">
          © {year} Emmanuel Chijioke
        </p>
        <p className="text-xs font-mono text-zinc-400 dark:text-zinc-600">
          Built with React + TypeScript
        </p>
      </div>
    </footer>
  );
}
