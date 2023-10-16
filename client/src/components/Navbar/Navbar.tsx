import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import Profiles from "./Profiles/Profiles";
import NavItems from "./NavItems/NavItems";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "~/lib/utils/utils";
import { navigation } from "./nav-options";
import "./Navbar.module.css";

// import { useSession } from "next-auth/react";

export default function Navbar({ page }: { page: string }) {
  const [scrolled, setScrolled] = useState(false);
  const dynamicPages = navigation.map((item) => { 
    item.current = page === item.name ? true : false;
    return item;
  })

  // const { data: sessionData } = useSession();
  // {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`position-0 fixed z-10 w-full bg-white ${
        scrolled ? "scrolled" : ""
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Handle desktop nav */}
              <NavItems navigation={dynamicPages} />
              <>
                <Searchbar />
                <Profiles />
              </>
            </div>
          </div>
          {/* Handle mobile nav */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {dynamicPages.map(
                (item: { name: string; href: string; current?: boolean }) => (
                  <Link key={item.name} href={item.href} passHref>
                    <Disclosure.Button
                      className={classNames(
                        Boolean(item.current)
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium",
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                ),
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
