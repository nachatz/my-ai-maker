package gen

import (
	"strings"
)

func GeneratePythonCode(variables map[string]string) (string, error) {
	/* GeneratePythonCode - Generates Python code for setting up a model
	   @Param variables - Map of variable names and types
	   @Return string - Generated Python code
	*/
	var pythonCode strings.Builder

	// Imports
	addCode(&pythonCode, "import pandas as pd", 0)
	pythonCode.WriteString("\n")

	// Main and data read
	addCode(&pythonCode, "def main():", 0)
	addCode(&pythonCode, "df = pd.read_csv('your_dataset.csv')", 1)

	// --------------- Code gen start ---------------

	// Functional code
	addCode(&pythonCode, "print(df)", 1)
	pythonCode.WriteString("\n")

	// --------------- Code gen end ---------------

	// Calling main
	addCode(&pythonCode, "if __name__ == '__main__':", 0)
	addCode(&pythonCode, "main()", 1)

	return pythonCode.String(), nil
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
