import { CheckCircle, Users, Award, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/50 border-b border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">About NutraPro</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Dedicated to providing premium supplements that support your health and fitness journey.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                At NutraPro, we believe that premium nutrition is the foundation for achieving
                optimal health and fitness. Our mission is to provide the highest quality
                supplements backed by science and delivered with integrity.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are committed to helping athletes, fitness enthusiasts, and health-conscious
                individuals reach their goals through scientifically formulated products that
                deliver real results.
              </p>
              <ul className="space-y-3">
                {[
                  'Premium quality ingredients',
                  'Science-backed formulations',
                  'Transparent labeling',
                  'Customer satisfaction guarantee',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 bg-muted rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-foreground font-semibold">Quality Driven</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
            Why Choose NutraPro?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'All products undergo rigorous testing and quality control.',
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Backed by nutritionists and fitness professionals.',
              },
              {
                icon: Leaf,
                title: 'Science-Based',
                description: 'Formulated using latest research and clinical studies.',
              },
              {
                icon: CheckCircle,
                title: 'Satisfaction Guaranteed',
                description: '30-day money-back guarantee on all products.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-lg border border-border p-6 text-center hover:border-secondary transition-colors"
                >
                  <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description:
                  'We are transparent about our ingredients, sourcing, and business practices. What you see is what you get.',
              },
              {
                title: 'Excellence',
                description:
                  'We pursue the highest standards in every aspect of our business, from product development to customer service.',
              },
              {
                title: 'Community',
                description:
                  'We support our customers in achieving their health and fitness goals through education and quality products.',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-card rounded-lg border border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: '50K+', label: 'Happy Customers' },
              { stat: '100+', label: 'Products' },
              { stat: '10+', label: 'Years Experience' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-4xl lg:text-5xl font-bold mb-2">{item.stat}</div>
                <p className="opacity-90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our premium supplements and take the first step towards your fitness goals.
          </p>
          <a
            href="/shop"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            Products
          </a>
        </div>
      </section>
    </div>
  );
}
