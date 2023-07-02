package main

import (
	"log"
	"net/http"

	"github.com/joho/godotenv"
	"github.com/nachatz/my-ai-maker/app/handlers"
)

func main() {

	// load in environment variables from .env file using os package
	err := godotenv.Load()
	if err != nil {
		// Handle the error if loading the .env file fails
		log.Fatal("Error loading .env file")
		return
	}

	// Initialize the router
	router := handlers.InitializeRoutes()

	// Start the server on port 8080
	log.Fatal(http.ListenAndServe(":8080", router))

}
