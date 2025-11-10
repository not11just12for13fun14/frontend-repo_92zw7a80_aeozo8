import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Replace with your Spline scene URL if desired */}
        <Spline scene="https://prod.spline.design/6m8k8fWf6gypZJ9I/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="py-24 md:py-36">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900"
          >
            Layanan Cleaning AC Profesional
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600"
          >
            Udara lebih bersih, AC lebih dingin, tagihan listrik lebih hemat. Tim teknisi bersertifikat siap ke lokasi Anda.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#booking" className="px-6 py-3 rounded-md bg-sky-600 text-white hover:bg-sky-700 transition">Pesan Sekarang</a>
            <a href="#services" className="px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 transition">Lihat Layanan</a>
          </motion.div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
