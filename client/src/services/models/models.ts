import useSWR from "swr";
import type { AiMakerResponse, Fetch, FetchError, Model } from "~/types";
import { endpoints } from "~/constants/endpoints";
import { get } from "~/utils/fetcher";


const useAvailableModels = (): Fetch<Model> => {
  const { data, error, isLoading } = useSWR<AiMakerResponse<Model[]>, FetchError>(
    endpoints.models.supported,
    get
  );

  return { data: data?.message, error, isLoading };
};

export const ModelsService = {
  useAvailableModels,
};
