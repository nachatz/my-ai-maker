import React, { useState, type ChangeEvent } from "react";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
  };

  return (
    <div className="lg:block md:absolute top-[20px] right-[150px] hidden">
      <input
        type="text"
        placeholder="Search LearnAI posts..."
        value={searchTerm}
        onChange={handleInputChange}
        className="align-middle items-center  px-3 py-0.3 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-0.5 focus:ring-gray-500"
      />
      <button
        onClick={handleSearch}
        className="text-center align-middle items-center ml-2 px-3 py-0.5 bg-gray-700 text-white rounded-md hover:bg-gray-600"
      >
        Search
      </button>
    </div>
  );
}
