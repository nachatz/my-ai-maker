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
) (string, error) {
	/* GeneratePythonCode - Generates Python code for setting up a model
	   @Param featureRequest - Interface of metadata for feature data
	   @Param pythonCode - Code being generated
	   @Param features - All features lists
	   @Return string - Generated Python code
	*/

	// Generic imports
	addCode(pythonCode, "import pandas as pd", 0)

	// Functions
	appendGenericFunctions(pythonCode, stringFeatures, integerFeatures, floatFeatures)
	pythonCode.WriteString("\n")

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

	return pythonCode.String(), nil
}

func appendGenericFunctions(code *strings.Builder, stringFeatures []string, floatFeatures []string, integerFeatures []string) {
	/* appendFunctions - Adds all of the functions for generic models & imports
	   @Params code - Current code pointer
	   @Params features - All of the string arrays of features
	*/

	if len(stringFeatures) > 0 {
		addCode(code, "from sklearn.preprocessing import LabelEncoder", 0)
		addCode(code, "", 0)
		generateEncodeFunction(code)
	}

	if len(floatFeatures) > 0 {
		log.Println("Float features detected")
	}

	if len(integerFeatures) > 0 {
		log.Println("Integer features detected")
	}

}

func generateEncodeFunction(code *strings.Builder) {
	/* generateEncodeFunction - Generates Python code for encoding a string feature into numerical representation.
	   @Param code - Pointer to the string builder for adding code
	*/
	addCode(code, "def label_encode(df, features):", 0)
	addCode(code, "for feat in features:", 1)
	addCode(code, "le = LabelEncoder()", 2)
	addCode(code, "df[feat] = le.fit_transform(df[feat])", 2)
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
