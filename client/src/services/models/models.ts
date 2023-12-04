import useSWR from "swr";
import type { Fetch, FetchError, Model } from "~/types";
import { endpoints } from "~/constants/endpoints";
import { fetcher } from "~/utils/fetcher";

const useAvailableModels = (): Fetch<Model> => {
  const { data, error, isLoading } = useSWR<Fetch<Model>, FetchError>(
    endpoints.models.supported,
    (url: RequestInfo) => fetcher(url, "GET"),
  );

  return { data: data?.data, error, isLoading };
};

export const ModelsService = {
  useAvailableModels,
};
