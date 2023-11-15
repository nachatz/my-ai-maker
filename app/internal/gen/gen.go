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
	var source, functions, imports *strings.Builder = new(strings.Builder), new(strings.Builder), new(strings.Builder)
	var features, language, library = featureRequest.Features, featureRequest.Language, featureRequest.Library

	log.Printf("Generating code for %s using %s", language, library)
	gen := models.Gen{
		FeatureRequest: featureRequest,
		Source:         source,
		Functions:      functions,
		Imports:        imports,
		Features: models.Features{
			StringFeatures:  []string{},
			IntegerFeatures: []string{},
			FloatFeatures:   []string{},
			BooleanFeatures: []string{},
		},
	}

	utils.ExtractFeatures(features, &gen.Features)

	switch language {
	case "python":
		GeneratePythonCode(&gen)
	default:
		return "", errors.New("language not implemented")
	}

	return source.String(), nil

}
