package handlers

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/go-chi/chi"
	"github.com/nachatz/my-ai-maker/app/internal/api"
	"github.com/nachatz/my-ai-maker/app/internal/middleware"
	"github.com/nachatz/my-ai-maker/app/internal/models"
)

func InitRoutes() http.Handler {
	mux := chi.NewRouter()

	// load environment variables
	clientSecret := os.Getenv("CLIENT_SECRET")
	clientID := os.Getenv("CLIENT_ID")
	if clientSecret == "" || clientID == "" {
		log.Fatal("CLIENT_SECRET or CLIENT_ID environment variable not set")
		return nil
	}

	// Non-authenticated endpoints
	mux.Post(api.EndpointAuthToken, func(w http.ResponseWriter, r *http.Request) {
		GenerateJWTHandler(w, r, clientSecret, clientID)
	})

	// Authenticated endpoints
	mux.Group(func(r chi.Router) {
		r.Use(func(next http.Handler) http.Handler {
			return middleware.JwtMiddleware(next, clientSecret)
		})
		r.Post(api.EndpointProcess, ProcessHandler)
	})

	mux.MethodNotAllowed(methodNotAllowedHandler())

	// log the names of all the endpoints in the router
	logEndpointNames(mux)

	return mux
}

func logEndpointNames(router chi.Router) {
	/* logEndpointNames - Logs the names of all the endpoints in the router.
	   @Param chi.Router - The router to log the endpoint names of.
	*/
	walker := func(method string, route string, handler http.Handler, middlewares ...func(http.Handler) http.Handler) error {
		log.Println("Endpoint:", route)
		return nil
	}

	if err := chi.Walk(router, walker); err != nil {
		log.Fatal("Error walking the router:", err)
	}
}


func methodNotAllowedHandler() http.HandlerFunc {
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
