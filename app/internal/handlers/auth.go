package handlers

import (
	"log"

	"github.com/dgrijalva/jwt-go"
	"github.com/nachatz/my-ai-maker/app/internal/models"
	"github.com/nachatz/my-ai-maker/app/internal/utils"

	"net/http"
	"time"
)

func GenerateJWTHandler(w http.ResponseWriter, r *http.Request, clientSecret string, clientId string) {
	/* GenerateJWTHandler - Handles the HTTP request for generating a JWT.
	   @Param w - The http.ResponseWriter to write the response to.
	   @Param r - The *http.Request representing the incoming request.
	   @Param clientSecret - The client secret value obtained from the headers.
	   @Param clientId - The client ID value obtained from the headers.
	*/

	var response models.Response
	var creds models.ClientCredentials

	// Parse JSON body
	err := utils.ReadJsonBody(r, &creds)
	if err.StatusCode != 0 {
		utils.WriteResponse(w, err)
		return
	}

	// Make sure these values match the ones in the .env file
	if creds.ClientSecret != clientSecret || creds.ClientID != clientId {
		response.Message = "Got em - Invalid client credentials!"
		response.StatusCode = http.StatusUnauthorized
	} else {
		log.Println("**** Generating JWT...")
		response = generateJwtResponse(r, clientSecret, clientId)
	}

	utils.WriteResponse(w, response)
}

func generateJwtResponse(r *http.Request, clientSecret string, clientId string) models.Response {
	/* generateJwtResponse - Generates a JWT using the provided client secret and client ID.
	   @Param r - The *http.Request representing the incoming request.
	   @Param clientSecret - The client secret value obtained from the headers.
	   @Param clientId - The client ID value obtained from the headers.
	   @Return models.Response - The response to return to the client.
	*/

	var response models.Response

	// Create the JWT token
	token := jwt.New(jwt.SigningMethodHS256)

	// Set the claims (payload) of the token
	claims := token.Claims.(jwt.MapClaims)
	claims["exp"] = time.Now().Add(time.Minute * 45).Unix()
	claims["clientId"] = clientId

	// Generate the signed token string using the client secret
	tokenString, err := token.SignedString([]byte(clientSecret))
	if err != nil {
		response.Message = "Failed to generate JWT"
		response.StatusCode = http.StatusInternalServerError
	} else {
		response.Message = "Successfully generated JWT: " + tokenString
		response.StatusCode = http.StatusOK
	}

	log.Println("**** JWT generated")
	return response
}
