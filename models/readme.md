# Models

This directory is deployed as a temporary microservice during qa -> prod. The use-case is to enable integration tests for validating model generation success.


## Kicking off

### Running
- `make install`
- `make run`

### Making changes
Ensure to run validation prior to committing
- `make validate`

### Add packages
- `poetry add [...]`