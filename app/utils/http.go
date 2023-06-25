package utils

import (
	"encoding/json"
	"net/http"

	"github.com/nachatz/my-ai-maker/app/models"
)

func WriteResponse(w http.ResponseWriter, result models.Result) {
	response, err := json.Marshal(result)
	if err != nil {
		http.Error(w, "Failed to marshal response", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(result.Result)
	w.Write(response)
}
