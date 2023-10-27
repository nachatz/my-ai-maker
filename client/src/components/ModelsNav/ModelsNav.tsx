import { useEffect } from "react";
import type { Session } from "next-auth/core/types";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { classNames } from "~/lib/utils/utils";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ModelsNav({
  profile,
  isOpen,
  setIsOpen,
}: {
  profile: Session["user"];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  useEffect(() => {
    function handleWindowResize() {
      const isLargerScreen = window.innerWidth > 640;
      if (isLargerScreen) {
        setIsOpen(true);
      }
    }

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [setIsOpen]);

  return (
    <>
      <div className="rounded-b-md bg-gray-50">
        <div
          id="application-sidebar"
          className={`hs-overlay scrollbar-y fixed bottom-0 left-0 top-12 w-64 transform overflow-y-auto rounded-r-xl border-r border-gray-200 bg-white pb-10 pt-7 shadow-2xl transition-all duration-1000 ${
            isOpen ? "lg:translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="px-6">
            <Link
              className="flex-none text-xl font-semibold "
              href="/"
              aria-label="Brand"
            >
              MyAiMaker
            </Link>
          </div>

          <nav
            className="hs-accordion-group flex w-full flex-col flex-wrap p-6"
            data-hs-accordion-always-open
          >
            <ul className="space-y-1.5">
              <li>
                <p className="flex cursor-default items-center gap-x-3.5 rounded-md bg-gray-100 px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100  ">
                  <svg
                    className="h-3.5 w-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"></path>
                    <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"></path>
                  </svg>
                  MyModels
                </p>
              </li>{" "}
              <li>
                <Link
                  className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100  "
                  href="/"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                    />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <a
                  className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100"
                  href=""
                >
                  <svg
                    className="h-3.5 w-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0.5a.5.5 0 0 1 .5.5V7h6.5a.5.5 0 0 1 0 1H8v6.5a.5.5 0 0 1-1 0V8H0.5a.5.5 0 0 1 0-1H7V0.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  New Model
                </a>
              </li>
            </ul>
          </nav>
          <div className="right-0 ml-6 flex items-center pr-0 sm:static">
            <Menu as="div">
              <div className="absolute bottom-1/4 right-[45%]">
                <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  {profile?.image ? (
                    <motion.img
                      className="h-10 w-10 rounded-full"
                      src={profile.image}
                      alt="user"
                      whileHover={{ scale: 1.05 }}
                    />
                  ) : (
                    <motion.img
                      className="h-10 w-10 rounded-full"
                      src="https://cdn.iconscout.com/icon/premium/png-512-thumb/avatar-1810626-1536314.png?f=avif&w=256"
                      alt="user"
                      whileHover={{ scale: 1.05 }}
                    />
                  )}
                </Menu.Button>
                <p className="absolute left-[-70%] mt-5">{profile?.name}</p>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute bottom-8 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:bottom-[12%] sm:right-[15%]">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700",
                        )}
                      >
                        Your Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700",
                        )}
                      >
                        Settings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href=""
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700",
                        )}
                        onClick={() => void signOut()}
                      >
                        Sign out
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}
