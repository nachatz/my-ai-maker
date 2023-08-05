#!/bin/bash

# This script creates a new database in the PostgreSQL server.
# Use PgAdmin (v4.7.4) to connect to the PostgreSQL server and check if the database was created successfully.
# The script takes three command-line arguments:
# 1. The username of the PostgreSQL user
# 2. The password of the PostgreSQL user
# 3. The name of the new database to be created
# The script must be run as the root user.
# The script must be run from the database directory.
# The script must be run as follows:
#           chmod +x ./.sh
#           ./init.sh username password database_name

# Check if the correct number of arguments is provided
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <username> <password> <database_name>"
    exit 1
fi

# Read the command-line arguments & create the database
POSTGRES_USER="$1"
POSTGRES_PASSWORD="$2"
NEW_DATABASE_NAME="$3"
PGPASSWORD="$POSTGRES_PASSWORD" psql -U "$POSTGRES_USER" -c "CREATE DATABASE $NEW_DATABASE_NAME;"
DB_UTILS="$4"

# Check if the database creation was successful
if [ $? -eq 0 ]; then
    echo "Database '$NEW_DATABASE_NAME' created successfully."
else
    echo "Failed to create the database '$NEW_DATABASE_NAME'."
fi
