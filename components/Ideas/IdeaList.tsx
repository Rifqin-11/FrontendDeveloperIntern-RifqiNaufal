"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import FilterControls from "@/components/FilterControls";
import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import LoadingState from "@/components/LoadingState";
import EmptyState from "@/components/EmptyState";
import ErrorState from "@/components/ErrorState";
import { fetchIdeas } from "@/lib/api";
import type { Idea, FilterParams, IdeasApiResponse } from "@/types";

interface IdeaListProps {
  initialData: IdeasApiResponse;
  initialFilters: FilterParams;
}

export default function IdeaList({
  initialData,
  initialFilters,
}: IdeaListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [ideas, setIdeas] = useState<Idea[]>(initialData.data);
  const [totalPages, setTotalPages] = useState(initialData.meta.last_page);
  const [totalItems, setTotalItems] = useState(initialData.meta.total);
  const [filters, setFilters] = useState<FilterParams>(initialFilters);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to update the URL with new filters
  const updateURL = useCallback(
    (newFilters: FilterParams) => {
      const params = new URLSearchParams();
      params.set("page", newFilters.page.toString());
      params.set("size", newFilters.size.toString());
      params.set("sort", newFilters.sort);
      router.push(`/ideas?${params.toString()}`, { scroll: false });
    },
    [router]
  );

  // Function to load ideas from the API
  const loadIdeas = useCallback(async (currentFilters: FilterParams) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchIdeas(currentFilters);
      setIdeas(response.data);
      setTotalPages(response.meta.last_page);
      setTotalItems(response.meta.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load ideas");
      setIdeas([]);
      setTotalPages(1);
      setTotalItems(0);
    } finally {
      setLoading(false);
    }
  }, []);

  // Effect to re-fetch data when searchParams change
  useEffect(() => {
    const urlPage = parseInt(searchParams.get("page") || "1");
    const urlSize = parseInt(searchParams.get("size") || "10");
    const urlSort =
      (searchParams.get("sort") as "newest" | "oldest") || "newest";
    const currentFilters = { page: urlPage, size: urlSize, sort: urlSort };

    setFilters(currentFilters);
    loadIdeas(currentFilters);
  }, [searchParams, loadIdeas]);

  // Handler for when filters are changed by the user
  const handleFiltersChange = (newFilters: Partial<FilterParams>) => {
    const updatedFilters = { ...filters, page: 1, ...newFilters };
    updateURL(updatedFilters);
  };

  // Handler for when page is changed
  const handlePageChange = (page: number) => {
    const updatedFilters = { ...filters, page };
    updateURL(updatedFilters);
  };

  return (
    <>
      <FilterControls
        filters={filters}
        onFiltersChange={handleFiltersChange}
        totalItems={totalItems}
      />

      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState onRetry={() => loadIdeas(filters)} />
      ) : ideas.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ideas.map((idea, index) => (
              <PostCard key={idea.id} idea={idea} index={index} />
            ))}
          </motion.div>

          <Pagination
            currentPage={filters.page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}
