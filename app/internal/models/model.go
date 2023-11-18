package models

type ModelInfo struct {
	/* ModelInfo - Info for all available models
	   @Field Name - Name of the model
	   @Field Language - Language implementing
	   @Field Library - Library used
	*/
	Name     string `json:"name"`
	Language string `json:"language"`
	Library  string `json:"library"`
}
