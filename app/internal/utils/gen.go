package utils

func ExtractFeatures(features map[string]string, stringFeatures, integerFeatures, floatFeatures *[]string, booleanFeatures *[]string) {
	for feature, dataType := range features {
		switch dataType {
		case "string":
			*stringFeatures = append(*stringFeatures, feature)
		case "integer":
			*integerFeatures = append(*integerFeatures, feature)
		case "float":
			*floatFeatures = append(*floatFeatures, feature)
		case "boolean":
			*booleanFeatures = append(*booleanFeatures, feature)
		}
	}
}
