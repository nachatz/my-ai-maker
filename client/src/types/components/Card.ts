interface CardArray {
  cards: CardType[];
}

type CardType = {
  title: string;
  type: string;
  description: string;
  code: string;
  icon: string;
  color: string;
};

export type { CardArray, CardType };
