package utils

import (
	"encoding/json"
	"net/http"

	"github.com/nachatz/my-ai-maker/app/models"
)

func WriteResponse(w http.ResponseWriter, result models.Response) {
	/* WriteResponse - Writes the provided response model as JSON to the http.ResponseWriter.
	   @Param w - The http.ResponseWriter to write the response to.
	   @Param result - The models.Response containing the data to be written as JSON.
	*/
	response, err := json.Marshal(result)
	if err != nil {
		http.Error(w, "Failed to marshal response", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(result.StatusCode)
	w.Write(response)
}
