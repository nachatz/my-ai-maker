interface Props {
  navigation: NavigationItemArray;
  state: string;
  setState: (state: string) => void;
}

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

type NavigationItemArray = NavigationItem[];

export type { Props };
