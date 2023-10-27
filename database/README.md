# Database Schema Documentation

The database schema consists of three primary models: `Session`, `User`, and `VerificationToken`.

## Session

The `Session` model represents user sessions. Each session has the following fields:

- `id` (String, Primary Key): A unique identifier for the session.
- `sessionToken` (String, Unique): A unique token associated with the session.
- `userId` (String): The ID of the user who owns this session.
- `expires` (DateTime): The date and time when the session expires.
- `user` (User): A relationship linking the session to a user, defined by the `userId` field. If a user is deleted, their sessions are cascaded for deletion.

## User

The `User` model represents user accounts and their associated information. It has the following fields:

- `id` (String, Primary Key): A unique identifier for the user.
- `name` (String): The user's name (optional).
- `email` (String, Unique): The user's email address, which must be unique.
- `emailVerified` (DateTime): The date and time when the email address was verified (optional).
- `image` (String): A field to store the user's image.
- `accounts` (Account[]): A one-to-many relationship to the `Account` model, allowing a user to have multiple accounts.
- `sessions` (Session[]): A one-to-many relationship to the `Session` model, allowing a user to have multiple sessions.

## VerificationToken

The `VerificationToken` model is used for email verification purposes. It has the following fields:

- `identifier` (String): An identifier for the token.
- `token` (String, Unique): A unique token associated with email verification.
- `expires` (DateTime): The date and time when the token expires.