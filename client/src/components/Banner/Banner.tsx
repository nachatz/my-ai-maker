import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="absolute bottom-0 hidden items-center justify-center md:flex">
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <p className="text-center text-sm leading-6 text-text-900">
            <strong className="font-semibold">Modern ML</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            Register an account and cache your models for free. You&apos;ll be
            able to navigate here to see predictions and productionalize your
            models
          </p>
          <Link
            href="/auth/login"
            className="flex-none rounded-full bg-primary-600 px-3.5 py-1 text-sm font-semibold text-white shadow-md hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
          >
            Register <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
