import React from "react";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/20/solid";
import type { PricingProps } from "~/types";

export default function Pricing({ features }: PricingProps) {
  return (
    <div className="py-24 sm:py-32 mt-20 rounded-md hover:shadow-md transition duration-500 ease-in-out">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            No commitments
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The application is currently in beta. Pricing is subject to change,
            but don&apos;t worry, we&apos;ll always notify you beforehand. For now, you
            can use the application for free
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Beta Access
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Access to the application right now is currently free, you don&apos;t
              even need to make an account for simple models. If you&apos;d like to
              manage your models and data, we recommend making an account.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-primary-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Start simple, then scale
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $0
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <Link
                  href="/"
                  className="mt-10 block w-full rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Register
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  No credit card required and no newsletter sign up. We&apos;ll only
                  contact you on major changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
