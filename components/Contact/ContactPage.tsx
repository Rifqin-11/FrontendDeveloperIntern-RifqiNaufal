import Banner from "@/components/Banner";
import ContactInfoCards from "./ContactInfoCards";
import ContactForm from "./ContactForm";
import MapAndDetails from "./MapAndDetails";
import { contactInfo } from "@/data";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Banner
        title="Contact Us"
        subtitle="Let's discuss your project and explore how we can help bring your vision to life"
        backgroundImage="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* displaying info cards */}
        <ContactInfoCards contactInfoData={contactInfo} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* interactive form */}
          <ContactForm />

          {/*  static map and details */}
          <MapAndDetails />
        </div>
      </main>
    </div>
  );
}
