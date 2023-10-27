CREATE TABLE VerificationToken (
    identifier VARCHAR(255),
    token      VARCHAR(255) UNIQUE NOT NULL,
    expires    TIMESTAMP,
    UNIQUE (identifier, token)
);
