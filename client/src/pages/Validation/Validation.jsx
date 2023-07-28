import React from "react";
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
  const file = location?.state?.file ?? null;

  // data is also returned
  const { dataInfo } = useValidationData(file);

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
              {dataInfo.length > 0 ? (
                dataInfo.map((item) => (
                  <div key={item.feature}>
                    <div>
                      <div
                        className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl hover:bg-blue-100 cursor-pointer"
                        style={hoverStyles}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                      >
                        ❖
                      </div>
                      <p className="mt-4 text-lg font-medium leading-6 text-black">
                        {item.feature} ({item.type[1]})
                      </p>
                      <Flyout />
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
