import type { Metadata } from "next";
import Banner from "@/components/Banner";
import AboutContent from "@/components/About/AboutContent";

export const metadata: Metadata = {
  title: "About - Suitmedia",
  description: "Get to know more about Suitmedia's mission and team",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Banner
        title="About Suitmedia"
        subtitle="Empowering businesses through innovative digital solutions and cutting-edge technology"
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <AboutContent />
    </div>
  );
}
