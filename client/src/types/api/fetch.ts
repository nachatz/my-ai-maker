import type { GetModel } from "./model";
interface Fetch<T> {
  data?: T[];
  error?: FetchError;
  isLoading: boolean;
}

interface AiMakerResponse<T = string | GetModel[]> {
  statusCode: number;
  message: T;
}

type FetchError = { type: "unknown"; message: string };

export type { AiMakerResponse, Fetch, FetchError };
