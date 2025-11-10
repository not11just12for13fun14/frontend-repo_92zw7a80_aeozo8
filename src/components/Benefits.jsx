import { motion } from 'framer-motion';
import { Shield, Clock, Award, CheckCircle2 } from 'lucide-react';

const items = [
  { icon: Shield, title: 'Garansi 14 Hari', desc: 'Jika ada kendala setelah servis, kami kembali tanpa biaya.' },
  { icon: Clock, title: 'Cepat & Tepat Waktu', desc: 'Teknisi datang sesuai jadwal, pengerjaan rapi dan efisien.' },
  { icon: Award, title: 'Teknisi Bersertifikat', desc: 'Berpengalaman menangani berbagai merek AC.' },
  { icon: CheckCircle2, title: 'Transparan', desc: 'Harga jelas di awal tanpa biaya tersembunyi.' },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Kenapa Pilih Kami</h2>
          <p className="mt-3 text-slate-600">Keunggulan layanan yang membuat Anda tenang</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <it.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
                <p className="mt-1 text-slate-600">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
