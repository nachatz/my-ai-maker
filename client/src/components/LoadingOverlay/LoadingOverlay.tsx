import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingOverlay({ isLoading }: { isLoading: boolean }) {
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        switch (prevText) {
          case "Loading":
            return "Loading.";
          case "Loading.":
            return "Loading..";
          case "Loading..":
            return "Loading...";
          default:
            return "Loading";
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-gray-300 bg-opacity-50 ${
        isLoading ? "block" : "hidden"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-white" style={{ minWidth: "80px" }}>
        {loadingText}
      </div>
    </motion.div>
  );
}
