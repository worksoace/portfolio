export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 fixed bottom-0 left-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-4 flex justify-center">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
          © {year} Emmanuel Chijioke. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
