import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Validation from "../Validation/Validation";
import Transformations from "../Transformations/Transformations";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function CustomButton({ setStep, step, components }) {
  const update = () => {
    if (step !== components.length - 1) {
      setStep(step + 1);
    } else {
      if (!toast.isActive("format")) {
        toast.error("You must resolve the current requirements", {
          toastId: "format",
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={update}
        className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-primary-500 px-6 text-sm font-medium tracking-wide text-primary-500 shadow-lg shadow-primary-100 transition duration-300 hover:border-primary-400 hover:text-primary-600 hover:shadow-md hover:shadow-primary-200 focus:border-primary-700 focus:text-primary-700 focus:shadow-md focus:shadow-primary-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-primary-300 disabled:text-primary-300 disabled:shadow-none"
      >
        <span>Next</span>
      </button>
    </div>
  );
}

export default function Format() {
  const [step, setStep] = useState(0);
  const components = [<Validation />, <Transformations />];

  return (
    <>
      {components[step]}
      <CustomButton setStep={setStep} step={step} components={components} />
      <Breadcrumbs step={step} />
      <ToastContainer
        position="bottom-right"
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        limit={1}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
