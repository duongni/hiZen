"use client";

import { useState } from "react";
import SearchState from "@/components/SearchState";

const SearchBar = () => {
  const [state, setState] = useState("");
  const handleSearch = () => {};
  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchState state={state} setState={setState} />
      </div>
    </form>
  );
};

export default SearchBar;
