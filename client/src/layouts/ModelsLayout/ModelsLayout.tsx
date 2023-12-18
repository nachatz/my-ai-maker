import { useState } from "react";
import { api } from "~/utils/api";
import {
  ModelsNav,
  RouteHeader,
  CardGrid,
  ModelIntake,
  LoadingOverlay,
} from "~/components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

export default function ModelsLayout() {
  const { data, status } = useSession();
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("current");
  const models = api.models.getModels.useQuery();

  if (status === "loading") return <LoadingOverlay isLoading={true} />;
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
            <>
              {models.data !== undefined && (
                <CardGrid key="cardGrid" cards={models.data} />
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
