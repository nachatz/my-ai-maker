import type { JsonValue } from "@prisma/client/runtime/library";

interface CardArray {
  cards: CardType[];
}

type CardType = {
  id: string;
  title: string;
  description: string;
  type: string;
  modelString: string;
  features: JsonValue;
  transformations: JsonValue;
  userId: string;
};

export type { CardArray, CardType };
