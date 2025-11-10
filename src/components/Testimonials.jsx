import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Rina P.',
    role: 'Ibu Rumah Tangga',
    text: 'AC jadi dingin lagi dan baunya hilang. Prosesnya rapi, teknisi sopan, recommended!',
    rating: 5,
  },
  {
    name: 'Andi K.',
    role: 'Pemilik Kafe',
    text: 'Booking mudah, datang tepat waktu. Penjelasan detail dan harga transparan.',
    rating: 5,
  },
  {
    name: 'Dewi S.',
    role: 'Apartemen',
    text: 'Deep cleaning bikin unit seperti baru. Pasti repeat order tiap 3 bulan.',
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1 text-amber-500">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Apa Kata Pelanggan</h2>
          <p className="mt-3 text-slate-600">Testimoni asli dari pelanggan kami.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm"
            >
              <Stars count={t.rating} />
              <p className="mt-4 text-slate-700">“{t.text}”</p>
              <div className="mt-5">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
