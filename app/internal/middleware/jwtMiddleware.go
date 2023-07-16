package middleware

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/auth0/go-jwt-middleware/v2/jwks"
	"github.com/auth0/go-jwt-middleware/v2/validator"
	"github.com/dgrijalva/jwt-go"
	"github.com/nachatz/my-ai-maker/app/internal/config"
)

func JwtMiddleware(next http.Handler, cfg *config.Config) http.Handler {
	/* JwtMiddleware - Middleware function for JWT authentication.
	   @Param next - The next http.Handler in the chain.
	   @Param config - configuration for the middleware.
	   @Return http.Handler - The middleware handler.
	*/
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		issuerURL := cfg.IssuerUrl
		parsedIssuerURL, err := url.Parse(issuerURL)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		provider := jwks.NewCachingProvider(parsedIssuerURL, 5*time.Minute)

		jwtValidator, err := validator.New(
			provider.KeyFunc,
			validator.RS256,
			issuerURL,
			[]string{cfg.Audience}, // the api audience!!!
		)

		if err != nil {
			log.Fatalf("Failed to set up the jwt validator")
		}

		// Get the token from the request header
		authHeader := r.Header.Get("Authorization")
		authHeaderParts := strings.Split(authHeader, " ")

		if len(authHeaderParts) != 2 {
			http.Error(w, err.Error(), http.StatusUnauthorized)
			return
		}

		// Validate the token
		tokenInfo, err := jwtValidator.ValidateToken(r.Context(), authHeaderParts[1])
		if err != nil {
			http.Error(w, err.Error(), http.StatusUnauthorized)
			return
		}

		validatedClaims, ok := tokenInfo.(*validator.ValidatedClaims)
		if !ok {
			fmt.Println("Unable to extract validated claims")
			return
		}

		// Create a new context with the subject information
		ctx := context.WithValue(r.Context(), "subject", validatedClaims.RegisteredClaims.Subject)

		// Call the next handler with the updated context
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func DeprecatedJwtMiddleware(next http.Handler, clientSecret string) http.Handler {
	/* JwtMiddleware - Middleware function for JWT authentication.
	   @Param next - The next http.Handler in the chain.
	   @Param clientSecret - The client secret key used for token verification.
	   @Return http.Handler - The middleware handler.
	*/
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		// Extract the JWT token from the Authorization header
		authHeader := r.Header.Get("Authorization")
		tokenString := getTokenFromAuthHeader(authHeader)

		// Verify the JWT token
		claims, err := verifyToken(tokenString, clientSecret)
		if err != nil {
			http.Error(w, err.Error(), http.StatusUnauthorized)
			return
		}

		// Set the claims for subsequent handlers
		r = r.WithContext(setClaimsToContext(r.Context(), claims))
		next.ServeHTTP(w, r)
	})
}

func getTokenFromAuthHeader(authHeader string) string {
	/* getTokenFromAuthHeader - Extracts the token string from the Authorization header.
	   @Param authHeader - The Authorization header string.
	   @Return string - The token string.
	*/
	if authHeader != "" && strings.HasPrefix(authHeader, "Bearer ") {
		return authHeader[7:]
	}
	return ""
}

func verifyToken(tokenString string, clientSecret string) (jwt.MapClaims, error) {
	/* verifyToken - Verifies the JWT token using the provided client secret.
	   @Param tokenString - The JWT token string.
	   @Param clientSecret - The client secret key used for token verification.
	   @Return jwt.MapClaims - The token claims if the verification is successful.
	   @Return error - An error if the verification fails.
	*/
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return []byte(clientSecret), nil
	})

	if err != nil || !token.Valid {
		return nil, fmt.Errorf("invalid or expired token")
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		return nil, fmt.Errorf("invalid token claims")
	}

	return claims, nil
}

func setClaimsToContext(ctx context.Context, claims jwt.MapClaims) context.Context {
	/* setClaimsToContext - Sets the token claims to the context.
	   @Param ctx - The context to set the claims to.
	   @Param claims - The token claims.
	   @Return context.Context - The updated context with claims.
	*/
	return context.WithValue(ctx, "claims", claims)
}
