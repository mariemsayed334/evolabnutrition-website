'use client';

import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-muted/50 border-b border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our products or your order? We&apos;re here to help you fuel your performance.
          </p>
        </div>
      </div>

      {/* Contact Info Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* WhatsApp Card */}
          <div className="bg-card p-8 rounded-2xl border border-border flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-6">Chat with us for instant support and inquiries.</p>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary transition-colors"
            >
              Start Chat
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-card p-8 rounded-2xl border border-border flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-6">For detailed questions or partnership inquiries.</p>
            <a href="mailto:support@evolabnutrition.com" className="text-secondary font-bold hover:underline">
              support@evolabnutrition.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-card p-8 rounded-2xl border border-border flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-muted-foreground mb-6">Talk directly with our support team.</p>
            <a href="tel:+1234567890" className="text-secondary font-bold hover:underline">
              +1 (234) 567-890
            </a>
          </div>

          {/* Office Location */}
          <div className="bg-card p-8 rounded-2xl border border-border flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Office</h3>
            <p className="text-muted-foreground mb-6">Visit us or send us mail.</p>
            <p className="font-semibold text-foreground">San Francisco, CA</p>
          </div>

          {/* Working Hours Card */}
          <div className="bg-card p-8 rounded-2xl border border-border flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 lg:col-span-2">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <div className="w-full max-w-sm space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-sm border-t border-border pt-3">
                <span className="text-muted-foreground">Saturday</span>
                <span className="font-semibold text-foreground">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between text-sm border-t border-border pt-3">
                <span className="text-muted-foreground">Sunday</span>
                <span className="font-semibold text-secondary">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}