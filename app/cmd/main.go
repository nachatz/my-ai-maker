package main

import (
	"log"
	"net/http"

	"github.com/joho/godotenv"
	"github.com/nachatz/my-ai-maker/app/internal/config"
)

func main() {

	// Load in environment variables
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Initialize the config
	config := config.NewConfig()

	// Initialize the router
	router := InitRoutes(config)

	server := &http.Server{
		Addr:    ":" + config.Port,
		Handler: router,
	}

	// Start the server on the specified port
	log.Println("Starting server on port " + config.Port)
	log.Fatal(server.ListenAndServe())

}
