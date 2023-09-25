import React from 'react';

export default function Transformations() {
 
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
              {/* Data */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
