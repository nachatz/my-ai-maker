package api

// API consts
const (
	BaseURL        = "http://api.my-ai-maker.com" // Base URL of the API
	EndpointSuffix = "/v1"                   	 // Endpoint suffix for version 1 of the API
	Endpoint       = BaseURL + EndpointSuffix
)

// API endpoints
const (
	EndpointProcess = Endpoint + "/process"
)
