package gen

import (
	"errors"
	"os"
	"strings"
)

type FileParser struct {
	Language string
}

func (fp *FileParser) ParseRawCode(file string, imports, source *strings.Builder) error {
	var importLines strings.Builder
	var sourceLines strings.Builder
	isImportBlock := true
	content, err := os.ReadFile("internal/gen/" + fp.Language + "/" + file)

	if err != nil {
		return errors.New("failed to parse data file")
	}

	code := string(content)
	parts := strings.Split(code, "\n")

	for _, line := range parts {
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
