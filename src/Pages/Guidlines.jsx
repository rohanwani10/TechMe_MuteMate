import React from "react";

export default function Guidlines() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Community Guidelines
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our guidelines ensure a safe, respectful, and inclusive environment
            for everyone.
          </p>
        </div>
      </section>

      {/* Guidelines Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            General Principles
          </h2>
          <ul className="space-y-6">
            <li className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Respect Others
              </h3>
              <p className="text-gray-600">
                Treat everyone with respect and kindness. Harassment, hate
                speech, and discrimination are strictly prohibited.
              </p>
            </li>
            <li className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Maintain Privacy
              </h3>
              <p className="text-gray-600">
                Protect your own and others' privacy. Do not share personal or
                sensitive information without consent.
              </p>
            </li>
            <li className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Use Responsibly
              </h3>
              <p className="text-gray-600">
                Use MuteMate responsibly and avoid any actions that could harm
                the platform or its users.
              </p>
            </li>
            <li className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Report Issues
              </h3>
              <p className="text-gray-600">
                If you encounter inappropriate behavior or content, report it to
                our support team immediately.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Assistance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            If you have any questions or concerns about our guidelines, feel
            free to reach out to us.
          </p>
          <a
            href="/support"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}
