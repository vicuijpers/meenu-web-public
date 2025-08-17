export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Contact & Customer Service</h1>
      <p className="text-gray-600 mb-8">
        Need help or have a question? We’re here to help. Reach us using the
        details below and we’ll get back within 1 business day.
      </p>

      <div className="space-y-6 bg-white rounded-xl p-6 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p>
            Support:{" "}
            <a
              className="text-orange-600 underline"
              href="mailto:support@aiwaiter.app"
            >
              support@aiwaiter.app
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Hours</h2>
          <p>Monday–Friday, 9:00–18:00 (CET)</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Response Time</h2>
          <p>We typically reply within 48 hours on business days.</p>
        </div>
      </div>
    </section>
  );
}
