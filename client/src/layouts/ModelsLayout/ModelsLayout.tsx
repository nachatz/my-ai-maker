import React, { useState } from "react";
import { api } from "~/utils/api";
import {
  ModelsNav,
  CodeViewer,
  RouteHeader,
  CardGrid,
  ModelIntake,
  LoadingOverlay,
} from "~/components";
import { useModelLayoutContext } from "~/context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

export default function ModelsLayout() {
  const { data, status } = useSession();
  const { push } = useRouter();
  const { view } = useModelLayoutContext();
  const [isOpen, setIsOpen] = useState(false);
  const models = api.models.getModels.useQuery();

  const viewComponents: Record<string, React.ReactNode> = {
    new: <ModelIntake key="modelIntake" />,
    view: <CodeViewer key={"codeViewer"} />,
    default: (
      <>
        {models.data !== undefined && (
          <CardGrid key="cardGrid" cards={models.data} />
        )}
      </>
    ),
  };

  if (status === "loading") return <LoadingOverlay isLoading={true} />;
  if (!data) {
    void push(`/auth/login`);
    return null;
  }

  return (
    <div className="flex flex-col">
      <RouteHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="">
        <ModelsNav profile={data.user} isOpen={isOpen} setIsOpen={setIsOpen} />
        <AnimatePresence mode="wait">
          {viewComponents[view] ?? viewComponents.default}
        </AnimatePresence>
      </div>
    </div>
  );
}
