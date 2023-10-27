interface SectionsProps {
  sections: SectionArray;
  content: SectionContent;
}

type SectionContent = {
  subtitle: string;
  title: string;
  description: string;
};

type Section = {
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

type SectionArray = Section[];

export type { SectionsProps, SectionContent };
