export const dynamic = "force-static";

export default function ReturnsPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Returns & Shipping Policy</h1>
      <p className="text-gray-600 mb-8">
        Meino provides software services and does not sell or ship physical
        goods. As a result, there are no returns or shipping processes
        applicable.
      </p>
      <div className="space-y-6 bg-white rounded-xl p-6 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold mb-2">Physical Goods</h2>
          <p>
            We do not ship or fulfill physical items. If you believe a charge
            was made for physical goods in error, contact us at{" "}
            <a
              className="text-orange-600 underline"
              href="mailto:support@meino.ai"
            >
              support@meino.ai
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
