'use client';

import { MapPin, Phone } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with our support team directly.',
    actionLabel: '009647702359478',
    href: 'tel:+9647702359478',
  },
  {
    icon: MapPin,
    title: 'Official distributor in Iraq Fitness City',
    href: '#location',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-muted/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Orca Nutrition
          </p>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Reach out by phone or visit our location for product support and distributor inquiries.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                  <Icon className="h-7 w-7 text-secondary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">{item.title}</h2>
                {item.href === '#location' ? (
                  <div id="location" className="mt-4 h-2" />
                ) : (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-secondary px-6 py-2.5 font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {item.actionLabel}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground md:text-4xl">
                Need a quick response?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Call us directly for product availability, order questions, and distributor support.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href="tel:+9647702359478"
                className="inline-flex items-center justify-center rounded-lg border-2 border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Call 009647702359478
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}