package handlers

import (
	"log"
	"net/http"

	"github.com/nachatz/my-ai-maker/app/internal/models"
	"github.com/nachatz/my-ai-maker/app/internal/utils"
)

func ProcessHandler(w http.ResponseWriter, r *http.Request) {
	/* ProcessHandler - Handles the HTTP request for processing a CSV file.
	   @Param w - The http.ResponseWriter to write the response to.
	   @Param r - The *http.Request representing the incoming request.
	*/

	var response models.Response = processCsvResponse(r)
	utils.WriteResponse(w, response)
}

func processCsvResponse(r *http.Request) models.Response {
	/* processCsvResponse - Processes the CSV file in the request and generates a response.
	   @Param r - The *http.Request representing the incoming request.
	   @Return models.Response - The generated response.
	*/

	var response models.Response

	file, _, err := r.FormFile("file")
	if err != nil {
		response.Message = "Failed to retrieve file"
		response.StatusCode = http.StatusBadRequest
		return response
	}
	defer file.Close()

	records, err := utils.ParseCSV(file)
	if err != nil || records == nil {
		response.Message = "Failed to read CSV file"
		response.StatusCode = http.StatusBadRequest
		return response
	}

	// Pull out the headers and remove them from the records
	log.Printf("Headers: %v", records[0])
	headers := records[0]
	records = records[1:]

	headers = utils.TrimSpaces(headers)

	// Check if the CSV file contains a label column
	if !utils.Contains(headers, "label") {
		response.Message = "Missing a label column"
		response.StatusCode = http.StatusBadRequest
		return response
	}

	response.Message = "Successfully processed CSV file"
	response.StatusCode = http.StatusOK
	return response
}
