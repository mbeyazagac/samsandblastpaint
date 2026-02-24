import React from 'react';
import { SectionTitle } from '../components/SectionTitle';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated: January 2025</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our company Sand Blasting & Painting LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Company name and business information</li>
              <li>Project details and specifications</li>
              <li>Photos or documents you submit for quote requests</li>
              <li>Communication preferences and correspondence</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Provide quotes and estimates for sandblasting and painting services</li>
              <li>Communicate with you about your projects and inquiries</li>
              <li>Schedule and coordinate service appointments</li>
              <li>Improve our services and customer experience</li>
              <li>Send you information about our services (with your consent)</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>With service providers who assist in our business operations</li>
              <li>To comply with legal requirements or respond to lawful requests</li>
              <li>To protect our rights, property, or safety, or that of others</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request information about how we use your data</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Our company Sand Blasting & Painting LLC</strong></p>
              <p className="text-gray-700 mb-2">8013 Quaking Aspen Rd, Gainsville, VA 20155</p>
              <p className="text-gray-700 mb-2">Phone: <a href="tel:+15713318485" className="text-orange-600 hover:text-orange-700">(571) 331-8485</a></p>
              <p className="text-gray-700">Email: <a href="mailto:info@ctnsandblasting.com" className="text-orange-600 hover:text-orange-700">info@ctnsandblasting.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
