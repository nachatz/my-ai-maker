package models

import "strings"

type Gen struct {
	/* Gen - Represents the generated code object
	   @Field FeatureRequest - Feature request associated with the generated code.
	   @Field Source - String builder for the main source code.
	   @Field Imports - String builder for import statements.
	   @Field Functions - String builder for function declarations.
	   @Field Features - Features associated with the generated code.
	*/
	FeatureRequest FeatureRequest
	Source         *strings.Builder
	Imports        *strings.Builder
	Functions      *strings.Builder
	Features       Features
}

type Features struct {
	/* Features - Represents the features for a given dataset
	   @Field StringFeatures - Slice of strings for string features.
	   @Field IntegerFeatures - Slice of strings for integer features.
	   @Field FloatFeatures - Slice of strings for float features.
	   @Field BooleanFeatures - Slice of strings for boolean features.
	*/
	StringFeatures  []string
	IntegerFeatures []string
	FloatFeatures   []string
	BooleanFeatures []string
}
