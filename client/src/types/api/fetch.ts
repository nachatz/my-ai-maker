interface Fetch<T> {
  data?: T[];
  error?: FetchError;
  isLoading: boolean;
}

type FetchError = { type: "unknown"; message: string };

export type { Fetch, FetchError };
