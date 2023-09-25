import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../Dropdown/Dropdown";
import Loading from "../../Loading/Loading";

export default function LandingModal({
  response,
  handleFileChange,
  selectedFile,
}) {
  return (
    <>
      {response === null ? (
        <>
          <p className="text-sm text-gray-500">
            Upload your data in CSV format. Ensure you include a label column.
            We'll handle the rest. If you have any questions, please refer to
            our{" "}
            <Link
              to="/docs"
              className="text-primary-600 hover:text-primary-400"
            >
              documentation
            </Link>{" "}
            on preparing your data for training.
          </p>
          <Dropdown />
          <label
            htmlFor="fileInput"
            className="mt-10 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm cursor-pointer border border-gray-300 hover:bg-gray-50 focus:outline-none focus:border-primary-500 focus:ring-primary-500"
          >
            {selectedFile ? (
              <span>{selectedFile.name}</span>
            ) : (
              <span>Upload CSV</span>
            )}
            <input
              id="fileInput"
              type="file"
              accept=".csv"
              className="sr-only"
              onChange={handleFileChange}
            />
          </label>{" "}
        </>
      ) : (
        <>
          {response === "loading" ? (
            <div className="flex items-center">
              <Loading auth={false} />
              <h1 className="ml-2">Crunching weights...</h1>
            </div>
          ) : (
            <p>{response}</p>
          )}
        </>
      )}
    </>
  );
}
