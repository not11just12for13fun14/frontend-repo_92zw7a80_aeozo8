import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Gauge, Droplets } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Cuci AC Split',
    desc: 'Pembersihan indoor & outdoor unit, blower, filter, dan saluran pembuangan.',
    price: 'Mulai 120K'
  },
  {
    icon: Gauge,
    title: 'Cek Freon & Tekanan',
    desc: 'Pengecekan kebocoran, tekanan freon, dan performa pendinginan optimal.',
    price: 'Mulai 60K'
  },
  {
    icon: ShieldCheck,
    title: 'Antibacterial Treatment',
    desc: 'Sanitasi evaporator untuk membunuh bakteri & jamur penyebab bau.',
    price: 'Mulai 80K'
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    desc: 'Pembongkaran menyeluruh untuk unit yang sangat kotor atau lama tidak dirawat.',
    price: 'Mulai 250K'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Layanan Kami</h2>
          <p className="mt-3 text-slate-600">Pilih paket yang sesuai dengan kebutuhan AC Anda</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 inline-flex rounded-xl bg-sky-50 p-3 text-sky-600 group-hover:bg-sky-100">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <div className="mt-4 font-semibold text-sky-700">{s.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
