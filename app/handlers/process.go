package handlers

import (
	"log"
	"net/http"

	"github.com/nachatz/my-ai-maker/app/models"
	"github.com/nachatz/my-ai-maker/app/utils"
)

func ProcessHandler(w http.ResponseWriter, r *http.Request) {

	var result models.Result

	if r.Method != http.MethodPost {
		result.Message = "Method not allowed"
		result.Result = http.StatusMethodNotAllowed
	} else {
		result = ProcessCsvResponse(r)
	}

	utils.WriteResponse(w, result)
}

func ProcessCsvResponse(r *http.Request) models.Result {
	var result models.Result

	file, _, err := r.FormFile("file")
	if err != nil {
		result.Message = "Failed to retrieve file"
		result.Result = http.StatusBadRequest
		return result
	}
	defer file.Close()

	records, err := utils.ParseCSV(file)
	if err != nil || records == nil {
		result.Message = "Failed to read CSV file"
		result.Result = http.StatusBadRequest
		return result
	}

	// Pull out the headers and remove them from the records
	log.Printf("Headers: %v", records[0])
	headers := records[0]
	records = records[1:]

	headers = utils.TrimSpaces(headers)

	// Check if the CSV file contains a label column
	if !utils.Contains(headers, "label") {
		result.Message = "Missing a label column"
		result.Result = http.StatusBadRequest
		return result
	}

	result.Message = "Successfully processed CSV file"
	result.Result = http.StatusOK
	return result
}
