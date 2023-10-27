interface FeaturesProps {
  content: Content;
  features: FeaturesArray;
}

type Content = {
  subtitle: string;
  title: string;
  description: string;
};

type Feature = {
  name: string;
  description: string;
  icon: React.ComponentType;
};

type FeaturesArray = Feature[];

export type { Content, Feature, FeaturesArray, FeaturesProps };
