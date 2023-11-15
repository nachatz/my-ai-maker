package models

type FeatureRequest struct {
	/* FeatureRequest - Represents client credentials and feature specifications.
	   @Field Features - A map of feature names with their corresponding data types.
	   @Field ClientId - Client ID associated with the feature request.
	   @Field Language - The programming language for code generation (e.g., Go, Python).
	   @Field Library - The library or framework for which code is generated.
	   @Field Model - The model or template used for code generation.
	*/
	Features map[string]string `json:"features"`
	ClientId string            `json:"clientId"`
	Language string            `json:"language"`
	Library  string            `json:"library"`
	Model    string            `json:"model"`
}
