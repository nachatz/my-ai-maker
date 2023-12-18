from dataclasses import dataclass


@dataclass(frozen=True)
class Endpoints:
    """
    Class representing API endpoints.

    Attributes:
        VALIDATE (str): The endpoint for validation.
        UPLOAD (str): The endpoint for upload.
    """
    VALIDATE: str = "/validate"
    UPLOAD: str = "/upload"
