export const dynamic = "force-static";

export default function ExportRestrictionsPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Legal & Export Restrictions</h1>
      <p className="text-gray-600 mb-8">
        AI Waiter provides software-as-a-service. Our services must be used in
        compliance with applicable laws, including export control and sanctions
        regulations.
      </p>
      <div className="space-y-6 bg-white rounded-xl p-6 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold mb-2">Prohibited Use</h2>
          <p>
            You may not use our services in jurisdictions or by
            individuals/entities subject to EU, UK, or US sanctions or export
            restrictions.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Compliance</h2>
          <p>
            By using AI Waiter, you confirm that you are not located in an
            embargoed country and are not on any government sanctions list.
          </p>
        </div>
      </div>
    </section>
  );
}
