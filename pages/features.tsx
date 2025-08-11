import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  MessageSquare,
  ShoppingCart,
  ShieldCheck,
  Languages,
  Workflow,
  BarChart3,
  Headphones,
  Sparkles,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/icon-meino.svg"
              alt="AI Waiter"
              width={56}
              height={56}
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.05] mb-4">
            What our AI waiter can do
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A conversational ordering experience that answers questions, upsells
            intelligently, and speeds up service across your restaurant.
          </p>
        </div>
      </section>

      {/* Core features grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageSquare className="h-6 w-6" />,
                iconWrap: "bg-orange-100 text-orange-600",
                title: "Conversational ordering",
                desc: "Guests order naturally with chat—no app installs, no confusion, just fast and friendly service.",
              },
              {
                icon: <ShoppingCart className="h-6 w-6" />,
                iconWrap: "bg-green-100 text-green-600",
                title: "Smart recommendations",
                desc: "Automatic upsells and sides based on intent, popularity, and dietary preferences.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                iconWrap: "bg-blue-100 text-blue-600",
                title: "Allergens & dietary",
                desc: "Answers questions about ingredients, allergens, and dietary constraints—accurately and safely.",
              },
              {
                icon: <Languages className="h-6 w-6" />,
                iconWrap: "bg-purple-100 text-purple-600",
                title: "Multilingual support",
                desc: "Serve guests in their language. The AI adapts tone and translations on the fly.",
              },
              {
                icon: <Workflow className="h-6 w-6" />,
                iconWrap: "bg-yellow-100 text-yellow-600",
                title: "Smooth handoff",
                desc: "Escalate to a staff member when needed—keeping full context for faster assistance.",
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                iconWrap: "bg-rose-100 text-rose-600",
                title: "Insights & trends",
                desc: "Track top items, common questions, and conversion funnels to optimize your menu.",
              },
              {
                icon: <Sparkles className="h-6 w-6" />,
                iconWrap: "bg-cyan-100 text-cyan-600",
                title: "Customized personality",
                desc: "Configure your brand voice and hospitality style for a delightful on-brand experience.",
              },
              {
                icon: <Bot className="h-6 w-6" />,
                iconWrap: "bg-slate-100 text-slate-700",
                title: "Menu-aware AI",
                desc: "Understands items, modifiers, and combos so orders are accurate the first time.",
              },
              {
                icon: <Headphones className="h-6 w-6" />,
                iconWrap: "bg-indigo-100 text-indigo-600",
                title: "24/7 availability",
                desc: "Never miss an order—even during rush or after hours. The AI is always ready to help.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:border-orange-200 transition-all"
              >
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${f.iconWrap} mb-3`}
                  aria-hidden
                >
                  {f.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              How it works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Set up in minutes. Import your menu, tweak the voice, and start
              taking orders.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-lg border border-gray-100 bg-white">
              <div className="text-sm font-semibold text-gray-900">
                1. Add your menu
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Upload items, modifiers, and allergens. The AI becomes
                menu-aware instantly.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-gray-100 bg-white">
              <div className="text-sm font-semibold text-gray-900">
                2. Customize the AI
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Set your brand tone, upsell rules, and handoff preferences.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-gray-100 bg-white">
              <div className="text-sm font-semibold text-gray-900">
                3. Go live
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Share a link or embed the chat. Start taking orders right away.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/chat"
              className="inline-flex items-center px-6 py-3 rounded-full text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              <Bot className="h-5 w-5 mr-2" />
              Try the AI waiter
            </Link>
            <p className="text-xs text-gray-500 mt-3">
              No credit card required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
