import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50">

      {/* HEADER */}
      <div className="py-12 text-center bg-primary/10">
        <h1 className="text-4xl font-bold text-gray-800">
          Privacy Policy
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Last Updated: January 2026
        </p>

        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          At <span className="font-semibold text-primary">Prescripto</span>,
          your privacy is important to us. This page explains how we collect,
          use, and protect your personal information.
        </p>
      </div>


      {/* CONTENT */}
      <div className="max-w-5xl px-6 py-12 mx-auto space-y-8">

        {/* Section 1 */}
        <div className="p-6 text-center transition bg-white shadow-md  rounded-xl hover:shadow-lg">
          <h2 className="mb-3 text-xl font-semibold text-gray-800">
            Information We Collect
          </h2>

          <p className="leading-7 text-gray-600">
            We may collect personal information such as your name, email
            address, phone number, and appointment details when you create
            an account or book a doctor through our platform.
          </p>
        </div>


        {/* Section 2 */}
        <div className="p-6 transition bg-white shadow-md  rounded-xl hover:shadow-lg">
          <h2 className="mb-3 text-xl font-semibold text-center text-gray-800">
            How We Use Your Information
          </h2>

          <p className="mb-3 text-center text-gray-600">
            Your information helps us deliver a better healthcare experience:
          </p>

          <ul className="pl-6 space-y-2 text-gray-600 list-disc ">
            <li>Manage and schedule doctor appointments</li>
            <li>Provide assistance and customer support</li>
            <li>Improve our healthcare services</li>
            <li>Maintain security and prevent misuse</li>
          </ul>
        </div>


        {/* Section 3 */}
        <div className="p-6 mt-10 text-center transition bg-white shadow-md rounded-xl hover:shadow-lgp-6 hover:shadow-lg">
          <h2 className="mb-3 text-xl font-semibold text-gray-800">
            Data Security
          </h2>

          <p className="leading-7 text-gray-600">
            We implement strong security measures to protect your personal
            information from unauthorized access, modification, or disclosure.
            Your data is handled with strict confidentiality.
          </p>
        </div>


        {/* Section 4 */}
        <div className="p-6 mt-10 text-center transition bg-white shadow-md rounded-xl hover:shadow-lg">
          <h2 className="mb-3 text-xl font-semibold text-gray-800">
            Third-Party Services
          </h2>

          <p className="leading-7 text-gray-600">
            We do not sell or trade your personal data. However, some trusted
            third-party services may help us operate the platform efficiently,
            such as hosting services and communication tools.
          </p>
        </div>


        {/* Section 5 */}
        <div className="p-6 text-center transition bg-white shadow-md rounded-xl hover:shadow-lg">
          <h2 className="mb-3 text-xl font-semibold text-gray-800">
            Changes to This Policy
          </h2>

          <p className="leading-7 text-gray-600">
            Our Privacy Policy may be updated occasionally to reflect changes
            in services or regulations. All updates will be posted on this
            page with the revised date.
          </p>
        </div>


        {/* CONTACT */}
        <div className="p-6 text-center transition bg-white shadow-md rounded-xl hover:shadow-lg">

          <h2 className="mb-3 text-xl font-semibold text-gray-800">
            Contact Us
          </h2>

          <p className="mb-4 text-gray-600">
            If you have any questions about this Privacy Policy,
            please feel free to reach out to us.
          </p>

          📧{" "}
              <a href="mailto:kakdesakshi266@email.com" className="ml-1 transition hover:text-primary hover:underline">
                kakdesakshi266@gmail.com
              </a>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;