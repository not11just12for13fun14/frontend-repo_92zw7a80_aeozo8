import { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Layanan', href: '#services' },
    { label: 'Keunggulan', href: '#benefits' },
    { label: 'Booking', href: '#booking' },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-sky-500 bg-gradient-to-br from-sky-500 to-cyan-400 text-white grid place-items-center font-bold">
            AC
          </div>
          <span className="font-semibold tracking-tight">FreshCool Cleaning</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors">
              {item.label}
            </a>
          ))}
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition-colors"
          >
            <PhoneCall className="h-4 w-4" /> Pesan Sekarang
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-lg p-2 hover:bg-slate-100"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-slate-800 transition ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-slate-800 transition ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-slate-800 transition ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="block text-center rounded-lg bg-sky-600 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-700"
            >
              <PhoneCall className="mr-1 inline h-4 w-4" /> Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
