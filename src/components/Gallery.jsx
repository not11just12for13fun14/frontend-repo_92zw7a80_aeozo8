import { motion } from 'framer-motion';

const images = [
  { before: 'https://images.unsplash.com/photo-1581093458791-9d09f44a3d1b?q=80&w=1200&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop', title: 'Unit Split 1 PK' },
  { before: 'https://images.unsplash.com/photo-1627389956430-e5e7a1a2b775?q=80&w=1200&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1594969157016-7f3b14f6d88e?q=80&w=1200&auto=format&fit=crop', title: 'Evaporator Bersih' },
  { before: 'https://images.unsplash.com/photo-1595278069441-73ed7e3a7cc2?q=80&w=1200&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1581091870622-1e59c779843f?q=80&w=1200&auto=format&fit=crop', title: 'Outdoor Unit' },
];

function BeforeAfter({ before, after, title }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="aspect-video grid grid-cols-2">
        <img src={before} alt={`${title} sebelum`} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition" />
        <img src={after} alt={`${title} sesudah`} className="object-cover w-full h-full" />
      </div>
      <div className="p-4 flex items-center justify-between">
        <p className="font-medium text-slate-800">{title}</p>
        <span className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Before → After</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Galeri Sebelum & Sesudah</h2>
          <p className="mt-3 text-slate-600">Hasil nyata setelah pembersihan menyeluruh.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <BeforeAfter {...img} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
