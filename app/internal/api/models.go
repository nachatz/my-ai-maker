package api

import "github.com/nachatz/my-ai-maker/app/internal/models"

var AvailableModels = []models.ModelInfo{
	{
		Name:     "Linear Regression",
		Language: "Python",
		Library:  "pytorch",
	},
}
