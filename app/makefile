# Go parameters
GOCMD   = go
GOBUILD = $(GOCMD) build
GOTIDY  = $(GOCMD) mod tidy

# Binary name
BINARY_NAME = my-ai-maker

init:
	$(GOCMD) mod init github.com/nachatz/my-ai-maker/app 

run:
	$(GOTIDY)
	$(GOBUILD) -o $(BINARY_NAME)
	./$(BINARY_NAME)

clean:
	rm go.mod
	rm $(BINARY_NAME)

# automated deploy ignore for now
install:
	$(GOBUILD) -o $(BINARY_NAME) -v ./...
	cp $(BINARY_NAME) /usr/local/bin/$(BINARY_NAME)

.PHONY: init run clean