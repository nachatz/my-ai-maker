import type { CardType, CardArray } from "~/types";
import { Card } from "~/components";

export default function CardGrid({ cards }: CardArray) {
  const cardItems = cards;

  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cardItems.map((card: CardType, index: number) => (
          <Card
            key={index}
            {...card}
          />
        ))}
      </div>
    </div>
  );
}

