package models

type ClientCredentials struct {
	/* ClientCredentials - Represents client credentials.
	   @Field ClientSecret - Client secret.
	   @Field ClientId - Client ID.
	*/
	ClientSecret string `json:"client-secret"`
	ClientID     string `json:"client-id"`
}
