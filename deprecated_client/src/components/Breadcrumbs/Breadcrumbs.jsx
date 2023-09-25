import React from "react";

export default function Breadcrumbs({ step }) {
  const steps = ["Encodings", "Transformations"]
  return (
    <section>
      <div className="items-center px-8 py-12 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-24">
        <div className="justify-center w-full mx-auto">
          <nav aria-label="Progress">
            <ol
              className="flex items-center justify-center mx-auto "
            >
              <li className="mr-5 font-bold">{steps[step]}</li>
              <li className="relative pr-8 sm:pr-20">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-black"></div>
                </div>
                <a
                  href="/"
                  className="relative flex items-center justify-center w-8 h-8 bg-black rounded-full hover:bg-blue-900"
                >
                  <span className="sr-only">Step 2</span>
                </a>
              </li>{" "}
              <li className="relative pr-8 sm:pr-20">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200"></div>
                </div>
                <a
                  href="/"
                  className="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-black rounded-full"
                  aria-current="step"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-black"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Step 3</span>
                </a>
              </li>
              <li className="relative pr-8 sm:pr-20">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200"></div>
                </div>
                <a
                  href="/"
                  className="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Step 4</span>
                </a>
              </li>
              <li className="relative pr-8 sm:pr-20">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200"></div>
                </div>
                <a
                  href="/"
                  className="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Step 4</span>
                </a>
              </li>
              <li className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200"></div>
                </div>
                <a
                  href="/"
                  className="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Step 5</span>
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
