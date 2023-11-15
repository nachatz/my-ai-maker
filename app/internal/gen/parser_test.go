package gen

import (
	"os"
	"strings"
	"testing"
)

func TestFileParser_ParseRawCode(t *testing.T) {
	/*
	   TestFileParser_ParseRawCode - Tests the ParseRawCode method of FileParser.
	   @Scenario - Parsing a Python code file and checking the generated imports and source.
	*/
	var imports, source strings.Builder
	fileParser := &FileParser{Language: "python"}
	fileName := "test.py"

	// The working directory for tests are different
	// thus let's resolve it for the test
	originalWD, err := os.Getwd()
	if err != nil {
		t.Fatal(err)
	}

	if err := os.Chdir("../../"); err != nil {
		t.Fatal(err)
	}

	t.Cleanup(func() {
		if err := os.Chdir(originalWD); err != nil {
			t.Fatal(err)
		}
	})

	// Parse the code
	err = fileParser.ParseRawCode(fileName, &imports, &source)
	if err != nil {
		t.Fatalf("Unexpected error: %v", err)
	}

	expectedImports := "import module1\nimport module2\nfrom test import Tester, Tester2\n"
	if strings.ReplaceAll(imports.String(), "\r", "") != expectedImports {
		t.Errorf("\ngot:\n%v\nwant:\n%v", imports.String(), expectedImports)
	}

	expectedSource := "\ndef func(app):\n    print('Hello, World!' + app)\n"
	if strings.ReplaceAll(source.String(), "\r", "") != expectedSource {
		t.Errorf("\ngot:\n%v\nwant:\n%v", source.String(), expectedSource)
	}
}
