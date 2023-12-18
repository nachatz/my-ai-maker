import { Row } from "~/types";

/**
 * Formats a dictionary by populating it with feature names and types from an array of rows.
 *
 * @param {Row[]} rows - An array of rows containing feature names and types.
 * @param {Record<string, string>} dict - The dictionary to be populated.
 */
export const formatDictionary = (rows: Row[], dict: Record<string, string>) => {
  rows.forEach((row, _) => {
    if (row.feature && row.type) {
      const featureName = row.feature;
      const featureType = row.type;
      dict[featureName] = featureType;
    }
  });
};
