package gen

import (
	"log"
	"strings"

	"github.com/nachatz/my-ai-maker/app/internal/models"
	"github.com/nachatz/my-ai-maker/app/internal/utils"
)

func GeneratePythonCode(gen *models.Gen) {
	/* GeneratePythonCode - Generates Python code for setting up a model, manipulates memory location
	   @Param Gen - Type holding all of the generated code for a given language
	*/

	parser := FileParser{
		Language: gen.FeatureRequest.Language,
	}

	// Generic functions, imports, and main
	parser.ParseRawCode("generics.py", gen.Imports, gen.Source)

	// Functions
	appendFunctions(parser, gen.Imports, gen.Functions, gen.Features)

	// Functional code

	// Aggregating code and calling main
	utils.FinalizeCode(gen)
	parser.ParseRawCode("main.py", gen.Imports, gen.Source)

}

func appendFunctions(parser FileParser, imports *strings.Builder, functions *strings.Builder, features models.Features) {
	/* appendFunctions - Adds all of the functions for generic models & imports
	   @Param parser - FileParser that reads in python code
	   @Param imports - Memory location of the imports
	   @Param functions - Memory location of the functions
	   @Param features - All of the string arrays of features
	*/

	if len(features.StringFeatures) > 0 {
		parser.ParseRawCode("label_encode.py", imports, functions)
	}

	if len(features.FloatFeatures) > 0 {
		log.Println("Float features detected")
	}

	if len(features.IntegerFeatures) > 0 {
		log.Println("Integer features detected")
	}

}

func addCode(code *strings.Builder, addition string, indent int) {
	/* addCode - Adds indentation to the start of each line in the code
	   @Param code - Pointer to the current string builder
	   @Param addition - Code to add
	   @Param indent - Number of spaces to add to the start of each line
	*/

	lines := strings.Split(addition, "\n")
	indentation := strings.Repeat("    ", indent)

	for _, line := range lines {
		code.WriteString(indentation + line + "\n")
	}
}
