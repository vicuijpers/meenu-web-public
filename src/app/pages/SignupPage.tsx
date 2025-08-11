"use client";
import Link from "next/link";
import { Bot, Upload, Users, ClipboardList } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-[70vh] bg-white">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Get started in minutes
          </h1>
          <p className="text-gray-600">
            Create your account, add your menu and staff, and go live.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="p-4 rounded-lg border border-gray-100 bg-gray-50">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 mb-3">
              <ClipboardList className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Create account</h3>
            <p className="text-sm text-gray-600">
              Set up your restaurant profile and locations.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-gray-100 bg-gray-50">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 mb-3">
              <Upload className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Add your menu</h3>
            <p className="text-sm text-gray-600">
              Items, modifiers, allergens, and images.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-gray-100 bg-gray-50">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mb-3">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Invite staff</h3>
            <p className="text-sm text-gray-600">
              Give team members access and roles.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/chat"
            className="inline-flex items-center px-6 py-3 rounded-full text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
          >
            <Bot className="h-5 w-5 mr-2" />
            Continue to sign up
          </Link>
          <p className="text-xs text-gray-500 mt-3">No credit card required.</p>
        </div>
      </section>
    </div>
  );
}
