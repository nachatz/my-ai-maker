package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"

	"github.com/nachatz/my-ai-maker/app/api"
	"github.com/nachatz/my-ai-maker/app/handlers"
	"github.com/nachatz/my-ai-maker/app/middleware"
)

func main() {

	// load in environment variables from .env file using os package
	err := godotenv.Load()
	if err != nil {
		// Handle the error if loading the .env file fails
		log.Fatal("Error loading .env file")
		return
	}

	clientSecret := os.Getenv("CLIENT_SECRET")
	if clientSecret == "" {
		log.Fatal("CLIENT_SECRET environment variable not set")
		return
	}

	// Register the handlers
	// Register the protected endpoint with the JWT middleware
	http.Handle(api.EndpointProcess, middleware.JwtMiddleware(http.HandlerFunc(handlers.ProcessHandler), clientSecret))

	//http.HandleFunc(api.EndpointProcess, handlers.ProcessHandler)
	http.HandleFunc(api.EndpointAuthToken, func(w http.ResponseWriter, r *http.Request) { handlers.GenerateJWTHandler(w, r, clientSecret) })

	// Log the api endpoints
	log.Printf("API endpoints: %s", api.Endpoint)
	log.Printf("API endpoint process: %s", api.EndpointProcess)
	log.Printf("API endpoint process: %s", api.EndpointAuthToken)

	// Start the server on port 8080
	log.Fatal(http.ListenAndServe(":8080", nil))

}
