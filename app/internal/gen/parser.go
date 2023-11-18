package gen

import (
	"errors"
	"log"
	"os"
	"strings"
)

type FileParser struct {
	Language string
}

func (fp *FileParser) ParseRawCode(file string, imports, source *strings.Builder) error {
	/* ParseRawCode - Reads in a python code file. Needs to be extended to Go
	   @Param file - name of the file to be read
	   @Param imports - memory address of the imports string builder
	   @Param source - memory address of the source file for this set of imports
	*/
	var importLines strings.Builder
	var sourceLines strings.Builder
	log.Print("Reading in " + "internal/gen/" + fp.Language + "/" + file)
	content, err := os.ReadFile("internal/gen/" + fp.Language + "/" + file)

	if err != nil {
		return errors.New("failed to parse data file")
	}

	code := string(content)
	parts := strings.Split(code, "\n")

	for _, line := range parts {
		isImportBlock := false
		if strings.HasPrefix(line, "import ") || strings.HasPrefix(line, "from ") {
			isImportBlock = true
		}
		if isImportBlock {
			importLines.WriteString(line + "\n")
		} else {
			sourceLines.WriteString(line + "\n")
		}
	}

	// Append the import and source code to the provided strings.Builder
	imports.WriteString(importLines.String())
	source.WriteString(sourceLines.String())

	return nil
}
