import {
  GlobeAltIcon,
  VariableIcon,
  CubeTransparentIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";
import type { CardType } from "~/types";

type IconMap = Record<string, React.ComponentType<React.RefAttributes<SVGSVGElement>>>;

const iconMap: IconMap = {
  global: GlobeAltIcon,
  variable: VariableIcon,
  cube: CubeTransparentIcon,
  cloud: CloudIcon,
};

export default function Card(card: CardType) {
  const SelectedIcon = iconMap[card.icon] ?? CubeTransparentIcon;
  const color = { backgroundColor: card.color, stroke: card.color };

  return (
    <div className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white shadow-sm">
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
        <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
        <p className="mt-3 text-gray-500">{card.description}</p>
      </div>
      <div className="cursor-pointer mt-auto flex divide-x divide-gray-200 border-t border-gray-200">
        <a
          className="inline-flex w-full items-center justify-center gap-2 rounded-bl-xl bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white sm:p-4"
          href="#"
        >
          View Models
        </a>
        <a
          className="inline-flex w-full items-center justify-center gap-2 rounded-br-xl bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white sm:p-4"
          href="#"
        >
          Update Model
        </a>
      </div>
    </div>
  );
}
