package middleware

import (
	"context"
	"fmt"
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
)

func JwtMiddleware(next http.Handler, clientSecret string) http.Handler {
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
