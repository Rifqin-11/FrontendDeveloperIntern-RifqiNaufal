import type { Metadata } from "next";
import Banner from "@/components/Banner";
import ServiceGrid from "@/components/Services/ServiceGrid";
import ProcessSteps from "@/components/Services/ProcessSteps";
import WhyChooseUs from "@/components/Services/WhyChooseUs";
import {  process, servicesItem, Servicebenefits } from "@/data";

export const metadata: Metadata = {
  title: "Services - Suitmedia",
  description:
    "Discover our wide range of digital services tailored for your business growth.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Banner
        title="Our Services"
        subtitle="Comprehensive digital solutions to transform your business and drive growth"
        backgroundImage="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServiceGrid servicesData={servicesItem} />
        <ProcessSteps processData={process} />
        <WhyChooseUs benefitsData={Servicebenefits} />
      </main>
    </div>
  );
}
