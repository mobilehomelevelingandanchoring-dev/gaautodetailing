import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | GAutoDetailing",
  description: "Privacy Policy for GAutoDetailing mobile auto detailing services.",
  alternates: { canonical: `${BUSINESS.baseUrl}/privacy-policy` },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20 bg-[#060608]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">Last updated: January 1, 2025</p>
        </div>

        <div className="prose prose-invert prose-sm max-w-none space-y-6">
          {[
            {
              title: "1. Information We Collect",
              content: "When you submit a booking request or contact form on our website, we collect the information you provide, including your name, phone number, email address, vehicle information, service address, and preferred appointment details. We may also collect information automatically, such as your IP address and browser type, through standard web analytics tools.",
            },
            {
              title: "2. How We Use Your Information",
              content: "We use the information you provide to: process and confirm your auto detailing appointment; communicate with you about your booking; send follow-up messages about our services; improve our website and services; and comply with legal obligations. We do not sell your personal information to third parties.",
            },
            {
              title: "3. Information Sharing",
              content: "We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We may also disclose your information if required by law or to protect our rights.",
            },
            {
              title: "4. Data Security",
              content: "We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
            },
            {
              title: "5. Cookies",
              content: "Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. Some features of our website may not function properly without cookies.",
            },
            {
              title: "6. Third-Party Links",
              content: "Our website may contain links to third-party websites, including social media platforms. We are not responsible for the privacy practices of these third-party sites and encourage you to review their privacy policies.",
            },
            {
              title: "7. Children's Privacy",
              content: "Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.",
            },
            {
              title: "8. Your Rights",
              content: "You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us at " + BUSINESS.email + ". We will respond to your request within a reasonable timeframe.",
            },
            {
              title: "9. Changes to This Policy",
              content: "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website with a new effective date.",
            },
            {
              title: "10. Contact Us",
              content: `If you have any questions about this Privacy Policy, please contact us at:\n\nGAutoDetailing\nPhone: ${BUSINESS.phone}\nEmail: ${BUSINESS.email}\nInstagram: ${BUSINESS.instagramHandle}`,
            },
          ].map((section) => (
            <div key={section.title} className="border-b border-white/8 pb-6">
              <h2 className="text-lg font-bold text-white mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
