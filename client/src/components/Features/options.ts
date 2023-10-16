import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export const featuresContent = {
  subtitle: "Optimize Immediately",
  title: "Experience modern machine learning",
  description:
    "The space between the stars and galaxies is largely empty. We close the gap between your data and your model",
};

export const featuresFeatures = [
  {
    name: "Train Custom Models",
    description: "Easily train a custom model with just a few clicks",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Model Management",
    description: "Manage your models with ease, through our intuitive UI",
    icon: LockClosedIcon,
  },
  {
    name: "Data Management",
    description:
      "Manage your data, and train your models with the data you want, how you want",
    icon: FingerPrintIcon,
  },
  {
    name: "Expose your models",
    description:
      "Take your trained models, and expose them as a API for your applications",
    icon: ArrowPathIcon,
  },
];
