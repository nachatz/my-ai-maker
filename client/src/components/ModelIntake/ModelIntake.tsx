import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import MetadataIntake from "./MetadataIntake";
import geometry from "~/../public/photo/geometry.jpg";

export default function ModelIntake() {
  const [stage, setStage] = useState(0);
  const [view, setView] = useState([<MetadataIntake key={"intake"} />]);

  const variants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <form>
        <motion.div
          className="max-w-full rounded-xl bg-white shadow-2xl"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          <img
            className="h-40 w-full rounded-b-sm rounded-t-xl bg-gray-900 bg-cover shadow-md ring-1 ring-gray-400/10"
            src={geometry.src}
            alt=""
          />
          <div className="mt-5 p-4 pt-0 sm:p-7 sm:pt-0">
            <div className="space-y-4 sm:space-y-6">
              {view[stage]}{" "}
              <div className="mb-5 flex justify-center gap-x-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary-500 px-4 py-3 text-sm font-semibold text-white hover:bg-primary-400 disabled:pointer-events-none disabled:opacity-50"
                >
                  Format data
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </form>
    </motion.div>
  );
}
