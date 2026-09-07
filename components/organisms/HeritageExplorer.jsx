"use client";

import { useState } from "react";
import SearchForm from "../molecules/SearchForm";
import HeritageGrid from "./HeritageGrid";
import heritageSites from "../../data/heritageSites";

export default function HeritageExplorer() {
  const [query, setQuery] = useState("");

  const filteredSites = heritageSites.filter((site) => {
    const searchText = query.toLowerCase();

    return (
      site.name.toLowerCase().includes(searchText) ||
      site.location.toLowerCase().includes(searchText) ||
      site.category.toLowerCase().includes(searchText)
    );
  });

  return (
    <div>
      <div className="mb-8 flex justify-center">
        <SearchForm onSearch={setQuery} />
      </div>

      {filteredSites.length > 0 ? (
        <HeritageGrid sites={filteredSites} />
      ) : (
        <div
          className="
            rounded-2xl
            border
            border-dashed
            border-gray-300
            px-6
            py-12
            text-center
          "
        >
          <h2 className="text-xl font-bold text-gray-900">
            No heritage sites found
          </h2>

          <p className="mt-2 text-gray-600">
            Try searching for another destination,
            municipality, or heritage category.
          </p>
        </div>
      )}
    </div>
  );
}