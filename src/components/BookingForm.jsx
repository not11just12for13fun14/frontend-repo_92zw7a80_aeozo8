import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', service: 'Cuci AC Split', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Booking Layanan</h2>
          <p className="mt-3 text-slate-600">Isi data singkat, kami akan menghubungi Anda secepatnya</p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid max-w-3xl gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">Nama</label>
              <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">No. Telepon</label>
              <input name="phone" value={form.phone} onChange={onChange} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Alamat</label>
            <input name="address" value={form.address} onChange={onChange} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">Layanan</label>
              <select name="service" value={form.service} onChange={onChange} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none">
                <option>Cuci AC Split</option>
                <option>Cek Freon & Tekanan</option>
                <option>Antibacterial Treatment</option>
                <option>Deep Cleaning</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Tanggal</label>
              <input type="date" name="date" value={form.date} onChange={onChange} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none" />
            </div>
          </div>

          <button type="submit" className="mt-2 rounded-full bg-sky-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-sky-700">Kirim</button>

          {submitted && (
            <p className="text-emerald-600">Terima kasih! Kami akan menghubungi Anda via WhatsApp/Telepon.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
