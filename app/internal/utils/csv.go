package utils

import (
	"encoding/csv"
	"io"
	"strings"
)

func ParseCSV(reader io.Reader) ([][]string, error) {
	/* ParseCSV - Parses a CSV file from the provided reader and returns a 2D slice of strings representing the records.
	   @Param reader - The input reader from which to read the CSV data.
	   @Return [][]string - The parsed CSV records as a 2D slice of strings.
	   @Return error - An error if any occurred during parsing.
	*/

	r := csv.NewReader(reader)
	records, err := r.ReadAll()
	if err != nil {
		return nil, err
	}
	return records, nil
}

func Contains(vals []string, search string) bool {
	/* Contains - Checks if a given string `search` is present in the provided slice of strings `vals`.
	   @Param vals - The slice of strings to search through.
	   @Param search - The string to search for in the slice.
	   @Return bool - True if the search string is found, otherwise false.
	*/

	for _, entry := range vals {
		if entry == search {
			return true
		}
	}
	return false
}

func TrimSpaces(vals []string) []string {
	/* TrimSpaces - Trims leading and trailing spaces from each string in the provided slice `vals`.
	   It modifies the original slice and returns the modified slice.
	   @Param vals - The slice of strings to trim spaces from.
	   @Return []string - The modified slice with leading and trailing spaces trimmed.
	*/

	// Trim the spaces from the headers
	for i, entry := range vals {
		vals[i] = strings.TrimSpace(entry)
	}

	return vals
}
