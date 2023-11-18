package main

import (
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/nachatz/my-ai-maker/app/internal/config"
)

func setDirectory() {
	// Load environment variables from .env file
	if err := godotenv.Load(); err != nil {
		log.Fatal("error loading .env file")
	}

	// Check if the environment is production
	env := os.Getenv("ENVIRONMENT")
	if env == "PRODUCTION" {
		if err := os.Chdir("../"); err != nil {
			log.Fatal("failed to set new working directory")
		}
	}

}

func main() {

	// Initialize the config
	cfg := config.NewConfig()

	// Initialize the router & server
	router := InitRoutes(cfg)
	server := config.NewServer(cfg, router)

	setDirectory()

	// Start the server on the specified port
	log.Println("Starting server on port " + cfg.Port)
	log.Fatal(server.ListenAndServe())
}
