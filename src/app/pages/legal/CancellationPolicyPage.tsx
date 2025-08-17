export const dynamic = "force-static";

export default function CancellationPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Cancellation Policy</h1>
      <p className="text-gray-600 mb-8">
        You can cancel your Meino subscription at any time from your account or
        by contacting support.
      </p>

      <div className="space-y-6 bg-white rounded-xl p-6 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold mb-2">Effective Date</h2>
          <p>
            Cancellations take effect at the end of your current billing period.
            You will retain access until then.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">How to Cancel</h2>
          <ol className="list-decimal ml-6">
            <li>
              Contact support at{" "}
              <a
                className="text-orange-600 underline"
                href="mailto:support@meino.ai"
              >
                support@meino.ai
              </a>{" "}
              with your account email, or
            </li>
            <li>Use the billing portal (if available) to cancel auto‑renew.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
