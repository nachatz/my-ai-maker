package models

type FeatureRequest struct {
	/* ClientCredentials - Represents client credentials.
	   @Field Features - A map of feature names with their data types
	   @Field ClientId - Client ID.
	*/
	Features map[string]string `json:"features"`
	Language string            `json:"language"`
	Library  string            `json:"library"`
}
