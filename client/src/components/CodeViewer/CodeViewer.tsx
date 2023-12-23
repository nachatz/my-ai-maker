import {
  AcademicCapIcon,
  BookOpenIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Select from "react-select";
import { api } from "~/utils/api";
import { useModelLayoutContext } from "~/context";

export default function CodeViewer() {
  const { code } = useModelLayoutContext();
  const model = api.models.getModelById.useQuery({ modelId: code.id });
  const title = model.data?.title;
  const description = model.data?.description;
  const type = model.data?.type;
  const generatedCode = model.data?.modelString;

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
    <>
      <motion.div
        className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <div className="mx-auto max-w-[85rem] rounded-lg bg-white px-4 py-10 shadow-xl sm:px-6 lg:px-8 lg:py-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="lg:w-3/4">
              <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
              <p className="mt-3 text-gray-800">{description}</p>
            </div>

            <div className="space-y-6 lg:space-y-10">
              <div className="flex">
                <BookOpenIcon className="mx-auto inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full bg-white text-gray-800" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base font-semibold text-gray-800 ">
                    Python
                  </h3>
                  <p className="mt-1 text-gray-600 ">
                    Python is a general-purpose programming language. You can
                    learn more <a>here</a>
                  </p>
                </div>
              </div>

              <div className="flex">
                <CodeBracketIcon className="mx-auto inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full bg-white text-gray-800" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base font-semibold text-gray-800 ">
                    PyTorch
                  </h3>
                  <p className="mt-1 text-gray-600 ">
                    PyTorch is a machine learning framework based on the Torch
                    library
                  </p>
                </div>
              </div>

              <div className="flex">
                <AcademicCapIcon className="mx-auto inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full bg-white text-gray-800" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base font-semibold text-gray-800 ">
                    {type}
                  </h3>
                  <p className="mt-1 text-gray-600 ">
                    Linear regression is a simple statistical model that
                    approximates scalar data
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex h-10 w-full items-center">
            <Select
              className="border-1 mt-5 flex-grow rounded-lg border-gray-300 shadow-sm"
              id="af-submit-app-category"
              placeholder="main.py"
              isSearchable={true}
            />
            <div className="flex-grow"></div>
            <button className="mt-5 items-center rounded-md bg-primary-700 px-3 py-0.5 text-center text-white shadow-md hover:bg-gray-600">
              See features
            </button>
          </div>
        </div>

        <div className="shadow-xl">
          <SyntaxHighlighter language="python" style={vs} showLineNumbers>
            {generatedCode ? generatedCode.trim() : "No code generated yet"}
          </SyntaxHighlighter>
        </div>
      </motion.div>
    </>
  );
}
