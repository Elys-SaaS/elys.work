import React from "react";

function NextPage() {
  return (
    <main className="bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <div>
              <a
                href="/privacy-policy/tr"
                className="text-black font-bold text-4xl cursor-pointer hover:underline"
              >
                TR
              </a>
              <span className="text-gray-600 mx-4 text-4xl">/</span>
              <a className="text-black font-bold text-4xl cursor-pointer hover:underline underline">
                EN
              </a>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            Last Updated: <span className="font-semibold">10.22.2024</span>
          </p>

          <p className="text-gray-600 mb-4">
            At <span className="font-semibold">Elys</span>, we are committed to
            protecting your privacy and ensuring that your personal information
            is handled securely and responsibly. This Privacy Policy outlines
            how we collect, use, and protect your personal data when you use our
            website and services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We may collect the following types of information when you use our
            website and services:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>
              <strong>Personal Information:</strong> Includes your name, email
              address, phone number, and other contact details when you create
              an account or communicate with us.
            </li>
            <li>
              <strong>Usage Information:</strong> Details about your interaction
              with our website, such as pages visited, links clicked, and
              browsing behavior.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type,
              device type, and operating system.
            </li>
            <li>
              <strong>Billing Information:</strong> Payment details when you
              subscribe to or purchase our services.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>
              <strong>To Provide Our Services:</strong> We use your information
              to create and manage your account, deliver services, and provide
              customer support.
            </li>
            <li>
              <strong>To Improve Our Services:</strong> We analyze how users
              interact with our website and services to improve functionality,
              user experience, and product offerings.
            </li>
            <li>
              <strong>For Communication:</strong> We may send you updates,
              newsletters, or notifications related to your account or services.
            </li>
            <li>
              <strong>Billing and Payments:</strong> To process payments and
              manage billing for paid services.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may use your data to comply
              with applicable legal obligations and protect the rights and
              safety of Elys and its users.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
            3. Sharing Your Information
          </h2>
          <p className="text-gray-600 mb-6">
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information in the following
            circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>
              <strong>With Service Providers:</strong> We may share information
              with third-party providers who help us deliver our services, such
              as payment processors and hosting providers.
            </li>
            <li>
              <strong>Legal Obligations:</strong> We may disclose information if
              required by law or to protect the rights, property, or safety of
              Elys, our users, or others.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale of assets, your information may be
              transferred to the new entity.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
            4. Data Security
          </h2>
          <p className="text-gray-600 mb-6">
            We implement industry-standard security measures to protect your
            personal information. However, no method of transmission over the
            internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
            5. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-600 mb-6">
            We use cookies and similar tracking technologies to enhance your
            experience on our website. You can control the use of cookies
            through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
            6. Your Rights
          </h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>
              <strong>Access and Update Your Information:</strong> You can
              access, update, or delete your personal information by logging
              into your account.
            </li>
            <li>
              <strong>Opt-Out:</strong> You can opt out of receiving marketing
              communications by following the unsubscribe link in our emails.
            </li>
            <li>
              <strong>Request Data Deletion:</strong> You can request that we
              delete your personal data, subject to legal obligations.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
            7. Third-Party Links
          </h2>
          <p className="text-gray-600 mb-6">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these websites.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
            8. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-600 mb-6">
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by posting the updated policy on our
            website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
            9. Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="text-gray-600 mt-4">
            <strong>Elys</strong>
            <br />
            elys.dev@hotmail.com
            <br />
            06570, Ankara, Turkey
          </p>
        </div>
      </div>
    </main>
  );
}

export default NextPage;
