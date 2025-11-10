import { Droplets, Gauge, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Droplets,
    title: 'Cuci AC Rutin',
    desc: 'Pembersihan unit indoor & outdoor, cek freon, dan uji kebocoran.',
    price: 'Rp150.000 - 200.000'
  },
  {
    icon: Gauge,
    title: 'Tambah / Isi Freon',
    desc: 'Pengisian freon R32/R410 sesuai standar pabrikan.',
    price: 'Mulai Rp200.000'
  },
  {
    icon: ShieldCheck,
    title: 'Service Berkala',
    desc: 'Pengecekan menyeluruh, pengencangan baut, dan perawatan preventif.',
    price: 'Mulai Rp180.000'
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    desc: 'Bongkar total, semprot tekanan tinggi, dan desinfeksi evaporator.',
    price: 'Mulai Rp300.000'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Layanan Kami</h2>
          <p className="mt-3 text-slate-600">Pilih layanan sesuai kebutuhan AC Anda.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md transition"
            >
              <div className="w-11 h-11 rounded-lg bg-sky-100 text-sky-600 grid place-items-center mb-4">
                <s.icon size={22} />
              </div>
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <p className="mt-4 text-sky-700 font-medium">{s.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
