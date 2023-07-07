import React from "react";

function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-10 sm:py-32 lg:px-8 animate-slide-in">
        <div className="text-center w-100">
          <p className="text-base font-semibold text-primary-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-text-600">
            This page doesn't exist yet, you're ahead of the curve.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
