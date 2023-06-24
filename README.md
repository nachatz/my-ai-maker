# My Ai Maker
My AI Maker is a web application that enables users to upload their own datasets and train machine learning models with zero knowledge of machine learning required. This application provides an intuitive interface for dataset management, model training, and result visualization.

# Features
    - Endpoint for uploading CSV data http://api.my-ai-maker.com/v1/process

# Architecture
    - React frontend for user interface and consumption of models/results
    - Golang service for handling auth, data upload, and model return
    - Python service for training models
    - PySpark service for handling data queue

# License
This project is licensed under the MIT License.