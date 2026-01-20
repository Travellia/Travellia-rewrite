import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {/* Previous button */}
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 bg-black text-white rounded-full hover:bg-gray-800"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Page buttons */}
      <div className="flex items-center gap-2">
        {pages.map((page) => (
          <Button
            key={page}
            size="sm"
            className={`min-w-[36px] h-9 text-sm rounded-full ${
              page === currentPage
                ? "bg-primary text-white"
                : "bg-black text-white hover:bg-gray-800"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ))}
      </div>

      {/* Next button */}
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 bg-black text-white rounded-full hover:bg-gray-800"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
