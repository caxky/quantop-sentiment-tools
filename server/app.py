import os
from flask import Flask, jsonify, json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# sanity check route
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')

@app.route('/stocks/overall', methods=['GET'])
def get_stocks_overall():
    filename = os.path.join(app.root_path, 'data', 'stocks.json')
    with open(filename) as f:
        data = json.load(f)

    return data

@app.route('/stocks/news', methods=['GET'])
def get_stocks_news():
    filename = os.path.join(app.root_path, 'data', 'stocks.json')
    with open(filename) as f:
        data = json.load(f)

    return data

@app.route('/stocks/reddit', methods=['GET'])
def get_stocks_reddit():
    filename = os.path.join(app.root_path, 'data', 'stocks.json')
    with open(filename) as f:
        data = json.load(f)

    return data

@app.route('/stocks/twitter', methods=['GET'])
def get_stocks_twitter():
    filename = os.path.join(app.root_path, 'data', 'stocks.json')
    with open(filename) as f:
        data = json.load(f)

    return data

@app.route('/crypto/overall', methods=['GET'])
def get_crypto_overall():
    filename = os.path.join(app.root_path, 'data', 'crypto.json')
    with open(filename) as f:
        data = json.load(f)

    return data

@app.route('/crypto/news', methods=['GET'])
def get_crypto_news():
    filename = os.path.join(app.root_path, 'data', 'crypto.json')
    with open(filename) as f:
        data = json.load(f)

    return data

@app.route('/crypto/reddit', methods=['GET'])
def get_crypto_reddit():
    filename = os.path.join(app.root_path, 'data', 'crypto.json')
    with open(filename) as f:
        data = json.load(f)

    return data

@app.route('/crypto/twitter', methods=['GET'])
def get_crypto_twitter():
    filename = os.path.join(app.root_path, 'data', 'crypto.json')
    with open(filename) as f:
        data = json.load(f)

    return data

if __name__ == '__main__':
    app.run()