import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions | GAutoDetailing",
  description: "Terms and conditions for GAutoDetailing mobile auto detailing services.",
  alternates: { canonical: `${BUSINESS.baseUrl}/terms` },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 bg-[#060608]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Terms & Conditions</h1>
          <p className="text-muted-foreground text-sm">Last updated: January 1, 2025</p>
        </div>

        <div className="space-y-6">
          {[
            {
              title: "1. Acceptance of Terms",
              content: "By booking a service with GAutoDetailing or using our website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.",
            },
            {
              title: "2. Services",
              content: "GAutoDetailing provides professional mobile auto detailing services. All services are performed at the customer's location. Service details, pricing, and availability are subject to change without notice. Final pricing will be confirmed before service begins.",
            },
            {
              title: "3. Appointments & Scheduling",
              content: "Booking requests are not confirmed until you receive a confirmation from GAutoDetailing. We reserve the right to reschedule or decline appointments. We require at least 24 hours notice for cancellations or rescheduling.",
            },
            {
              title: "4. Pricing & Payment",
              content: "All prices quoted are estimates based on vehicle size and condition. Final pricing may vary. We accept cash, Venmo, Zelle, CashApp, and major credit/debit cards. Payment is due upon completion of services. For new clients or large packages, a deposit may be required.",
            },
            {
              title: "5. Vehicle Condition",
              content: "The customer is responsible for removing all personal belongings from the vehicle prior to service. GAutoDetailing is not responsible for items left in the vehicle. Additional charges may apply for vehicles in excessively dirty condition, heavy pet hair, or severe odor issues.",
            },
            {
              title: "6. Limitation of Liability",
              content: "GAutoDetailing carries professional liability insurance. However, we are not responsible for pre-existing damage, paint defects, or conditions that existed before our service. We will not be liable for damage resulting from pre-existing conditions. Our total liability shall not exceed the amount paid for the service.",
            },
            {
              title: "7. Weather Policy",
              content: "In the event of severe weather conditions that prevent safe and quality detailing, we reserve the right to reschedule the appointment at no charge to the customer. We monitor weather forecasts and will notify you in advance of any necessary rescheduling.",
            },
            {
              title: "8. Satisfaction Guarantee",
              content: "We stand behind the quality of our work. If you are not satisfied with our service, please notify us within 24 hours of service completion. We will work to address any legitimate concerns at no additional charge.",
            },
            {
              title: "9. Customer Responsibilities",
              content: "You agree to: provide accurate information when booking; ensure vehicle access is available at the scheduled time; provide access to a water source when required; remove all personal belongings and valuables; disclose any known issues with the vehicle that may affect our services.",
            },
            {
              title: "10. Intellectual Property",
              content: "All content on GAutoDetailing's website, including text, images, logos, and graphics, is owned by GAutoDetailing and protected by copyright law. You may not reproduce or distribute our content without written permission.",
            },
            {
              title: "11. Changes to Terms",
              content: "GAutoDetailing reserves the right to modify these Terms & Conditions at any time. Continued use of our services constitutes acceptance of the updated terms.",
            },
            {
              title: "12. Contact",
              content: `For questions about these Terms & Conditions, contact us:\n\nGAutoDetailing\nPhone: ${BUSINESS.phone}\nEmail: ${BUSINESS.email}`,
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
