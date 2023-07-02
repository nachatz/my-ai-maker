package handlers

import (
	"github.com/dgrijalva/jwt-go"
	"github.com/nachatz/my-ai-maker/app/models"
	"github.com/nachatz/my-ai-maker/app/utils"

	"net/http"
	"time"
)

func GenerateJWTHandler(w http.ResponseWriter, r *http.Request, clientSecret string) {
	/* GenerateJWTHandler - Handles the HTTP request for generating a JWT.
	   @Param w - The http.ResponseWriter to write the response to.
	   @Param r - The *http.Request representing the incoming request.
	*/

	var response models.Response

	if r.Method != http.MethodGet {
		response.Message = "Method not allowed"
		response.StatusCode = http.StatusMethodNotAllowed
	} else {
		response = generateJwtResponse(r, clientSecret)
	}

	utils.WriteResponse(w, response)
}

func generateJwtResponse(r *http.Request, clientSecret string) models.Response {
	/* generateJwtResponse - Generates a JWT response based on the provided request.
	   @Param r - The *http.Request representing the incoming request.
	   @Return models.Response - The generated JWT response.
	*/

	var response models.Response

	// Create the JWT token
	token := jwt.New(jwt.SigningMethodHS256)

	// Set the claims (payload) of the token
	claims := token.Claims.(jwt.MapClaims)
	claims["exp"] = time.Now().Add(time.Hour * 24).Unix()

	// Generate the signed token string using the client secret
	tokenString, err := token.SignedString([]byte(clientSecret))
	if err != nil {
		response.Message = "Failed to generate JWT"
		response.StatusCode = http.StatusInternalServerError
	} else {
		response.Message = "Successfully generated JWT: " + tokenString
		response.StatusCode = http.StatusOK
	}

	return response
}
