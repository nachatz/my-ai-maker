package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/nachatz/my-ai-maker/app/models"
	"github.com/nachatz/my-ai-maker/app/utils"
)

func ProcessHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	file, _, err := r.FormFile("file")
	if err != nil {
		http.Error(w, "Failed to retrieve file", http.StatusBadRequest)
		return
	}
	defer file.Close()

	// blanket records returned here
	records, err := utils.ParseCSV(file)
	if err != nil || records == nil {
		http.Error(w, "Failed to read CSV file", http.StatusBadRequest)
		return
	}


	result := models.Result{
		Message: "CSV file processed successfully",
	}

	response, err := json.Marshal(result)
	if err != nil {
		http.Error(w, "Failed to marshal response", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)
}
