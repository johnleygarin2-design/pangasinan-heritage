"use client";

import { useState } from "react";
import Icon from "../atoms/Icon";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl"
      role="search"
    >
      <label
        htmlFor="heritage-search"
        className="sr-only"
      >
        Search heritage sites
      </label>

      <input
        id="heritage-search"
        type="search"
        value={query}
        onChange={(event) =>
          setQuery(event.target.value)
        }
        placeholder="Search heritage sites..."
        className="
          min-h-11
          flex-1
          rounded-l-lg
          border
          border-gray-300
          px-4
          text-sm
          outline-none
          focus:border-emerald-600
          focus:ring-2
          focus:ring-emerald-600
        "
      />

      <button
        type="submit"
        aria-label="Search"
        className="
          min-h-11
          rounded-r-lg
          bg-emerald-700
          px-4
          text-white
          hover:bg-emerald-800
          focus:outline-none
          focus:ring-2
          focus:ring-emerald-600
        "
      >
        <Icon name="search" />
      </button>
    </form>
  );
}