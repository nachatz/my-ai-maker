#!/bin/bash

# Specify the .env file path
env_file=".env"

# Define the content for the .env file
env_content=$(cat <<EOF
DATABASE_URL:"nosir"
NEXTAUTH_SECRET:"nosir"
GOOGLE_CLIENT_ID:"nosir"
GOOGLE_CLIENT_SECRET:"nosir"
EOF
)

# Write the content to the .env file
echo "$env_content" > "$env_file"

echo "Created fake $env_file"