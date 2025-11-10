import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="font-inter text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Gallery />
        <Testimonials />
        <BookingForm />
      </main>

      <footer id="contact" className="border-t border-slate-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <span className="inline-block w-8 h-8 rounded bg-sky-500"></span>
              CoolClean AC
            </div>
            <p className="mt-3 text-sm text-slate-600">Bersihkan AC Anda secara berkala untuk udara yang lebih sehat dan hemat energi.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Kontak</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Tel: +62 812-3456-7890</li>
              <li>Email: hello@coolclean.id</li>
              <li>Jakarta & Sekitarnya</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Jam Operasional</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Senin - Sabtu: 08.00 - 20.00</li>
              <li>Minggu & Tanggal Merah: By Appointment</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} CoolClean AC. All rights reserved.</div>
      </footer>

      <WhatsAppButton phone={'+62 812-3456-7890'} />
    </div>
  );
}
