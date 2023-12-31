interface StatsProps {
  stats: StatArray;
}

type Stat = {
  id: number;
  name: string;
  value: string;
};

type StatArray = Stat[];

export type { StatsProps, Stat, StatArray };