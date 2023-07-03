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
	clientId := os.Getenv("CLIENT_ID")
	if clientSecret == "" || clientId == "" {
		log.Fatal("CLIENT_SECRET environment variable not set")
		return nil
	}

	// Routes
	router.Handle(api.EndpointProcess, middleware.JwtMiddleware(http.HandlerFunc(ProcessHandler), clientSecret)).Methods("POST")
	router.HandleFunc(api.EndpointAuthToken, func(w http.ResponseWriter, r *http.Request) { GenerateJWTHandler(w, r, clientSecret, clientId) }).Methods("POST")
	router.MethodNotAllowedHandler = methodNotAllowedHandler()

	// log the names of all the endpoints in the router
	logEndpointNames(router)

	return router

}

func logEndpointNames(router *mux.Router) {
	/* logEndpointNames - Logs the names of all the endpoints in the router.
	   @Param *mux.Router - The router to log the endpoint names of.
	*/
	router.Walk(func(route *mux.Route, router *mux.Router, ancestors []*mux.Route) error {
		path, err := route.GetPathTemplate()
		if err != nil {
			log.Fatal("Error getting path template")
			return err
		}
		log.Println("Endpoint:", path)
		return nil
	})
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
