package utils

import "github.com/nachatz/my-ai-maker/app/internal/models"

func ExtractFeatures(features map[string]string, code *models.Features) {
	/* ExtractFeatures - Extracts features from a map and populates the respective fields in a Features object.
	   @Param features: A map of feature names with their corresponding data types.
	   @Param code: A Features object to store the extracted features based on their data types.
	*/
	for feature, dataType := range features {
		switch dataType {
		case "string":
			code.StringFeatures = append(code.StringFeatures, feature)
		case "integer":
			code.IntegerFeatures = append(code.IntegerFeatures, feature)
		case "float":
			code.FloatFeatures = append(code.FloatFeatures, feature)
		case "boolean":
			code.BooleanFeatures = append(code.BooleanFeatures, feature)
		}
	}
}

func FinalizeCode(gen *models.Gen) {
	/* FinalizeCode - Appends the imports, functions, and original source code to create the final code in a Gen object.
	   @Param gen: A Gen object containing the source, imports, functions, and features.
	*/
	originalSource := gen.Source.String()
	gen.Source.Reset()
	gen.Source.WriteString(gen.Imports.String())
	gen.Source.WriteString(gen.Functions.String())
	gen.Source.WriteString(originalSource)
	gen.Source.WriteString("\n")
}
