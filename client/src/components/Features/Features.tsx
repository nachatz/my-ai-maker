import React from "react";
import type { FeaturesProps } from "~/types";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export default function Features({ content, features }: FeaturesProps) {
  const icons = [
    <FingerPrintIcon key="print" className="h-8 w-8" />,
    <ArrowPathIcon key="arrow" className="h-8 w-8" />,
    <LockClosedIcon key="lock" className="h-8 w-8" />,
    <CloudArrowUpIcon key="cloud" className="h-8 w-8" />,
  ];

  return (
    <div className="mt-[19rem] rounded-md py-24 transition duration-500 ease-in-out sm:mt-[10rem] sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            {content.subtitle}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {content.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {content.description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, i) => {
              return (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-400">
                      {icons[i]}
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-text-600">
                    {feature.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
