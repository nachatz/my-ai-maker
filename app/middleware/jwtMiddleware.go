package middleware

import (
	"context"
	"fmt"
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
)

func JwtMiddleware(next http.Handler, clientSecret string) http.Handler {
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
	if authHeader != "" && strings.HasPrefix(authHeader, "Bearer ") {
		return authHeader[7:]
	}
	return ""
}

func verifyToken(tokenString string, clientSecret string) (jwt.MapClaims, error) {
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
	return context.WithValue(ctx, "claims", claims)
}
