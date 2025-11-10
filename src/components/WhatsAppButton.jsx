import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({ phone = '+6281234567890' }) {
  const msg = encodeURIComponent('Halo, saya ingin booking layanan cleaning AC.');
  const waLink = `https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${msg}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full shadow-lg bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-300 transition"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}
