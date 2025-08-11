import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bot, Clock, Smartphone, ShoppingCart } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/icon-meino.svg"
                alt="AI Waiter"
                width={64}
                height={64}
                className="h-16 w-16 text-orange-500"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Order from our
              <span className="text-orange-500 block">
                AI waiter in seconds
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Skip the wait, skip the hassle. Our AI-powered ordering system
              understands exactly what you want and gets it right every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/chat"
                className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                <Bot className="h-5 w-5 mr-2" />
                Start Order
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-orange-300 hover:text-orange-600 transition-all duration-200"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AI Waiter?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of restaurant ordering with our intelligent
              system
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Order in seconds, not minutes. Our AI understands your
                preferences instantly.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mobile Friendly
              </h3>
              <p className="text-gray-600">
                Perfect experience on any device. Order from anywhere, anytime.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Smart Ordering
              </h3>
              <p className="text-gray-600">
                AI-powered recommendations based on your tastes and dietary
                preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to experience the future?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of satisfied customers who&apos;ve made the smart
            choice.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-orange-600 bg-white hover:bg-gray-50 transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            <Bot className="h-5 w-5 mr-2" />
            Talk to AI Waiter Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
