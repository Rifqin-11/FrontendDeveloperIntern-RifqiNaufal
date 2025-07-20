'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FilterParams } from '@/types';

interface FilterControlsProps {
  filters: FilterParams;
  onFiltersChange: (filters: Partial<FilterParams>) => void;
  totalItems: number;
}

export default function FilterControls({ filters, onFiltersChange, totalItems }: FilterControlsProps) {
  const handleSortChange = (value: string) => {
    onFiltersChange({ sort: value as 'newest' | 'oldest', page: 1 });
  };

  const handleSizeChange = (value: string) => {
    onFiltersChange({ size: parseInt(value), page: 1 });
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 p-6 bg-gray-50 rounded-lg">
      <div className="text-gray-600">
        Showing <span className="font-semibold text-gray-900">{totalItems}</span> total ideas
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Show per page:</span>
          <Select value={filters.size.toString()} onValueChange={handleSizeChange}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Sort by:</span>
          <Select value={filters.sort} onValueChange={handleSortChange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}