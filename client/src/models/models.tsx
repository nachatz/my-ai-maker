export type Content = {
  subtitle: string;
  title: string;
  description: string;
};

export type Feature = {
  name: string;
  description: string;
  icon: React.ComponentType;
};

export type FeaturesArray = Feature[];

export type DocContent = {
  subtitle: string;
  title: string;
  description: string;
};

export type Doc = {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: {
    title: string;
    href: string;
  };
  author: {
    name: string;
    role: string;
    href: string;
    imageUrl: string;
  };
};

export type DocumentsArray = Doc[];
