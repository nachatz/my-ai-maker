from flask import Flask, request, jsonify
import pandas as pd
import torch
import torch.nn as nn
import torch.optim as optim
import torch.utils.data as data
import threading
from model import Feedforward 
from api.models.response import Response

app = Flask(__name__)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

def preprocess_data(csv_file):
    df = pd.read_csv(csv_file)
    return df

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        res = Response("No file found", 400)
    else:
        file = request.files['file']
        if file.filename == '' or not file.filename.lower().endswith(('.csv')):
            res = Response("Bad file format", 400)
        else:
            try:
                df = preprocess_data(file)
                res = Response("CSV processed", 200)
            except Exception as e:
                res = Response.Response("Internal server error in upload", 500)

    return res.output()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True)
