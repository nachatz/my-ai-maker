package models

type Response struct {
	/* Response - Represents a response object.
	   @Field Message - The message associated with the response.
	   @Field StatusCode - The status code of the response.
	*/
	Message    interface{} `json:"message"`
	StatusCode int
}
