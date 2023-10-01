import React from "react";
import { classNames } from "../../../lib/utils/utils";
import Link from 'next/link';

export default function NavItems({ navigation } : any) {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="block h-15 w-20 lg:hidden"
          src="myaimaker-logo.png"
          alt="MyAiMaker Logo"
        />
        <img
          className="hidden h-15 w-20  lg:block"
          src="myaimaker-logo.png"
          alt="MyAiMaker Logo"
        />
      </div>
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex items-center justify-center space-x-4 h-full">
          {navigation.map((item: any) => (
            <Link
              href={item.href}
              key={item.name}
              className={classNames(
                "relative inline-block",
                item.current ? "text-black" : "text-gray-400",
                "custom-link"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
