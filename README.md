# My Ai Maker
My AI Maker is a web application that enables users to upload their own datasets and train machine learning models with zero knowledge of machine learning required. This application provides an intuitive interface for dataset management, model training, and result visualization.

![Landing page](.github/images/Landing%20Page.png)

# Architecture
    - Next.js React frontend for user interface and consumption of models/results
    -- Auth, database, and specialized client endpoints
    - Golang service for handling generation, parsing, and availability of models
    - Python integration service to pull and validate generated models in real time
    - PySpark service for handling data queue

![Technical diagram](.github/images/Technical%20Diagrams.jpg)

# License
This project is licensed under the MIT License.