from flask import Flask, jsonify

api = Flask(__name__)

# sanity check route
@api.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')