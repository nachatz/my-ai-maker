package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/nachatz/my-ai-maker/app/internal/models"
	"github.com/nachatz/my-ai-maker/app/internal/utils"
)

func FeatureHandler(w http.ResponseWriter, r *http.Request) {
	/* FeatureHandler - Handles the HTTP request for processing JSON features and data types.
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

	// Process the JSON features and data types
	_, err := processFeatures(request)
	if err != nil {
		response.Message = "Failed to process features"
		response.StatusCode = http.StatusInternalServerError
		utils.WriteResponse(w, response)
		return
	}

	response.Message = "Successfully processed JSON features and data types"
	response.StatusCode = http.StatusOK
	utils.WriteResponse(w, response)
}

func processFeatures(features map[string]string) (map[string]string, error) {
	/* processFeatures - Handles the mapping of features from posted json
	   @Param features - Map of feature metadata
	*/
	result := make(map[string]string)

	for feature, dataType := range features {
		log.Printf("Feature: %s, DataType: %s", feature, dataType)
		result[feature] = dataType
	}

	return result, nil
}
