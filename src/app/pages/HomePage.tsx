import React from "react";
import Image from "next/image";
import {
  Bot,
  Clock,
  TrendingUp,
  Star,
  Shield,
  Headphones,
  Bell,
} from "lucide-react";

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
                alt="Meenu"
                width={64}
                height={64}
                className="h-16 w-16 text-orange-500"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Order from our
              <span className="text-orange-500 block">
                AI waiter in seconds
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your restaurant with an intelligent AI assistant that
              takes orders, answers menu questions, and enhances customer
              service. Boost efficiency, increase sales, and delight your
              customers while giving your staff more time to focus on what
              matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:scale-105">
                <Bell className="h-5 w-5 mr-2" />
                Join Waitlist
              </button>
              <button className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-orange-300 hover:text-orange-600 transition-all duration-200">
                <Headphones className="h-5 w-5 mr-2" />
                Learn More
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Be among the first to experience the future of restaurant service
            </p>
          </div>
        </div>
      </section>

      {/* Benefits for Restaurant Owners */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Order from our
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Skip the wait, skip the hassle. Our AI-powered ordering system
              understands exactly what you want and gets it right every time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Increase Revenue
              </h3>
              <p className="text-gray-600">
                AI-powered upselling suggests add-ons and premium items,
                boosting average order value by up to 25%.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Faster Service
              </h3>
              <p className="text-gray-600">
                Reduce wait times by 40% with instant order processing and
                real-time menu recommendations.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Happy Customers
              </h3>
              <p className="text-gray-600">
                Personalized service and accurate orders lead to higher
                satisfaction scores and repeat business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Be First in Line
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join the waitlist and be among the first restaurants to experience
            the future of AI-powered service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-orange-600 bg-white hover:bg-gray-50 transition-all duration-200 hover:shadow-lg hover:scale-105">
              <Bell className="h-5 w-5 mr-2" />
              Join Waitlist
            </button>
            <button className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-orange-600 transition-all duration-200">
              <Headphones className="h-5 w-5 mr-2" />
              Request Demo
            </button>
          </div>
          <p className="text-orange-100 mt-4 text-sm">
            Early access for waitlist members • Priority support • Exclusive
            launch pricing
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
