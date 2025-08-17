export const dynamic = "force-static";

export default function RefundPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Refund & Dispute Policy</h1>
      <p className="text-gray-600 mb-8">
        This policy explains how refunds and disputes are handled for AI Waiter
        subscriptions and services.
      </p>

      <div className="space-y-6 bg-white rounded-xl p-6 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold mb-2">Subscriptions</h2>
          <p>
            • Charges are billed in advance for the selected billing period. You
            can cancel anytime; your plan remains active until the end of the
            current period.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Refunds</h2>
          <p>
            • We offer refunds for erroneous charges or billing mistakes. If you
            believe you were charged in error, contact us at{" "}
            <a
              className="text-orange-600 underline"
              href="mailto:support@aiwaiter.app"
            >
              support@aiwaiter.app
            </a>{" "}
            within 14 days of the charge.
          </p>
          <p>
            • Except where required by law, partial‑period refunds are not
            provided for cancellations made mid‑cycle.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Chargebacks & Disputes</h2>
          <p>
            • If you initiate a dispute via your payment provider, we may reach
            out to gather additional information. To resolve issues faster,
            please contact us first at{" "}
            <a
              className="text-orange-600 underline"
              href="mailto:support@aiwaiter.app"
            >
              support@aiwaiter.app
            </a>
            .
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            How to Request a Refund
          </h2>
          <ol className="list-decimal ml-6">
            <li>
              Include your account email and the last 4 digits of the card (if
              applicable).
            </li>
            <li>Provide the invoice ID and date of charge.</li>
            <li>Describe the issue so we can assist quickly.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
