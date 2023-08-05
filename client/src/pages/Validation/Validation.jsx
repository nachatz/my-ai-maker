import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useValidationData } from "../../hooks/useValidationData";
import Flyout from "../../components/Flyout/Flyout";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverylay";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function CustomButton() {
  return (
    <div className="flex justify-center items-center">
      <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-primary-500 px-6 text-sm font-medium tracking-wide text-primary-500 shadow-lg shadow-primary-100 transition duration-300 hover:border-primary-400 hover:text-primary-600 hover:shadow-md hover:shadow-primary-200 focus:border-primary-700 focus:text-primary-700 focus:shadow-md focus:shadow-primary-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-primary-300 disabled:text-primary-300 disabled:shadow-none">
        <span>Next</span>
      </button>
    </div>
  );
}

export default function Validation() {
  const location = useLocation();
  const [metadata, setMetadata] = useState([]);
  const file = location?.state?.file ?? null;

  // There's also raw data in this return
  const { dataInfo } = useValidationData(file);
  useEffect(() => {
    setMetadata(dataInfo);
  }, [dataInfo]);

  const hoverStyles = {
    transitionDuration: "0.2s",
    transitionTimingFunction: "ease-in-out",
    boxShadow: "0 0 0 rgba(245, 101, 101, 0)",
  };

  const handleMouseOver = (event) => {
    event.target.style.boxShadow = "0 0 10px rgba(105, 101, 155, 0.7)";
  };

  const handleMouseOut = (event) => {
    event.target.style.boxShadow = "0 0 0 rgba(245, 101, 101, 0)";
  };

  return (
    <section>
      <h2 className="text-center font-semibold leading-7 text-indigo-600">
        Validate & Transform your data
      </h2>
      <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Decide the format of your data
      </p>
      <div className="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <h2 className="text-center mt-5 font-semibold leading-7 text-indigo-600">
          Features List
        </h2>
        <p className="text-center"> Recommended transforms listed by default</p>
        <div className="flex justify-center max-w-xl py-12 mx-auto text-left lg:max-w-7xl">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-12 text-center lg:grid-cols-5 lg:space-y-0">
              {metadata.length > 0 ? (
                metadata.map((item) => (
                  <div key={item.feature}>
                    <div>
                      <div
                        className={`flex items-center justify-center w-12 h-12 mx-auto text-black rounded-xl cursor-pointer relative overflow-hidden group hover:overflow-visible focus-visible:outline-none ${
                          item.feature === "label"
                            ? "bg-green-100 hover:bg-green-100"
                            : "bg-blue-100 hover:bg-blue-100"
                        }`}
                        aria-describedby="tooltip-05"
                        style={hoverStyles}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                      >
                        <span
                          role="tooltip"
                          id="tooltip-05"
                          className="invisible absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded bg-slate-700 p-2 text-xs text-white opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:top-full before:z-10 before:mb-2 before:-ml-1 before:border-x-4 before:border-t-4 before:border-x-transparent before:border-t-slate-700 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
                        >
                          Native variable type: {item.type[0]}
                        </span>
                        ❖
                      </div>
                      <span className="mt-2 text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-primary-600 bg-primary-200 uppercase last:mr-0 mr-1">
                        {item.feature}
                      </span>
                      <br></br>
                      <Flyout
                        type={item.type[1]}
                        feature={item.feature}
                        metadata={metadata}
                        setMetadata={setMetadata}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <LoadingOverlay active={dataInfo.length === 0} />
              )}
            </div>
          </div>
        </div>
      </div>
      <CustomButton />
      <Breadcrumbs />
    </section>
  );
}
