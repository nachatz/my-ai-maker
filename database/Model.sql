CREATE TABLE Model (
    id              VARCHAR(255) PRIMARY KEY,
    title           VARCHAR(255),
    description     VARCHAR(255),
    type            VARCHAR(255),
    model_string    VARCHAR(255),
    features        JSON,
    transformations JSON,
    userId          VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES User(id) ON DELETE CASCADE
);
