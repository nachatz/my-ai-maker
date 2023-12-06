import { useState } from "react";
import { ModelsNav, RouteHeader, CardGrid, ModelIntake } from "~/components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

const mockedData = [
  {
    title: "MyModel1",
    type: "feed forward",
    description: "My sample model that does nothing xdd",
    code: "print('hi')",
    icon: "global",
    color: "blue",
  },
  {
    title: "MyModel2",
    type: "feed forward",
    description: "My sample model2 that does nothing xdd",
    code: "print('hi')",
    icon: "variable",
    color: "black",
  },
];

export default function ModelsLayout() {
  const { data, status } = useSession();
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("current");

  if (status === "loading") return <div>Loading...</div>;
  if (!data) {
    void push(`/auth/login`);
    return null;
  }

  return (
    <div className="flex flex-col">
      <RouteHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="">
        <ModelsNav
          profile={data.user}
          isOpen={isOpen}
          view={view}
          setIsOpen={setIsOpen}
          setView={setView}
        />
        <AnimatePresence mode="wait">
          {view === "new" ? (
            <ModelIntake key="modelIntake" />
          ) : (
            <CardGrid key="cardGrid" cards={mockedData} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
