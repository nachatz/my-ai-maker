package main

import (
	"log"
	"net/http"

	"github.com/nachatz/my-ai-maker/app/handlers"
)

func main() {
	http.HandleFunc("/process", handlers.ProcessHandler)
	log.Println("Server started on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
