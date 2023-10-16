interface Props {
  navigation: NavigationItemArray;
}

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

type NavigationItemArray = NavigationItem[];

export type { Props };
