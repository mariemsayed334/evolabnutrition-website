'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/hooks/use-cart';
import Image from 'next/image';
import Link from 'lucide-react';
import { ShoppingCart, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  paymentMethod: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart, isLoaded } = useCart();
  const [mounted, setMounted] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'credit-card',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) {
    return null;
  }

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>

          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground mb-8">
              Add items to your cart before checking out.
            </p>
            <a
              href="/shop"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md text-center bg-card rounded-lg border border-border p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <Check className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Order Confirmed!
          </h1>
          <p className="text-muted-foreground mb-6">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            You will receive an order confirmation email shortly with tracking
            information.
          </p>
          <a
            href="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zipCode
    ) {
      alert('Please fill in all required fields');
      return;
    }

    // Clear cart and show success
    clearCart();
    setOrderPlaced(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Info */}
              <div className="bg-card rounded-lg border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Shipping Information
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card rounded-lg border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Payment Method
                </h2>

                <div className="space-y-3">
                  {[
                    { id: 'credit-card', label: 'Credit Card' },
                    { id: 'debit-card', label: 'Debit Card' },
                    { id: 'paypal', label: 'PayPal' },
                  ].map((method) => (
                    <label key={method.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="text-foreground font-medium">{method.label}</span>
                    </label>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mt-6">
                  This is a demo checkout. No actual payment will be processed.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold text-lg hover:bg-secondary transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-8 sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.flavorId}`}
                    className="flex gap-3 pb-4 border-b border-border last:border-b-0"
                  >
                    <div className="relative w-12 h-12 flex-shrink-0 bg-muted rounded overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.productName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground line-clamp-1">
                        {item.productName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.flavorName} x{item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pb-6 border-b border-border">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax (10%)</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
                <span className="text-lg font-bold text-foreground">Total</span>
                <span className="text-2xl font-bold text-primary">
                  ${(total * 1.1).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
