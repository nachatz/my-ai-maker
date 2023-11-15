package gen

import (
	"github.com/nachatz/my-ai-maker/app/internal/models"
	"testing"
)

func TestInvalidLanguage(t *testing.T) {
	unsupportedLanguage := "java"
	featureRequest := models.FeatureRequest{
		Language: unsupportedLanguage,
	}

	_, err := GenerateCode(featureRequest)

	if err == nil {
		t.Error("Expected an error, but got nil")
	} else if err.Error() != "language not implemented" {
		t.Errorf("Unexpected error message: got %v, want 'language not implemented'", err)
	}
}
