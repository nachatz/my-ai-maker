package config

import (
	"log"
	"net/http"
	"os"

	"github.com/rs/cors"
	"gopkg.in/yaml.v2"
)

type Config struct {
	/* Config - Represents a configuration object.
	   @Field CorsOrigins - The origins to allow CORS requests from.
	   @Field Auth - The authentication configuration.
	*/
	Port        string   `yaml:"port"`
	CorsOrigins []string `yaml:"cors_origins"`
	IssuerUrl   string   `yaml:"issuer_url"`
	Audience    string   `yaml:"audience"`
	Auth        struct {
		ClientID     string `yaml:"client_id"`
		ClientSecret string `yaml:"client_secret"`
	} `yaml:"auth"`
}

func NewConfig() *Config {
	/* NewConfig - Creates a new Config object.
	   @Return *Config - The Config object.
	*/

	cfg := Config{}

	// Read the YAML file
	data, err := os.ReadFile("config.yaml")
	if err != nil {
		log.Fatal("Failed to read YAML file:", err)
	}

	// Decode the YAML data into the Config struct
	err = yaml.Unmarshal(data, &cfg)
	if err != nil {
		log.Fatal("Failed to decode YAML:", err)
	}

	// load environment variables
	clientSecret := os.Getenv("CLIENT_SECRET")
	clientID := os.Getenv("CLIENT_ID")
	issuerUrl := os.Getenv("ISSUER_URL")
	audience := os.Getenv("AUDIENCE")
	if clientSecret == "" || clientID == "" || issuerUrl == "" || audience == "" {
		log.Fatal("Environment variable not set")
	}

	cfg.Auth.ClientSecret = clientSecret
	cfg.Auth.ClientID = clientID
	cfg.IssuerUrl = issuerUrl
	cfg.Audience = audience

	return &cfg
}

func NewServer(cfg *Config, router http.Handler) *http.Server {
	/* NewServer - Creates a new HTTP server.
	   @Param config *Config - The configuration object.
	   @Param router http.Handler - The router to use.
	   @Return *http.Server - The HTTP server.
	*/
	cors := cors.New(cors.Options{
		AllowedOrigins:   cfg.CorsOrigins,
		AllowedMethods:   []string{"GET", "POST"},
		AllowedHeaders:   []string{"Authorization", "Content-Type"},
		AllowCredentials: true,
	})

	return &http.Server{
		Addr:    ":" + cfg.Port,
		Handler: cors.Handler(router),
	}
}
