export const dynamic = "force-static";

export default function LegalPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Customer Service & Policies</h1>
      <p className="text-gray-600 mb-8">
        This page contains customer service details and key policies for AI
        Waiter (aiwaiter.app).
      </p>

      <nav className="bg-white rounded-xl p-4 shadow-sm mb-8">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>
            <a className="text-orange-600 underline" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="text-orange-600 underline" href="#refunds">
              Refunds & Disputes
            </a>
          </li>
          <li>
            <a className="text-orange-600 underline" href="#cancellation">
              Cancellation
            </a>
          </li>
          <li>
            <a className="text-orange-600 underline" href="#returns">
              Returns
            </a>
          </li>
          <li>
            <a className="text-orange-600 underline" href="#export">
              Export Restrictions
            </a>
          </li>
          <li>
            <a className="text-orange-600 underline" href="#promotions">
              Promotions
            </a>
          </li>
        </ul>
      </nav>

      <div
        id="contact"
        className="space-y-4 bg-white rounded-xl p-6 shadow-sm mb-8"
      >
        <h2 className="text-2xl font-semibold">Customer Service Contact</h2>
        <p>
          Email:{" "}
          <a
            className="text-orange-600 underline"
            href="mailto:support@aiwaiter.app"
          >
            support@aiwaiter.app
          </a>
        </p>
        <p>Hours: Monday–Friday, 9:00–18:00 (CET)</p>
        <p>Response time: typically within 48 hours on business days.</p>
      </div>

      <div
        id="refunds"
        className="space-y-4 bg-white rounded-xl p-6 shadow-sm mb-8"
      >
        <h2 className="text-2xl font-semibold">Refund & Dispute Policy</h2>
        <p>
          • Subscriptions are billed in advance for the chosen billing period.
          You may cancel at any time; access remains active until the end of the
          current period.
        </p>
        <p>
          • Refunds are provided for erroneous charges or billing mistakes. If
          you believe you were charged in error, contact us at{" "}
          <a
            className="text-orange-600 underline"
            href="mailto:support@aiwaiter.app"
          >
            support@aiwaiter.app
          </a>{" "}
          within 14 days of the charge.
        </p>
        <p>
          • Except where required by law, we don’t issue partial‑period refunds
          for mid‑cycle cancellations.
        </p>
        <h3 className="text-lg font-semibold">How to request a refund</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>
            Include your account email and the last 4 digits of the card (if
            applicable).
          </li>
          <li>Provide the invoice ID and date of charge.</li>
          <li>Describe the issue so we can assist quickly.</li>
        </ol>
      </div>

      <div
        id="cancellation"
        className="space-y-4 bg-white rounded-xl p-6 shadow-sm mb-8"
      >
        <h2 className="text-2xl font-semibold">Cancellation Policy</h2>
        <p>
          You can cancel your subscription at any time. Cancellations take
          effect at the end of your current billing period; you will retain
          access until then.
        </p>
        <p>
          To cancel, contact{" "}
          <a
            className="text-orange-600 underline"
            href="mailto:support@aiwaiter.app"
          >
            support@aiwaiter.app
          </a>{" "}
          or use the billing portal if available.
        </p>
      </div>

      <div
        id="returns"
        className="space-y-4 bg-white rounded-xl p-6 shadow-sm mb-8"
      >
        <h2 className="text-2xl font-semibold">Returns & Shipping Policy</h2>
        <p>
          AI Waiter provides software services and does not sell or ship
          physical goods. As a result, returns and shipping do not apply.
        </p>
      </div>

      <div
        id="export"
        className="space-y-4 bg-white rounded-xl p-6 shadow-sm mb-8"
      >
        <h2 className="text-2xl font-semibold">Legal & Export Restrictions</h2>
        <p>
          Our services must be used in compliance with applicable laws,
          including export control and sanctions regulations.
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            You may not use our services in jurisdictions or by
            individuals/entities subject to EU, UK, or US sanctions or export
            restrictions.
          </li>
          <li>
            By using AI Waiter, you confirm that you are not located in an
            embargoed country and are not on any government sanctions list.
          </li>
        </ul>
      </div>

      <div
        id="promotions"
        className="space-y-4 bg-white rounded-xl p-6 shadow-sm"
      >
        <h2 className="text-2xl font-semibold">
          Promotions: Terms & Conditions
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Promotions are time‑limited and subject to availability.</li>
          <li>
            Unless stated otherwise, promotions cannot be combined and are
            limited to one per customer.
          </li>
          <li>Promotions are non‑transferable and have no cash value.</li>
          <li>
            We may modify or withdraw a promotion at any time where permitted by
            law.
          </li>
          <li>
            Eligibility may require an active, paid subscription or account in
            good standing.
          </li>
          <li>
            Misuse (e.g., creating multiple accounts) may result in reversal and
            account suspension.
          </li>
        </ul>
      </div>
    </section>
  );
}
