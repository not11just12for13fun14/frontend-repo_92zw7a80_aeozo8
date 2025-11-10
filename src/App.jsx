import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import BookingForm from './components/BookingForm';

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} FreshCool Cleaning. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#services" className="hover:text-sky-600">Layanan</a>
          <a href="#benefits" className="hover:text-sky-600">Keunggulan</a>
          <a href="#booking" className="hover:text-sky-600">Booking</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-inter text-slate-800">
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <BookingForm />
      <Footer />
    </div>
  );
}
