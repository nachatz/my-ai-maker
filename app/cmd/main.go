package main

import (
	"log"

	"github.com/nachatz/my-ai-maker/app/internal/config"
)

func main() {

	// Initialize the config
	cfg := config.NewConfig()

	// Initialize the router & server
	router := InitRoutes(cfg)
	server := config.NewServer(cfg, router)

	// Start the server on the specified port
	log.Println("Starting server on port " + cfg.Port)
	log.Fatal(server.ListenAndServe())

}
