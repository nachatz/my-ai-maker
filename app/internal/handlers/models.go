// handlers/models_handler.go

package handlers

import (
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

	response.Message = api.AvailableModels
	response.StatusCode = http.StatusOK

	w.Header().Set("Content-Type", "application/json")
	utils.WriteResponse(w, response)
}
