import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Breadcrumbs } from "~/components";
import { ToastContainer, toast } from "react-toastify";
import type { Row, ModelCreate } from "~/types";
import MetadataIntake from "./MetadataIntake/MetadataIntake";
import FeatureIntake from "./FeatureIntake/FeatureIntake";
import logo from "~/../public/myaimaker-logo.png";
import "react-toastify/dist/ReactToastify.css";

export default function ModelIntake() {
  const [stage, setStage] = useState(0);
  const [rows, setRows] = useState<Row[]>([]);
  const [model, setModel] = useState<ModelCreate>({
    title: "",
    description: "",
    type: "",
  });

  const crumbs = ["Metadata", "Data"];
  const view = [
    <MetadataIntake key={"intake"} model={model} setModel={setModel} />,
    <FeatureIntake key={"feature"} rows={rows} setRows={setRows} />,
  ];

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

  /**
   * Validates the stage data to check if the model is complete.
   *
   * @param {ModelCreate} stageData - The stage data to be validated.
   * @return {boolean} Returns true if the model is complete, false otherwise.
   */
  const validateStage = (stageData: ModelCreate, disabled = false) => {
    const isModelComplete = Object.values(model).every(
      (value) => value !== undefined && value.trim() !== "",
    );

    if (!isModelComplete && !disabled) {
      toast.info("Please fill in all fields", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    return isModelComplete;
  };

  /**
   * Handles the next stage of the process.
   *
   * @return {void} This function does not return a value.
   */
  const handleNextStage = () => {
    if (validateStage(model)) {
      setStage(stage + 1 < view.length ? stage + 1 : stage);
    }
  };

  return (
    <>
      <ToastContainer limit={1} />
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
                    validModel={validateStage(model, true)}
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
    </>
  );
}
