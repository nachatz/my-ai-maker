import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Breadcrumbs } from "~/components";
import MetadataIntake from "./MetadataIntake/MetadataIntake";
import FeatureIntake from "./FeatureIntake/FeatureIntake";
import logo from "~/../public/myaimaker-logo.png";

export default function ModelIntake() {
  const crumbs = ["Metadata", "Data"];
  const [stage, setStage] = useState(0);
  const [view, setView] = useState([
    <MetadataIntake key={"intake"} />,
    <FeatureIntake key={"feature"} />,
  ]);

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

  const handleNextStage = () => {
    setStage(stage + 1 < view.length ? stage + 1 : stage);
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
          className="flex max-w-full flex-col items-center justify-center rounded-xl bg-white shadow-2xl"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          <img className="h-40" src={logo.src} alt="" />
          <div className="mt-5 p-4 pb-0 pt-0 sm:p-7 sm:pt-0">
            <div className="space-y-4 sm:space-y-6">
              {view[stage]}
              <div className="flex items-center justify-between">
                <Breadcrumbs
                  crumbs={crumbs}
                  stage={stage}
                  setStage={setStage}
                />
                <button
                  type="button"
                  className="mb-2 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary-500 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-400 disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => handleNextStage()}
                >
                  Next
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
