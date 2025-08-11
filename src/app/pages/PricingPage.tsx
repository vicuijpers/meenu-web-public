import React from "react";
import { Check, Bot, Shield, TrendingUp, Clock } from "lucide-react";

const features = {
  free: [
    "1 restaurant",
    "Basic menu management",
    "Computed voice assistant",
    "Up to 50 menu items",
    "QR code generation",
  ],
  single: [
    "1 restaurant",
    "Advanced menu management",
    "AI voice assistant",
    "Custom branding",
    "Table management",
    "Staff accounts (up to 5)",
    "Priority support",
  ],
  multi: [
    "Up to 5 restaurants",
    "Unlimited menu items",
    "Priority support",
    "Advanced table management",
    "Unlimited staff accounts",
    "Multi-location reporting",
    "API access",
  ],
};

const PricingPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-[1]">
            Plans for every restaurant
          </h1>
          <p className="text-gray-600">Start free. Upgrade when you grow.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Free */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-gray-900">Free Tier</h3>
              <p className="mt-1 text-sm text-gray-500">
                Perfect for getting started
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="mt-6 space-y-3">
                {features.free.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-700">
                    <Check className="mt-0.5 h-5 w-5 text-green-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-auto w-full rounded-full border border-orange-300 bg-white px-4 py-3 text-sm font-semibold text-orange-700 hover:bg-orange-50">
                Get Started
              </button>
            </div>

            {/* Single (Most Popular) */}
            <div className="relative rounded-2xl border-2 border-orange-300 bg-white p-6 sm:p-8 shadow-[0_10px_30px_-12px_rgba(234,88,12,0.25)] flex flex-col h-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white shadow">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Single Restaurant
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Ideal for individual restaurant owners
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gray-900">$29</span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="mt-6 space-y-3">
                {features.single.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-700">
                    <Check className="mt-0.5 h-5 w-5 text-green-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-auto w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:from-orange-600 hover:to-orange-700">
                Get Started
              </button>
            </div>

            {/* Multiple */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-gray-900">
                Multiple Restaurants
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                For restaurant chains and franchises
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gray-900">$89</span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="mt-6 space-y-3">
                {features.multi.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-700">
                    <Check className="mt-0.5 h-5 w-5 text-green-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-auto w-full rounded-full border border-orange-300 bg-white px-4 py-3 text-sm font-semibold text-orange-700 hover:bg-orange-50">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Restaurants
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to transform your restaurant service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 mb-3">
                <Bot className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Smart Ordering
              </h4>
              <p className="text-sm text-gray-600">
                AI understands natural language and dietary preferences
              </p>
            </div>

            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mb-3">
                <Shield className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Allergen Alerts
              </h4>
              <p className="text-sm text-gray-600">
                Automatic warnings for common allergens and dietary restrictions
              </p>
            </div>

            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 mb-3">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Smart Upselling
              </h4>
              <p className="text-sm text-gray-600">
                Intelligent suggestions for add-ons and premium items
              </p>
            </div>

            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 mb-3">
                <Clock className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                24/7 Availability
              </h4>
              <p className="text-sm text-gray-600">
                Always ready to serve, even during peak hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA moved to global Footer */}
    </main>
  );
};

export default PricingPage;
