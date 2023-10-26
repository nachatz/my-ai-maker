import { Slide } from "~/components";

export default function RouteHeader({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const handleNav = () => {
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  };

  return (
    <div className="sticky inset-x-0 top-0 z-20 border-y bg-white px-4 shadow-inner sm:px-6 md:px-8">
      <Slide left={false} duration={0.6} type="tween">
        <div className="flex items-center py-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
            onClick={() => handleNav()}
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="h-5 w-5"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <ol
            className="mt-15 ml-3 flex min-w-0 items-center whitespace-nowrap"
            aria-label="Breadcrumb"
          >
            <li className="flex items-center text-sm text-gray-800 ">
              Database
              <svg
                className="mx-3 h-2.5 w-2.5 flex-shrink-0 overflow-visible text-gray-400 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </li>
            <li
              className="truncate text-sm font-semibold text-gray-800 "
              aria-current="page"
            >
              MyModels
            </li>
          </ol>
        </div>
      </Slide>
    </div>
  );
}
