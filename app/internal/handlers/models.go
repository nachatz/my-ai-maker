// handlers/models_handler.go

package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/nachatz/my-ai-maker/app/internal/api"
	"github.com/nachatz/my-ai-maker/app/internal/models"
	"github.com/nachatz/my-ai-maker/app/internal/utils"
)

func ModelsHandler(w http.ResponseWriter, r *http.Request) {
	/* ModelsHandler - Returns the list of available models.
	   @Param w - The http.ResponseWriter to write the response to.
	   @Param r - The *http.Request representing the incoming request.
	*/
	var response models.Response

	modelList := make([]models.ModelInfo, len(api.AvailableModels))
	for i, model := range api.AvailableModels {
		modelList[i] = models.ModelInfo{
			Name:     model.Name,
			Language: model.Language,
			Library:  model.Library,
		}
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(modelList); err != nil {
		response.Message = "Failed to encode model list to JSON"
		response.StatusCode = http.StatusInternalServerError
		utils.WriteResponse(w, response)
		return
	}

	response.StatusCode = http.StatusOK
}
