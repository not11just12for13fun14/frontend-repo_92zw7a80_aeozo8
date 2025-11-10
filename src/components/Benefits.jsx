import { Shield, Clock, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  { icon: Shield, title: 'Garansi Pekerjaan', desc: 'Garansi 14 hari untuk ketenangan Anda.' },
  { icon: Clock, title: 'Tepat Waktu', desc: 'Teknisi hadir sesuai jadwal yang disepakati.' },
  { icon: Award, title: 'Teknisi Bersertifikat', desc: 'Berpengalaman dan tersertifikasi resmi.' },
  { icon: CheckCircle2, title: 'Harga Transparan', desc: 'Biaya jelas tanpa biaya tersembunyi.' },
];

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Kenapa Memilih Kami</h2>
          <p className="mt-3 text-slate-600">Kami fokus pada kualitas layanan dan kepuasan pelanggan.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-slate-200 p-6 bg-white hover:shadow-md transition"
            >
              <div className="w-11 h-11 rounded-lg bg-emerald-100 text-emerald-600 grid place-items-center mb-4">
                <b.icon size={22} />
              </div>
              <h3 className="font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
