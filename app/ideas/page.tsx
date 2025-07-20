export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Banner from "@/components/Banner";
import IdeaList from "@/components/Ideas/IdeaList";
import { fetchIdeas } from "@/lib/api";
import type { FilterParams, IdeasApiResponse } from "@/types";
import { Suspense } from "react";
import LoadingState from "@/components/LoadingState";

export const metadata: Metadata = {
  title: "Ideas - Suitmedia",
  description:
    "Explore fresh ideas and inspiring stories from the world of digital innovation.",
};

interface IdeasPageProps {
  searchParams: {
    page?: string;
    size?: string;
    sort?: "newest" | "oldest";
  };
}

export default async function IdeasPage({ searchParams }: IdeasPageProps) {
  const filters: FilterParams = {
    page: parseInt(searchParams.page || "1"),
    size: parseInt(searchParams.size || "10"),
    sort: searchParams.sort || "newest",
  };

  const initialData: IdeasApiResponse = await fetchIdeas(filters);

  return (
    <div className="min-h-screen bg-white">
      <Banner
        title="Ideas"
        subtitle="Discover innovative concepts and creative solutions that shape the future"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Suspense fallback={<LoadingState />}>
          <IdeaList initialData={initialData} initialFilters={filters} />
        </Suspense>
      </div>
    </div>
  );
}
