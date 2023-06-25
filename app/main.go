package main

import (
	"log"
	"net/http"

	"github.com/nachatz/my-ai-maker/app/api"
	"github.com/nachatz/my-ai-maker/app/handlers"
)

func main() {

	// Register the handlers
	http.HandleFunc(api.EndpointProcess, handlers.ProcessHandler)

	// Log the api endpoints
	log.Printf("API endpoints: %s", api.Endpoint)
	log.Printf("API endpoint process: %s", api.EndpointProcess)

	// Start the server on port 8080
	log.Fatal(http.ListenAndServe(":8080", nil))

}
