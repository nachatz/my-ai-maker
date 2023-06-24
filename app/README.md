# Golang Backend for Data Intake

This Golang backend server provides an API to handle requests from a React client for data intake. It allows users to send data to the server for further processing and storage.

## Prerequisites

- Go 1.20.5

## Getting Started

1. Run `make init`
2. Run `make run`

# API Endpoints
The following API endpoints are available:

1. **POST /api/process**:

    Request Body: JSON payload containing the data in CSV format.

    Response: OK status 200, Bad Request 400, & Internal Server Error 500 (needs updating)

# To-Do

1. Update endpoint to avoid any internal server errors
2. Post data to kafka to be read into PySpark or build service to train model in go
3. Enable more data types