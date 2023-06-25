package utils

import (
	"encoding/csv"
	"io"
	"strings"
)

func ParseCSV(reader io.Reader) ([][]string, error) {
	r := csv.NewReader(reader)
	records, err := r.ReadAll()
	if err != nil {
		return nil, err
	}
	return records, nil
}

func Contains(vals []string, search string) bool {
	for _, entry := range vals {
		if entry == search {
			return true
		}
	}
	return false
}

func TrimSpaces(vals []string) []string {
	// Trim the spaces from the headers
	for i, entry := range vals {
		vals[i] = strings.TrimSpace(entry)
	}

	return vals
}
