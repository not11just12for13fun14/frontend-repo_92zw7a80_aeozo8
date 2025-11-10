import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8qyZ5fQkzQ6k4i4v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-24 md:pt-36 md:pb-40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white"></div>
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Jasa Cleaning AC Profesional
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-slate-600"
          >
            Bersihkan AC Anda agar tetap dingin, hemat listrik, dan sehat. Teknisi bersertifikat, garansi pengerjaan, dan jadwal fleksibel.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#booking" className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-sky-700">
              Pesan Sekarang
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-slate-700 shadow ring-1 ring-slate-200 hover:bg-slate-50">
              Lihat Layanan
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
