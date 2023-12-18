class BadFileFormatException(Exception):
    def __init__(self, message: str = "Bad file format", file_name: str = None):
        """
        Initializes a new instance of the class.

        Args:
            message (str, optional): The error message. Defaults to "Bad file format".
            file_name (str, optional): The name of the file. Defaults to None.

        Returns:
            None
        """
        self.message = message
        self.file_name = file_name
        super().__init__(message)
