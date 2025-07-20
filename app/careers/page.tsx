import type { Metadata } from "next";
import Banner from "@/components/Banner";
import CareerContent from "@/components/Career/CareerContent";

export const metadata: Metadata = {
  title: "Careers - Suitmedia",
  description:
    "Join our team of passionate professionals building digital experiences.",
};


export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Banner
        title="Join Our Team"
        subtitle="Build the future of digital experiences with passionate professionals who love what they do"
        backgroundImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <CareerContent />
    </div>
  );
}
