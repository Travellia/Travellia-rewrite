"use client";

import { useState, useEffect } from "react";
import PackageCard from "./PackageCard";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 6;

export default function PackagesClient({ packages }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(packages.length / ITEMS_PER_PAGE);

  // Automatically adjust currentPage if it exceeds totalPages
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
    if (totalPages === 0) {
      setCurrentPage(1); // fallback if no items
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPackages = packages.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="w-full space-y-10">
      {/* Cards - 2 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {currentPackages.map((pkg) => (
          <div key={pkg.id} className="flex justify-center">
            <PackageCard data={pkg} />
          </div>
        ))}
      </div>

      {/* Pagination - always visible */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
