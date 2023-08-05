from flask import jsonify

class Response:
    def __init__(self, message: str, status_code: int):
        self.message = message
        self.status_code = status_code
    
    def output(self) -> jsonify, int:
        return jsonify(self.message), self.status_code
