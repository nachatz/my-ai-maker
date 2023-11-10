package handlers

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"

	"github.com/nachatz/my-ai-maker/app/internal/gen"
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
	var featureRequest models.FeatureRequest
	if err := json.NewDecoder(r.Body).Decode(&featureRequest); err != nil {
		response.Message = "Failed to parse JSON request"
		response.StatusCode = http.StatusBadRequest
		utils.WriteResponse(w, response)
		return
	}

	// Validate required fields
	if err := validateFeatureRequest(featureRequest); err != nil {
		response.Message = "Validation failed: " + err.Error()
		response.StatusCode = http.StatusBadRequest
		utils.WriteResponse(w, response)
		return
	}

	// Process the JSON features and data types
	code, err := processFeatures(featureRequest)
	if err != nil {
		response.Message = "Failed to process features"
		response.StatusCode = http.StatusInternalServerError
		utils.WriteResponse(w, response)
		return
	}

	response.Message = code
	response.StatusCode = http.StatusOK
	utils.WriteResponse(w, response)
}

func processFeatures(features models.FeatureRequest) (string, error) {
	/* processFeatures - Handles the mapping of features from posted json
	   @Param features - Map of feature metadata
	*/

	for feature, dataType := range features.Features {
		log.Printf("Feature: %s, DataType: %s", feature, dataType)
	}

	pythonCode, err := gen.GenerateCode(features)

	if err != nil {
		return "", fmt.Errorf("failed to generate code: %v", err)
	}

	fmt.Printf("Output code:\n%s\n", pythonCode)

	return pythonCode, nil
}

func validateFeatureRequest(request models.FeatureRequest) error {
	// Use a validator library or manually validate each field
	if len(request.Features) == 0 {
		return errors.New("features field is required")
	}
	if request.Language == "" {
		return errors.New("language field is required")
	}
	if request.Library == "" {
		return errors.New("library field is required")
	}

	return nil
}
