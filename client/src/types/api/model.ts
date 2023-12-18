interface GetModel {
  name: string;
  language: string;
  library: string;
}

interface PostModel {
  features: Record<string, string>;
  language: string;
  library: string;
  model: string;
}

export type { GetModel, PostModel };
