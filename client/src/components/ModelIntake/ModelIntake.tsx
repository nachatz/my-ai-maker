// state and libraries
import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { ModelsService } from "~/services";

//components
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Breadcrumbs, LoadingOverlay } from "~/components";
import MetadataIntake from "./MetadataIntake/MetadataIntake";
import FeatureIntake from "./FeatureIntake/FeatureIntake";
import ReviewIntake from "./ReviewIntake/ReviewIntake";

// variables and types
import type { Row, ModelCreate, AiMakerResponse } from "~/types";
import { variants } from "./variants";

// assets
import logo from "~/../public/myaimaker-logo.png";
import "react-toastify/dist/ReactToastify.css";

export default function ModelIntake() {
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);
  const [stage, setStage] = useState(0);
  const [rows, setRows] = useState<Row[]>([]);
  const [model, setModel] = useState<ModelCreate>({
    title: "",
    description: "",
    type: "",
  });

  const crumbs = ["Metadata", "Data", "Review"];
  const view = [
    <MetadataIntake key={"intake"} model={model} setModel={setModel} />,
    <FeatureIntake key={"feature"} rows={rows} setRows={setRows} />,
    <ReviewIntake key={"review"} model={model} />,
  ];

  const isComplete = stage === view.length - 1;

  /**
   * Validates the stage data to check if the model is complete.
   *
   * @param {ModelCreate} stageData - The stage data to be validated.
   * @return {boolean} Returns true if the model is complete, false otherwise.
   */
  const validateStage = (stageData: ModelCreate, disabled = false) => {
    let isModelComplete = false;
    if (stage == 0) {
      isModelComplete = Object.values(model).every(
        (value) => value !== undefined && value.trim() !== "",
      );
    } else {
      isModelComplete = rows != null && rows.length > 0;
    }

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

  /**
   * Handles the submission of the model.
   *
   * @return {Promise<void>} - A promise that resolves when the model submission is complete.
   */
  const handleModelSubmit = async () => {
    setIsGenerating(true);
    const data: AiMakerResponse = await ModelsService.requestGenerateModel(
      model,
      rows,
    );

    if (data.statusCode === 200) {
      router.reload();
      return;
    }

    toast.error("Model failed to generate... try again later", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setIsGenerating(false);
  };

  return (
    <>
      <ToastContainer limit={1} />
      {isGenerating ? (
        <LoadingOverlay isLoading={isGenerating} />
      ) : (
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
                      onClick={isComplete ? handleModelSubmit : handleNextStage}
                    >
                      {isComplete ? "Submit" : "Next"}
                      <ArrowRightIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </form>
        </motion.div>
      )}
    </>
  );
}
