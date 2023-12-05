import { useRouter } from "next/router";
import { customDropdown } from "./dropdown-options";
import { ModelsService } from "~/services";
import type { Fetch, Model } from "~/types";
import Select from "react-select";

export default function MetadataIntake() {
  const router = useRouter();
  const data: Array<Model> = [];
  const error = null;
  const isLoading = false;
  // const { data, error, isLoading }: Fetch<Model> =
  //   ModelsService.useAvailableModels();

  // if (error) return <p>{error.message}</p>;
  // if (!isLoading && !data) void router.push("/");

  const options = data
    ? data.map((model: Model) => ({
        value: model.name.toLowerCase(),
        label: model.name,
      }))
    : [];

  return (
    <>
      <div className="flex items-center py-6 text-sm uppercase text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t after:ms-6 after:flex-[1_1_0%] after:border-t ">
        Metadata Intake
      </div>
      <p className="text-sm text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t after:ms-6 after:flex-[1_1_0%] after:border-t ">
        You can double click to modify any of your features. Add in specific
        encodings, transformations, data types, etc. By default, we use our
        recommended selections
      </p>
      <div className="space-y-2">
        <label
          htmlFor="af-submit-app-project-name"
          className="mt-2.5 inline-block text-sm font-medium text-gray-800"
        >
          Model Title*
        </label>
        <input
          id="af-submit-app-project-name"
          type="text"
          autoComplete="off"
          className="w-full cursor-text rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm hover:border-black"
          placeholder="Enter project name"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="af-submit-app-category"
          className="mt-2.5 inline-block text-sm font-medium text-gray-800"
        >
          Model Type*
        </label>
        <Select
          className="border-1 rounded-lg border-gray-300 shadow-sm"
          id="af-submit-app-category"
          placeholder="Select a model type"
          isClearable={true}
          isSearchable={true}
          isLoading={isLoading}
          isDisabled={isLoading}
          styles={customDropdown}
          options={options}
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="af-submit-app-description"
          className="mt-2.5 inline-block text-sm font-medium text-gray-800"
        >
          Description
        </label>
        <textarea
          id="af-submit-app-description"
          className="w-full cursor-text resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm hover:border-black"
          rows={6}
          placeholder="A succinct explanation of your model"
        ></textarea>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="af-submit-app-upload-images"
          className="mt-2.5 inline-block text-sm font-medium text-gray-800 "
        >
          Upload schema [coming soon]
        </label>

        <label
          htmlFor="af-submit-app-upload-images"
          className="group block rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 p-4 text-center sm:p-7"
        >
          <input
            id="af-submit-app-upload-images"
            name="af-submit-app-upload-images"
            type=""
            className="sr-only"
          />
          <svg
            className="mx-auto h-10 w-10 text-gray-400 "
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
            />
            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
          </svg>
          <span className="mt-2 block text-sm text-gray-800 ">
            Browse your device or{" "}
            <span className="text-blue-600 group-hover:text-blue-700">
              drag in
            </span>
          </span>
          <span className="mt-1 block text-xs text-gray-500">
            Currently disabled
          </span>
        </label>
      </div>
    </>
  );
}
