import React from "react";
import { useEffect, useState } from "react";

function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`bg-white shadow-lg rounded p-8 max-w-md transform transition-transform duration-500 ${
          isMounted
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Page Not Found</h1>
        <p className="text-lg text-center">
          The page you're looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
