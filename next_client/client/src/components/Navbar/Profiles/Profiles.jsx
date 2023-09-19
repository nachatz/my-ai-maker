import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { classNames } from "../../../lib/utils/utils";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';

export default function Profiles() {
  const { data: sessionData } = useSession();

  return (
    <>
      {sessionData ? (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="rounded-full bg-white p-1 text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">Open user menu</span>
                {sessionData.user?.image? (
                  <img
                    className="h-8 w-8 rounded-full"
                    src={sessionData.user.image}
                    alt={sessionData.user.name}
                  />
                ) : (
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/avatar-1810626-1536314.png?f=avif&w=256"
                  />
                )}
              </Menu.Button>
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
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
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                      onClick={() =>
                        signOut()
                      }
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ) : (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="flex items-center justify-center space-x-4 h-full">
            <a
              className="relative inline-block text-black custom-link"
              aria-current="page"
              href="/"
            >
              <button onClick={() => signIn()}>Log in</button>
            </a>
            <button
              to="/"
              className="relative inline-block text-black custom-link"
              aria-current="page"
              onClick={() => signIn()}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
}
