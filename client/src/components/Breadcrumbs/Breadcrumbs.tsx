import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Breadcrumbs({
  crumbs,
  stage,
  setStage,
}: {
  crumbs: string[];
  stage: number;
  setStage: (state: number) => void;
}) {
  return (
    <section>
      <div className="mx-auto max-w-7xl items-center px-8 md:px-12 lg:px-16">
        <div className="mx-auto w-full justify-center">
          <nav className="mx-auto flex justify-center " aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              {crumbs.map((crumb, index) => (
                <li key={crumb}>
                  <div className="flex items-center">
                    {index > 0 && (
                      <ArrowRightIcon
                        className="md hydrated h-5 w-5 flex-shrink-0 text-gray-300"
                        name="chevron-forward-outline"
                        role="img"
                        aria-label="chevron forward outline"
                      ></ArrowRightIcon>
                    )}
                    <a
                      href="#_"
                      className={`ml-4 text-sm font-medium ${
                        stage === index ? "text-blue-500" : "text-gray-500"
                      } hover:scale-95 hover:text-gray-700`}
                      onClick={() => setStage(index)}
                    >
                      {crumb}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
