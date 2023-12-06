import { Model } from "./model";
interface Fetch<T> {
  data?: T[];
  error?: FetchError;
  isLoading: boolean;
}

interface AiMakerResponse<T = string | Model[]> {
  statuscode: number;
  message: T;
}

type FetchError = { type: "unknown"; message: string };

export type { AiMakerResponse, Fetch, FetchError };
