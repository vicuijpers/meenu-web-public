export const dynamic = "force-static";

export default function PromotionsTermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">
        Promotions: Terms & Conditions
      </h1>
      <p className="text-gray-600 mb-8">
        These terms apply to promotional offers provided by AI Waiter (discount
        codes, free months, beta credits, etc.).
      </p>

      <div className="space-y-6 bg-white rounded-xl p-6 shadow-sm">
        <ul className="list-disc ml-6 space-y-2">
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
