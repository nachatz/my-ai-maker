package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/nachatz/my-ai-maker/app/internal/models"
	"github.com/nachatz/my-ai-maker/app/internal/utils"
)

func VariableHandler(w http.ResponseWriter, r *http.Request) {
	/* VariableHandler - Handles the HTTP request for processing JSON variables and data types.
	   @Param w - The http.ResponseWriter to write the response to.
	   @Param r - The *http.Request representing the incoming request.
	*/

	var response models.Response

	// Parse the JSON request body
	var request map[string]string
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		response.Message = "Failed to parse JSON request"
		response.StatusCode = http.StatusBadRequest
		utils.WriteResponse(w, response)
		return
	}

	// Process the JSON variables and data types
	_, err := processVariables(request)
	if err != nil {
		response.Message = "Failed to process variables"
		response.StatusCode = http.StatusInternalServerError
		utils.WriteResponse(w, response)
		return
	}

	response.Message = "Successfully processed JSON variables and data types"
	response.StatusCode = http.StatusOK
	utils.WriteResponse(w, response)
}

func processVariables(variables map[string]string) (map[string]string, error) {
	// Process the variables and data types as needed
	result := make(map[string]string)

	for variable, dataType := range variables {
		log.Printf("Variable: %s, DataType: %s", variable, dataType)
		result[variable] = dataType
	}

	return result, nil
}
