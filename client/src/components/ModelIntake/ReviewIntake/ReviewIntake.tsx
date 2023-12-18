import type { ModelCreate } from "~/types";
import {
  PresentationChartLineIcon,
  CodeBracketSquareIcon,
  BuildingLibraryIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export default function ReviewIntake({ model }: { model: ModelCreate }) {
  return (
    <>
      <div className="flex items-center py-6 text-sm uppercase text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t after:ms-6 after:flex-[1_1_0%] after:border-t ">
        Review
      </div>
      <p className="text-sm text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t after:ms-6 after:flex-[1_1_0%] after:border-t ">
        Your generated model will appear in your dashboard. It&apos;s guaranteed
        to compile for the data you have provided. If it fails, you&apos;ll
        likely need to be more explicit with your data types. Don&apos;t worry,
        you can edit your model later.
      </p>

      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-3xl grid-cols-12 gap-6 lg:gap-8">
          <div className="col-span-6 text-center sm:col-span-4">
            <PresentationChartLineIcon className="mx-auto h-auto w-7 text-gray-800 md:w-9" />
            <div className="mt-2 sm:mt-6">
              <h3 className="text-lg font-semibold text-gray-800 ">
                {model.title}
              </h3>
            </div>
          </div>

          <div className="col-span-6 text-center sm:col-span-4">
            <CodeBracketSquareIcon className="mx-auto h-auto w-7 text-gray-800 md:w-9" />
            <div className="mt-2 sm:mt-6">
              <h3 className="text-lg font-semibold text-gray-800 ">
                {model.type}
              </h3>
            </div>
          </div>

          <div className="col-span-6 col-start-4 text-center sm:col-span-4">
            <BuildingLibraryIcon className="mx-auto h-auto w-7 text-gray-800 md:w-9" />
            <div className="mt-2 sm:mt-6">
              <h3 className="text-lg font-semibold text-gray-800 ">PyTorch</h3>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-start text-sm text-gray-800">
          <DocumentTextIcon className="h-auto w-2 text-gray-800 md:w-5" />
          <p className="ml-2">{model.description}</p>
        </div>
      </div>
    </>
  );
}
