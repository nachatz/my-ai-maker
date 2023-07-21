package middleware

import (
	"net/http"

	"golang.org/x/time/rate"
)

func RateLimitMiddleware(limiter *rate.Limiter) func(next http.Handler) http.Handler {
	/* RateLimitMiddleware ensures that the request rate is limited to the specified rate.
	   @Param limiter: Rate limiting object.
	   @Return http.Handler: The middleware handler responsible for authenticating JWT tokens and passing the request to the next handler if the token is valid.
	*/
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			if !limiter.Allow() {
				http.Error(w, "Rate limit exceeded - try again soon", http.StatusTooManyRequests)
				return
			}
			next.ServeHTTP(w, r)
		})
	}
}
