package gen

import (
	"errors"
	"log"
	"strings"

	"github.com/nachatz/my-ai-maker/app/internal/models"
	"github.com/nachatz/my-ai-maker/app/internal/utils"
)

func GenerateCode(featureRequest models.FeatureRequest) (string, error) {
	/* GenerateCode - Generates code for setting up a model
	   @Param FeatureRequest - Interface of metadata for feature data
	   @Return string - Generated code for stipulated language
	*/
	var code strings.Builder
	stringFeatures, integerFeatures, floatFeatures, booleanFeatures := []string{}, []string{}, []string{}, []string{}
	features := featureRequest.Features
	language := featureRequest.Language
	library := featureRequest.Library

	log.Printf("Generating code for %s using %s", language, library)
	utils.ExtractFeatures(features, &stringFeatures, &integerFeatures, &floatFeatures, &booleanFeatures)

	if language == "python" {
		return GeneratePythonCode(
			featureRequest,
			code,
			stringFeatures,
			integerFeatures,
			floatFeatures,
			booleanFeatures,
		)
	}

	return "", errors.New("language not implemented")
}
