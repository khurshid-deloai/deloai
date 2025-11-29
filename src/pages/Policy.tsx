// src/components/Policy.tsx

import React from "react";

const Policy: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: November 29, 2025
          </p>
          <p className="mt-4 text-gray-600">
            This Privacy Policy explains how <span className="font-semibold">Deloai Pvt Ltd</span> 
            {" "}(&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, discloses, and protects your
            information when you visit our website and use our services (collectively, the &quot;Services&quot;).
            By accessing or using our Services, you agree to the terms of this Privacy Policy.
          </p>
          <p className="mt-3 text-xs text-gray-500">
            This document is a general template and does not constitute legal advice. 
            Please consult a qualified legal professional to ensure compliance with applicable laws.
          </p>
        </header>

        {/* Content Card */}
        <div className="bg-white shadow-sm rounded-2xl p-6 sm:p-8 space-y-8">
          {/* 1. Who we are */}
          <section id="who-we-are">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Who We Are
            </h2>
            <p className="text-gray-600">
              Deloai Pvt Ltd is a company operating in the education and technology sector, 
              providing digital solutions to schools, students, parents, and educators. 
              This Privacy Policy applies to all users of our website and Services.
            </p>
            <p className="mt-2 text-gray-600">
              If you have any questions about this Privacy Policy, you can contact us at:
            </p>
            <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
              <li>
                <span className="font-medium">Email:</span>{" "}
                <span className="underline decoration-dotted">
                  support@deloai.com
                </span>{" "}
                (replace with your actual email)
              </li>
              <li>
                <span className="font-medium">Registered office:</span> 
                {" "}Deloai Pvt Ltd, [Insert Address, City, State, Country, PIN/ZIP]
              </li>
            </ul>
          </section>

          {/* 2. Information we collect */}
          <section id="information-we-collect">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Information We Collect
            </h2>
            <p className="text-gray-600 mb-2">
              We may collect the following types of information when you use our Services:
            </p>

            <h3 className="text-md font-semibold text-gray-800 mt-4">
              2.1 Information you provide to us
            </h3>
            <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
              <li>Name, email address, phone number, and contact details</li>
              <li>
                School or institution details (e.g., school name, class, role such as student, parent, teacher)
              </li>
              <li>Account login information (such as username and password)</li>
              <li>
                Any information you provide when you fill out forms, request demos, contact support, 
                or communicate with us
              </li>
            </ul>

            <h3 className="text-md font-semibold text-gray-800 mt-4">
              2.2 Information collected automatically
            </h3>
            <p className="text-gray-600 mt-2">
              When you visit our website, we may automatically collect certain information about your device and usage, such as:
            </p>
            <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
              <li>IP address and approximate location</li>
              <li>Browser type and version</li>
              <li>Device type, operating system, and unique device identifiers</li>
              <li>
                Pages you visit, the time and date of your visit, and how you interact with our content
              </li>
              <li>Referring website or source</li>
            </ul>

            <h3 className="text-md font-semibold text-gray-800 mt-4">
              2.3 Cookies and similar technologies
            </h3>
            <p className="text-gray-600 mt-2">
              We may use cookies, web beacons, and similar technologies to enhance your experience, 
              remember your preferences, and analyze how our Services are used. You can control cookies 
              through your browser settings, but disabling them may limit some features of our Services.
            </p>
          </section>

          {/* 3. How we use your information */}
          <section id="how-we-use-info">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-2">
              We may use the information we collect for the following purposes:
            </p>
            <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
              <li>To provide, operate, and maintain our Services</li>
              <li>To create and manage user accounts</li>
              <li>
                To communicate with you, including responding to your inquiries, support requests, 
                and feedback
              </li>
              <li>
                To personalize your experience, such as tailoring content based on your role 
                (student, parent, teacher, or school)
              </li>
              <li>To analyze usage, improve our Services, and develop new features</li>
              <li>To send you important updates, notifications, and administrative messages</li>
              <li>
                To send marketing communications (where permitted by law), which you can opt out of at any time
              </li>
              <li>To protect the security and integrity of our systems and users</li>
              <li>To comply with legal obligations and enforce our terms and policies</li>
            </ul>
          </section>

          {/* 4. Legal basis (optional/general) */}
          <section id="legal-basis">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Legal Basis for Processing (Where Applicable)
            </h2>
            <p className="text-gray-600">
              Depending on your location and applicable law, our legal basis for collecting 
              and using your personal information may include:
            </p>
            <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
              <li>Your consent</li>
              <li>Performance of a contract with you or your institution</li>
              <li>Compliance with a legal obligation</li>
              <li>Our legitimate interests, such as improving our Services and ensuring security</li>
            </ul>
          </section>

          {/* 5. Sharing of information */}
          <section id="sharing">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. How We Share Your Information
            </h2>
            <p className="text-gray-600 mb-2">
              We do not sell your personal information. We may share your information in the following situations:
            </p>
            <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
              <li>
                <span className="font-medium">With service providers:</span> 
                {" "}We may share information with trusted third-party vendors who help us operate, host, 
                analyze, or support our Services.
              </li>
              <li>
                <span className="font-medium">With schools and institutions:</span> 
                {" "}For student, parent, and teacher accounts, certain information may be shared with the relevant school 
                or institution to enable our Services.
              </li>
              <li>
                <span className="font-medium">For legal reasons:</span> 
                {" "}We may disclose information if required by law, regulation, legal process, or governmental request, 
                or to protect the rights, property, or safety of Deloai Pvt Ltd, our users, or others.
              </li>
              <li>
                <span className="font-medium">Business transfers:</span> 
                {" "}In connection with a merger, acquisition, restructuring, or sale of assets, 
                your information may be transferred as part of that transaction.
              </li>
            </ul>
          </section>

          {/* 6. Data retention */}
          <section id="retention">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Data Retention
            </h2>
            <p className="text-gray-600">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, unless a longer retention period is required or permitted by law. When information is no 
              longer needed, we will delete or anonymize it in a secure manner.
            </p>
          </section>

          {/* 7. Data security */}
          <section id="security">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Data Security
            </h2>
            <p className="text-gray-600">
              We implement reasonable technical and organizational measures to protect your personal information 
              from unauthorized access, loss, misuse, alteration, or destruction. However, no method of transmission 
              over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 8. Children's privacy */}
          <section id="children">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-gray-600">
              Our Services may be used in educational environments involving children or students. In such cases, 
              access and use are typically managed through schools, institutions, or parents/guardians in accordance 
              with applicable laws and regulations. If you believe that we have collected personal information directly 
              from a child without proper consent, please contact us so we can take appropriate action.
            </p>
          </section>

          {/* 9. Your rights */}
          <section id="your-rights">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. Your Rights and Choices
            </h2>
            <p className="text-gray-600 mb-2">
              Depending on your location and applicable law, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction or updating of inaccurate or incomplete information</li>
              <li>The right to request deletion of your information, subject to legal obligations</li>
              <li>
                The right to object to or restrict certain processing activities, including direct marketing
              </li>
              <li>The right to withdraw consent where processing is based on your consent</li>
            </ul>
            <p className="mt-3 text-gray-600">
              To exercise these rights, or for any privacy-related questions, please contact us at{" "}
              <span className="underline decoration-dotted">privacy@deloai.com</span>{" "}
              (replace with your actual contact email).
            </p>
          </section>

          {/* 10. International transfers */}
          <section id="international-transfers">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              10. International Data Transfers
            </h2>
            <p className="text-gray-600">
              Our Services may be provided using servers and service providers located in different countries. 
              As a result, your personal information may be transferred to and processed in jurisdictions that 
              may have different data protection laws than your home country. Where required, we will take appropriate 
              measures to ensure that such transfers comply with applicable data protection laws.
            </p>
          </section>

          {/* 11. Third-party links */}
          <section id="third-party">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              11. Third-Party Links and Services
            </h2>
            <p className="text-gray-600">
              Our website may contain links to third-party websites, services, or applications. We are not responsible 
              for the privacy practices or content of those third parties. We encourage you to review the privacy policies 
              of any third-party sites or services you visit.
            </p>
          </section>

          {/* 12. Changes */}
          <section id="changes">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              12. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, 
              legal requirements, or for other operational reasons. When we make material changes, we will update the 
              &quot;Last updated&quot; date at the top of this page and, where appropriate, provide additional notice.
            </p>
          </section>

          {/* 13. Contact */}
          <section id="contact-details">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              13. Contact Us
            </h2>
            <p className="text-gray-600">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our handling of your 
              personal information, please contact us at:
            </p>
            <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
              <li>Email: <span className="underline decoration-dotted">support@deloai.com</span></li>
              <li>Address: Deloai Pvt Ltd, [Insert Address, City, State, Country, PIN/ZIP]</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Policy;
