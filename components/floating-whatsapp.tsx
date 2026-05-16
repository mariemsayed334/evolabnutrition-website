'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/1234567890?text=Hi%20evolabnutrition%2C%20I%20have%20a%20question%20about%20your%20supplements"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-secondary text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
