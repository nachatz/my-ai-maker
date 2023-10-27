CREATE TABLE User (
    id            VARCHAR(255) PRIMARY KEY,
    name          VARCHAR(255),
    email         VARCHAR(255) UNIQUE NOT NULL,
    emailVerified TIMESTAMP,
    image         VARCHAR(255),
);
