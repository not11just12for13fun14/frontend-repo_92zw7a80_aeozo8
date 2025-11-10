import { useEffect, useState } from 'react';
import { PhoneCall, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-block w-8 h-8 rounded bg-sky-500"></span>
            CoolClean AC
          </a>

          <div className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#services" className="hover:text-slate-900">Layanan</a>
            <a href="#booking" className="hover:text-slate-900">Booking</a>
            <a href="#contact" className="hover:text-slate-900">Kontak</a>
          </div>

          <div className="hidden md:block">
            <a
              href="tel:+6281234567890"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 transition"
            >
              <PhoneCall size={18} /> Hubungi Kami
            </a>
          </div>

          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 text-slate-700"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#services" className="block px-3 py-2 rounded hover:bg-slate-100">Layanan</a>
            <a href="#booking" className="block px-3 py-2 rounded hover:bg-slate-100">Booking</a>
            <a href="#contact" className="block px-3 py-2 rounded hover:bg-slate-100">Kontak</a>
            <a href="tel:+6281234567890" className="block px-3 py-2 rounded bg-sky-600 text-white text-center">Call Now</a>
          </div>
        )}
      </nav>
    </header>
  );
}
