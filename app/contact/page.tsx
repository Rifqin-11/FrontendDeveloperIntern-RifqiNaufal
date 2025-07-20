import type { Metadata } from "next";
import Banner from "@/components/Banner";
import ContactInfoCards from "@/components/Contact/ContactInfoCards";
import ContactForm from "@/components/Contact/ContactForm";
import MapAndDetails from "@/components/Contact/MapAndDetails";
import { contactInfo } from "@/data";

export const metadata: Metadata = {
  title: "Contact - Suitmedia",
  description:
    "Let’s talk about your project and explore how we can help you bring your vision to life.",
};


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Banner
        title="Hubungi Kami"
        subtitle="Mari diskusikan proyek Anda dan jelajahi bagaimana kami dapat membantu mewujudkan visi Anda"
        backgroundImage="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ContactInfoCards contactInfoData={contactInfo} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <MapAndDetails />
        </div>
      </main>
    </div>
  );
}
