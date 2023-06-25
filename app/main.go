package main

import (
	"log"
	"net/http"

	"github.com/nachatz/my-ai-maker/app/api"
	"github.com/nachatz/my-ai-maker/app/handlers"
)

func main() {
	http.HandleFunc(api.EndpointProcess, handlers.ProcessHandler)
	log.Println("Server started on http://localhost:8080 routed at: " + api.Endpoint)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
