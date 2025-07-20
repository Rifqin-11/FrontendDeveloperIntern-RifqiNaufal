import type { Metadata } from "next";
import Banner from "@/components/Banner";
import StatsSection from "@/components/Work/StatsSection";
import ProjectGrid from "@/components/Work/ProjectGrid";
import CtaSection from "@/components/Work/CtaSection";
import { projects, stats } from "@/data";

export const metadata: Metadata = {
  title: "Our Work - Suitmedia",
  description:
    "Take a look at our portfolio of impactful digital projects and client success stories.",
};


export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Banner
        title="Our Work"
        subtitle="Showcasing innovative solutions and successful projects that drive digital transformation"
        backgroundImage="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <StatsSection statsData={stats} />
        <ProjectGrid projectsData={projects} />
        <CtaSection />
      </main>
    </div>
  );
}
