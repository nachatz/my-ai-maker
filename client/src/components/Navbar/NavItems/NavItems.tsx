import React from "react";
import Link from "next/link";
import styles from "../Navbar.module.css";
import { classNames } from "~/lib/utils/utils";
import type { NavItemsProps } from "~/types";

export default function NavItems({ navigation }: NavItemsProps) {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="h-15 block w-20 lg:hidden"
          src="myaimaker-logo.png"
          alt="MyAiMaker Logo"
        />
        <img
          className="h-15 hidden w-20  lg:block"
          src="myaimaker-logo.png"
          alt="MyAiMaker Logo"
        />
      </div>
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex h-full items-center justify-center space-x-4">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className={classNames(
                "relative inline-block",
                item.current ? "text-black" : "text-gray-400",
                styles.customLink,
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
