import React from "react";
import { useLocation } from "react-router-dom";
import { useValidationData } from "../../hooks/useValidationData";
import Loading from "../../components/Loading/Loading";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

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
        <h2 className="text-left mt-5 font-semibold leading-7 text-black-600">
          Features List
        </h2>
        <p>* recommended transforms listed</p>
        <div className="max-w-xl py-12 mx-auto text-left lg:max-w-7xl">
          <div>
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
                        {item.feature} - {item.type}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <Loading/>
              )}
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs />
    </section>
  );
}
