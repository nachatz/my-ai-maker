import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="animate-slide-in grid place-items-center px-6 py-10 sm:py-32 lg:px-8">
        <div className="w-100 text-center">
          <p className="text-base font-semibold text-primary-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-text-600">
            This page doesn&apos;t exist yet, you&apos;re ahead of the curve.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              onClick={() => (document.body.style.overflowY = "auto")}
              className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
