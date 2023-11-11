package gen

import (
	"log"
	"strings"

	"github.com/nachatz/my-ai-maker/app/internal/models"
)

func GeneratePythonCode(
	featureRequest models.FeatureRequest,
	pythonCode *strings.Builder,
	stringFeatures []string,
	integerFeatures []string,
	floatFeatures []string,
	booleanFeatures []string,
) {
	/* GeneratePythonCode - Generates Python code for setting up a model
	   @Param featureRequest - Interface of metadata for feature data
	   @Param pythonCode - Code being generated
	   @Param features - All features lists
	   @Return string - Generated Python code
	*/
	var imports strings.Builder
	var functions strings.Builder
	parser := &FileParser{
		Language: featureRequest.Language,
	}

	// Generic functions and imports
	parser.ParseRawCode("generic_imports.py", &imports, &functions)

	// Functions
	appendFunctions(&imports, &functions, *parser, stringFeatures, integerFeatures, floatFeatures)

	// Main and data read
	addCode(pythonCode, "def main():", 0)
	addCode(pythonCode, "df = pd.read_csv('your_dataset.csv')", 1)
	pythonCode.WriteString("\n")

	// Data aggregation
	addCode(pythonCode, "string_features = ["+strings.Join(addQuotes(stringFeatures), ", ")+"]", 1)
	addCode(pythonCode, "boolean_features = ["+strings.Join(addQuotes(booleanFeatures), ", ")+"]", 1)
	addCode(pythonCode, "int_features = ["+strings.Join(addQuotes(integerFeatures), ", ")+"]", 1)
	addCode(pythonCode, "float_features = ["+strings.Join(addQuotes(floatFeatures), ", ")+"]", 1)
	pythonCode.WriteString("\n")

	// Functional code

	// Calling main
	addCode(pythonCode, "if __name__ == '__main__':", 0)
	addCode(pythonCode, "main()", 1)

	// Compile results
	originalPythonCode := pythonCode.String()
	pythonCode.Reset()
	pythonCode.WriteString(imports.String())
	pythonCode.WriteString(functions.String())
	pythonCode.WriteString(originalPythonCode)

}

func appendFunctions(imports, functions *strings.Builder, parser FileParser, stringFeatures []string, floatFeatures []string, integerFeatures []string) {
	/* appendFunctions - Adds all of the functions for generic models & imports
	   @Params code - Current code pointer
	   @Params features - All of the string arrays of features
	*/

	if len(stringFeatures) > 0 {
		parser.ParseRawCode("label_encode.py", imports, functions)
	}

	if len(floatFeatures) > 0 {
		log.Println("Float features detected")
	}

	if len(integerFeatures) > 0 {
		log.Println("Integer features detected")
	}

}

func addQuotes(features []string) []string {
	/* addQuotes - Adds quotes to go variables for python interpolation
	   @Param features - Set of features to be quoted
	   @Param string - Quoted python variables
	*/

	quotedFeatures := make([]string, len(features))
	for i, feature := range features {
		quotedFeatures[i] = `"` + feature + `"`
	}
	return quotedFeatures
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
