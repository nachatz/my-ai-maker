package utils

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/nachatz/my-ai-maker/app/internal/models"
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

func ReadJsonBody(r *http.Request, model interface{}) models.Response {
	/* readJsonBody - Reads the JSON body of the provided request and unmarshals it into the provided model.
	   @Param r - The *http.Request representing the incoming request.
	   @Param model - The interface{} representing the model to unmarshal the JSON body into.
	   @Return models.Response - The response to return to the client.
	*/

	var response models.Response

	// Read the body of the request
	body, err := io.ReadAll(r.Body)
	if err != nil {
		response.Message = "Failed to read request body: e -> " + err.Error()
		response.StatusCode = http.StatusInternalServerError
	}
	defer r.Body.Close()

	// Parse the JSON body into the provided model
	err = json.Unmarshal(body, &model)
	if err != nil {
		response.Message = "Failed to read request body: e -> " + err.Error()
		response.StatusCode = http.StatusInternalServerError
	}

	return response
}
