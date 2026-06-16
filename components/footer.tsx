'use client';

import Link from 'next/link';
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About evolabnutrition</h3>
            <p className="text-sm opacity-90">
              Premium supplements for optimal health and fitness performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="hover:opacity-80 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80 transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/category/protein"
                  className="hover:opacity-80 transition"
                >
                  Proteins
                </Link>
              </li>
              <li>
                <Link
                  href="/category/amino-acids"
                  className="hover:opacity-80 transition"
                >
                  Amino Acids
                </Link>
              </li>
              <li>
                <Link
                  href="/category/energy-fat-burn"
                  className="hover:opacity-80 transition"
                >
                  Energy
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+9647702359478" className="hover:opacity-80 transition">
                 009647702359478
                </a>
              </li>
              
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>8A Popin Business Centre Southway Road Wembley HA9 0HF</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-90">
          <p>&copy; 2026 evolabnutrition. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
