from flask import Flask, request, jsonify
import torch
import torch.nn as nn
import torch.optim as optim
import torch.utils.data as data
import threading
from model import Feedforward 


app = Flask(__name__)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")


def preprocess_data():
    pass

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True)
