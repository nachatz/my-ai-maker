import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  HashtagIcon,
  DocumentIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const routes = [
  {
    name: "Documentation",
    href: "/docs",
    target: "_blank",
    icon: QuestionMarkCircleIcon,
  },
];

export default function Flyout({ feature, metadata, setMetadata }) {
  const encodingVals = [
    {
      name: "Ordinal",
      diplay: "ordinal",
      description: "Transform your data 1-n based on unique values",
      icon: HashtagIcon,
      selected: true,
    },
    {
      name: "None",
      display: "none",
      description: "Leave your data formatted as is, this may not validate",
      icon: DocumentIcon,
      selected: false,
    },
  ];

  const [encodings, setEncodings] = useState(encodingVals);
  const handleClick = (e) => {
    const updatedEncodings = encodings.map((item) => ({
      ...item,
      selected: item.name === e.name,
    }));

    setEncodings(updatedEncodings);

    setMetadata((prevMetadata) =>
      prevMetadata.map((item) =>
        item.feature === feature
          ? { ...item, type: [item.type[0], e.name] }
          : item
      )
    );
  };

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span>Transformations</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {encodings.map((item) => (
                <div
                  key={item.name}
                  onClick={() => handleClick(item)}
                  className={`group relative flex gap-x-6 rounded-lg p-4 cursor-pointer ${
                    item.selected
                      ? "bg-primary-50 text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="divide-x divide-gray-900/5 bg-gray-50">
              {routes.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.target}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
