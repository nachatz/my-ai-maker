package utils

import (
	"encoding/csv"
	"io"
)

func ParseCSV(reader io.Reader) ([][]string, error) {
	r := csv.NewReader(reader)
	records, err := r.ReadAll()
	if err != nil {
		return nil, err
	}
	return records, nil
}
