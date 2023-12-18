import torch
from endpoints import Endpoints
from api.models.response import Response
from exceptions import BadFileFormatException
from utils import preprocess_data
from flask import Flask, request

app = Flask(__name__)


@app.route(Endpoints.UPLOAD, methods=["POST"])
def upload():
    """
    Handles the file upload request.

    This function is responsible for handling the POST request to the '/upload' endpoint. It expects a file to be included in the request payload.
    If the file is missing, has an empty filename, or is not in CSV format, it will return a 'Bad file format' response with a status code of 400.

    Returns:
    - If the file is successfully processed, it returns a 'CSV processed' response with a status code of 200.
    - If a KeyError occurs during the file processing, it returns a 'Bad file format' response with the specific error message and a status code of 400.
    - If any other exception occurs during the file processing, it returns an 'Internal server error in upload' response with the specific error message and a status code of 500.
    """
    try:
        file = request.files["file"]
        if (
            not file
            or file.filename == ""
            or not file.filename.lower().endswith((".csv"))
        ):
            raise BadFileFormatException()
        preprocess_data(file)
    except BadFileFormatException as e:
        return Response(f"Bad file format {e}", 400)
    except Exception as e:
        return Response(f"Internal server error in upload {e}", 500)
    return Response("CSV processed", 200)


if __name__ == "__main__":
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    app.run(host="0.0.0.0", port=5000, threaded=True)
