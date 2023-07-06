import React, { useState } from "react";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
  };

  return (
    <div className="flex items-center hidden lg:flex">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-800"
      >
        Search
      </button>
    </div>
  );
}
