import useSWR from "swr";

import { endpoints } from "~/constants/endpoints";
import { get } from "~/utils/fetcher";
import type {
  AiMakerResponse,
  Fetch,
  FetchError,
  GetModel,
  PostModel,
  ModelCreate,
  Row,
} from "~/types";

/**
 * Fetches and returns available models.
 *
 * @return {Fetch<GetModel>} The fetched models, along with any error and loading status.
 */
const useAvailableModels = (): Fetch<GetModel> => {
  const { data, error, isLoading } = useSWR<
    AiMakerResponse<GetModel[]>,
    FetchError
  >(endpoints.models.supported, get);

  return { data: data?.message, error, isLoading };
};

/**
 * Generates a model based on the provided model and rows.
 *
 * @param {ModelCreate} model - The model to be generated.
 * @param {Row[]} rows - The rows used to generate the model.
 * @return {Promise<any>} A promise that resolves to the generated model.
 */
const requestGenerateModel = async (
  model: ModelCreate,
  rows: Row[],
): Promise<AiMakerResponse> => {
  const postDatum: PostModel = {
    features: {},
    language: "python",
    library: "pytorch",
    model: model.type!,
  };

  rows.forEach((row, _) => {
    if (row.feature && row.type) {
      const featureName = row.feature;
      const featureType = row.type;
      postDatum.features[featureName] = featureType;
    }
  });

  const response = await fetch(endpoints.models.generate, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postDatum),
  });

  const data = (await response.json()) as AiMakerResponse;
  return data;
};

export const ModelsService = {
  useAvailableModels,
  requestGenerateModel,
};
