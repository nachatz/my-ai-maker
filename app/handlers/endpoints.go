package handlers

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/nachatz/my-ai-maker/app/api"
	"github.com/nachatz/my-ai-maker/app/middleware"
	"github.com/nachatz/my-ai-maker/app/models"
)

func InitializeRoutes() *mux.Router {
	/* InitializeRoutes - Initializes the API routes and returns the router.
	   @Return *mux.Router - The initialized router.
	*/
	var router = mux.NewRouter()

	// load in environment variables from .env file using os package
	clientSecret := os.Getenv("CLIENT_SECRET")
	if clientSecret == "" {
		log.Fatal("CLIENT_SECRET environment variable not set")
		return nil
	}

	// Routes
	router.Handle(api.EndpointProcess, middleware.JwtMiddleware(http.HandlerFunc(ProcessHandler), clientSecret)).Methods("POST")
	router.HandleFunc(api.EndpointAuthToken, func(w http.ResponseWriter, r *http.Request) { GenerateJWTHandler(w, r, clientSecret) }).Methods("POST")
	router.MethodNotAllowedHandler = methodNotAllowedHandler()

	return router

}

func methodNotAllowedHandler() http.Handler {
	/* methodNotAllowedHandler - Handles the method not allowed error by returning an appropriate response.
	   @Return http.Handler - The handler for method not allowed error.
	*/
	response := models.Response{
		StatusCode: http.StatusMethodNotAllowed,
		Message:    "Method not allowed",
	}

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(response.StatusCode)
		json.NewEncoder(w).Encode(response)
	})
}
