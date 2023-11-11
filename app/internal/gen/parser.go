package gen

import (
	"os"
)

type FileParser struct {
	Language string
}

func (fp *FileParser) ParseRawCode(file string) string {
	/* ParseRawCode - Reads in a code file and returns as a raw string
	   @Param file - file to be read in
	   @Return string - Raw code as a string
	*/
	content, err := os.ReadFile("internal/gen/" + fp.Language + "/" + file)

	if err != nil {
		return "Failed to parse data!"
	}

	code := string(content)
	return code
}
