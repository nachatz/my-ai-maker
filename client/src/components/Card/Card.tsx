import { useState } from "react";
import { api } from "~/utils/api";
import {
  GlobeAltIcon,
  VariableIcon,
  CubeTransparentIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";
import type { CardType } from "~/types";
import { useRouter } from "next/router";

type IconMap = Record<
  string,
  React.ComponentType<React.RefAttributes<SVGSVGElement>>
>;

{
  /*(iconMap[card.icon] ??
 const color = {
  backgroundColor: card.color ?? "blue",
  stroke: card.color ?? "blue",
}; */
}

const iconMap: IconMap = {
  global: GlobeAltIcon,
  variable: VariableIcon,
  cube: CubeTransparentIcon,
  cloud: CloudIcon,
};

export default function Card(card: CardType) {
  const [isViewed, setViewed] = useState(false);
  const router = useRouter();
  const deleteModelMutation = api.models.deleteModel.useMutation();
  const SelectedIcon = CubeTransparentIcon;
  const color = {
    backgroundColor: "blue",
    stroke: "blue",
  };

  const handleDelete = async (): Promise<void> => {
    await deleteModelMutation.mutateAsync({ id: card.id });
    router.reload();
  };

  return (
    <div className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white shadow-sm">
      {!isViewed ? (
        <>
          <div
            className="flex h-52 flex-col items-center justify-center rounded-t-xl"
            style={color}
          >
            <svg
              className="h-28 w-28"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="10" fill="white" />
              <SelectedIcon style={color} />
            </svg>
          </div>
          <div className="p-4 md:p-6">
            <span className="mb-1 block text-xs font-semibold uppercase text-blue-600">
              {card.type}
            </span>
            <h3 className="text-xl font-semibold text-gray-800">
              {card.title}
            </h3>
            <p className="mt-3 text-gray-500">{card.description}</p>
          </div>
        </>
      ) : (
        <div className="max-h-[calc(50vh-200px)] overflow-auto p-4 md:p-6">
          {card.modelString}
        </div>
      )}
      <div className="mt-auto flex cursor-pointer divide-x divide-gray-200 border-t border-gray-200">
        <a
          className="inline-flex w-full items-center justify-center gap-2 rounded-bl-xl bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white sm:p-4"
          href="#"
          onClick={() => setViewed((prevValue) => !prevValue)}
        >
          {isViewed ? "View Metadata" : "View Model"}
        </a>
        <a
          className="inline-flex w-full items-center justify-center gap-2 rounded-br-xl bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white sm:p-4"
          href="#"
          onClick={() => void handleDelete()}
        >
          Delete Model
        </a>
      </div>
    </div>
  );
}
