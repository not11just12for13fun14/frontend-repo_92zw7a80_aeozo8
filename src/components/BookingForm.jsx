import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', service: '', date: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // Simulate submit
    setTimeout(() => setSent(true), 600);
  };

  return (
    <section id="booking" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Booking Layanan</h2>
            <p className="mt-3 text-slate-600">Isi data di bawah ini, kami akan menghubungi Anda untuk konfirmasi.</p>
            <ul className="mt-6 space-y-2 text-slate-600 text-sm list-disc list-inside">
              <li>Waktu pengerjaan fleksibel sesuai jadwal Anda</li>
              <li>Peralatan lengkap dan bahan ramah lingkungan</li>
              <li>Pembayaran tunai atau transfer</li>
            </ul>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nama</label>
                <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:ring-sky-500 focus:border-sky-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">No. HP</label>
                <input name="phone" value={form.phone} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:ring-sky-500 focus:border-sky-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Alamat</label>
                <input name="address" value={form.address} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:ring-sky-500 focus:border-sky-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Layanan</label>
                <select name="service" value={form.service} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:ring-sky-500 focus:border-sky-500">
                  <option value="">Pilih layanan</option>
                  <option value="Cuci AC">Cuci AC</option>
                  <option value="Isi Freon">Isi Freon</option>
                  <option value="Service Berkala">Service Berkala</option>
                  <option value="Deep Cleaning">Deep Cleaning</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Tanggal</label>
                <input type="date" name="date" value={form.date} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:ring-sky-500 focus:border-sky-500" />
              </div>
            </div>

            <button type="submit" className="mt-6 w-full px-5 py-3 rounded-md bg-sky-600 text-white hover:bg-sky-700 transition">
              {sent ? 'Terkirim! Kami akan menghubungi Anda' : 'Kirim Pemesanan'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
