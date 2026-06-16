import { ProductCard } from '@/components/product-card';
import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Leaf, Award, Zap } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight tracking-tight">
                Fuel Your Performance
                  with <span className="text-secondary">Premium Nutrition</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                   We combine the best of science and nature to bring you nutritional meals for maximum performance.              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
                >
                  Start your Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-96 sm:h-full overflow-hidden rounded-xl border border-border bg-card shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
              <Image
                src="/images/evolab all.jpg"
                alt="evolabnutrition products"
                fill
                className="object-contain p-4 sm:p-6"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-center text-foreground mb-12 tracking-tight">
            Why Choose evolabnutrition?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'All products are rigorously tested and certified for purity and potency.',
              },
              {
                icon: Leaf,
                title: 'Science-Based',
                description: 'Formulated with scientifically proven ingredients backed by research.',
              },
              {
                icon: Zap,
                title: 'Fast Results',
                description: 'Experience noticeable improvements in energy, strength, and recovery.',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary transition-colors"
                >
                  <Icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                Our Products
              </h2>
              <div className="w-24 h-1.5 bg-secondary mt-4 rounded-full" />
              <p className="text-muted-foreground mt-6 max-w-2xl text-lg">
                Discover our premium selection of lab-tested supplements designed to help you achieve your fitness goals and maintain a healthy lifestyle.
              </p>
            </div>
            <Link 
              href="/shop" 
              className="group flex items-center gap-2 text-secondary font-bold hover:text-primary transition-all pb-1 border-b-2 border-secondary hover:border-primary"
            >
              View All Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-center text-foreground mb-12 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Are evolabnutrition supplements safe?',
                a: 'Yes, all our products are tested for safety and potency. We recommend consulting with a healthcare professional before starting any new supplement.',
              },
              {
                q: 'How quickly will I see results?',
                a: 'Results vary by individual and product. Most customers notice improvements within 2-4 weeks of consistent use.',
              },
              {
                q: 'Do you offer international shipping?',
                a: 'Yes, we ship worldwide. Shipping costs and delivery times vary by location.',
              },
              {
                q: 'What is your return policy?',
                a: 'We offer a 30-day money-back guarantee on all products. If you&apos;re not satisfied, simply return the unused portion.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 tracking-tight">
            Ready to Transform Your Fitness?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Start your journey today with evolabnutrition premium supplements.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-secondary text-black px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
          >
            Explore Products <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
