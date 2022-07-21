import os
import re
from flask import Flask, jsonify, json, send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='../client/build', static_url_path='')
CORS(app)

def calculate_market_cap(list):
    market_cap = []

    for x in list:
        n = int(re.findall('\d+', x['marketcap'])[0])
        market_cap.append(n)

    return sum(market_cap)

def sort_by_daysentiment(list):
    n = int(re.findall('\d+', list['daysentiment'])[0])
    return n

def sort_by_weeksentiment(list):
    n = int(re.findall('\d+', list['weeksentiment'])[0])
    return n

def sort_by_monthsentiment(list):
    n = int(re.findall('\d+', list['monthsentiment'])[0])
    return n

def parse_data(list, type):
    labels=[]
    values=[]

    for x in list:
        n = int(re.findall('\d+', x[type])[0])

        labels.append(x['company'])
        values.append(n)

    return labels, values

# sanity check route
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')

@app.route('/stocks/overall', methods=['GET'])
def get_stocks_overall():
    filename = os.path.join(app.root_path, 'data', 'stocks.json')
    with open(filename) as f:
        data = json.load(f)

    negativeDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[:10], 'daysentiment')
    positiveDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[-10:], 'daysentiment')

    negativeWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[:10], 'weeksentiment')
    positiveWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[-10:], 'weeksentiment')

    negativeMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[:10], 'monthsentiment')
    positiveMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[-10:], 'monthsentiment')

    marketCap = calculate_market_cap(data['table'])

    data['marketCap'] = marketCap

    data['negativeGraph'].append(
        {
            "timescale": "24h",
            "labels": negativeDay[0],
            "values": negativeDay[1]
        }        
    )

    data['negativeGraph'].append(
        {
            "timescale": "7d",
            "labels": negativeWeek[0],
            "values": negativeWeek[1]
        }
    )

    data['negativeGraph'].append(
        {
            "timescale": "30d",
            "labels": negativeMonth[0],
            "values": negativeMonth[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "24h",
            "labels": positiveDay[0],
            "values": positiveDay[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "7d",
            "labels": positiveWeek[0],
            "values": positiveWeek[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "30d",
            "labels": positiveMonth[0],
            "values": positiveMonth[1]
        }
    )

    return data

@app.route('/stocks/news', methods=['GET'])
def get_stocks_news():
    filename = os.path.join(app.root_path, 'data', 'stocks.json')
    with open(filename) as f:
        data = json.load(f)

    negativeDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[:10], 'daysentiment')
    positiveDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[-10:], 'daysentiment')

    negativeWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[:10], 'weeksentiment')
    positiveWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[-10:], 'weeksentiment')

    negativeMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[:10], 'monthsentiment')
    positiveMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[-10:], 'monthsentiment')

    marketCap = calculate_market_cap(data['table'])

    data['marketCap'] = marketCap

    data['negativeGraph'].append(
        {
            "timescale": "24h",
            "labels": negativeDay[0],
            "values": negativeDay[1]
        }        
    )

    data['negativeGraph'].append(
        {
            "timescale": "7d",
            "labels": negativeWeek[0],
            "values": negativeWeek[1]
        }
    )

    data['negativeGraph'].append(
        {
            "timescale": "30d",
            "labels": negativeMonth[0],
            "values": negativeMonth[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "24h",
            "labels": positiveDay[0],
            "values": positiveDay[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "7d",
            "labels": positiveWeek[0],
            "values": positiveWeek[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "30d",
            "labels": positiveMonth[0],
            "values": positiveMonth[1]
        }
    )

    return data

@app.route('/stocks/reddit', methods=['GET'])
def get_stocks_reddit():
    filename = os.path.join(app.root_path, 'data', 'stocks.json')
    with open(filename) as f:
        data = json.load(f)

    negativeDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[:10], 'daysentiment')
    positiveDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[-10:], 'daysentiment')

    negativeWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[:10], 'weeksentiment')
    positiveWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[-10:], 'weeksentiment')

    negativeMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[:10], 'monthsentiment')
    positiveMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[-10:], 'monthsentiment')

    marketCap = calculate_market_cap(data['table'])

    data['marketCap'] = marketCap

    data['negativeGraph'].append(
        {
            "timescale": "24h",
            "labels": negativeDay[0],
            "values": negativeDay[1]
        }        
    )

    data['negativeGraph'].append(
        {
            "timescale": "7d",
            "labels": negativeWeek[0],
            "values": negativeWeek[1]
        }
    )

    data['negativeGraph'].append(
        {
            "timescale": "30d",
            "labels": negativeMonth[0],
            "values": negativeMonth[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "24h",
            "labels": positiveDay[0],
            "values": positiveDay[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "7d",
            "labels": positiveWeek[0],
            "values": positiveWeek[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "30d",
            "labels": positiveMonth[0],
            "values": positiveMonth[1]
        }
    )

    return data

@app.route('/stocks/twitter', methods=['GET'])
def get_stocks_twitter():
    filename = os.path.join(app.root_path, 'data', 'stocks.json')
    with open(filename) as f:
        data = json.load(f)

    negativeDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[:10], 'daysentiment')
    positiveDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[-10:], 'daysentiment')

    negativeWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[:10], 'weeksentiment')
    positiveWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[-10:], 'weeksentiment')

    negativeMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[:10], 'monthsentiment')
    positiveMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[-10:], 'monthsentiment')

    marketCap = calculate_market_cap(data['table'])

    data['marketCap'] = marketCap

    data['negativeGraph'].append(
        {
            "timescale": "24h",
            "labels": negativeDay[0],
            "values": negativeDay[1]
        }        
    )

    data['negativeGraph'].append(
        {
            "timescale": "7d",
            "labels": negativeWeek[0],
            "values": negativeWeek[1]
        }
    )

    data['negativeGraph'].append(
        {
            "timescale": "30d",
            "labels": negativeMonth[0],
            "values": negativeMonth[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "24h",
            "labels": positiveDay[0],
            "values": positiveDay[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "7d",
            "labels": positiveWeek[0],
            "values": positiveWeek[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "30d",
            "labels": positiveMonth[0],
            "values": positiveMonth[1]
        }
    )

    return data

@app.route('/crypto/overall', methods=['GET'])
def get_crypto_overall():
    filename = os.path.join(app.root_path, 'data', 'crypto.json')
    with open(filename) as f:
        data = json.load(f)

    negativeDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[:10], 'daysentiment')
    positiveDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[-10:], 'daysentiment')

    negativeWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[:10], 'weeksentiment')
    positiveWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[-10:], 'weeksentiment')

    negativeMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[:10], 'monthsentiment')
    positiveMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[-10:], 'monthsentiment')

    marketCap = calculate_market_cap(data['table'])

    data['marketCap'] = marketCap

    data['negativeGraph'].append(
        {
            "timescale": "24h",
            "labels": negativeDay[0],
            "values": negativeDay[1]
        }        
    )

    data['negativeGraph'].append(
        {
            "timescale": "7d",
            "labels": negativeWeek[0],
            "values": negativeWeek[1]
        }
    )

    data['negativeGraph'].append(
        {
            "timescale": "30d",
            "labels": negativeMonth[0],
            "values": negativeMonth[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "24h",
            "labels": positiveDay[0],
            "values": positiveDay[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "7d",
            "labels": positiveWeek[0],
            "values": positiveWeek[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "30d",
            "labels": positiveMonth[0],
            "values": positiveMonth[1]
        }
    )

    return data

@app.route('/crypto/news', methods=['GET'])
def get_crypto_news():
    filename = os.path.join(app.root_path, 'data', 'crypto.json')
    with open(filename) as f:
        data = json.load(f)

    negativeDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[:10], 'daysentiment')
    positiveDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[-10:], 'daysentiment')

    negativeWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[:10], 'weeksentiment')
    positiveWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[-10:], 'weeksentiment')

    negativeMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[:10], 'monthsentiment')
    positiveMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[-10:], 'monthsentiment')

    marketCap = calculate_market_cap(data['table'])

    data['marketCap'] = marketCap

    data['negativeGraph'].append(
        {
            "timescale": "24h",
            "labels": negativeDay[0],
            "values": negativeDay[1]
        }        
    )

    data['negativeGraph'].append(
        {
            "timescale": "7d",
            "labels": negativeWeek[0],
            "values": negativeWeek[1]
        }
    )

    data['negativeGraph'].append(
        {
            "timescale": "30d",
            "labels": negativeMonth[0],
            "values": negativeMonth[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "24h",
            "labels": positiveDay[0],
            "values": positiveDay[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "7d",
            "labels": positiveWeek[0],
            "values": positiveWeek[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "30d",
            "labels": positiveMonth[0],
            "values": positiveMonth[1]
        }
    )

    return data

@app.route('/crypto/reddit', methods=['GET'])
def get_crypto_reddit():
    filename = os.path.join(app.root_path, 'data', 'crypto.json')
    with open(filename) as f:
        data = json.load(f)

    negativeDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[:10], 'daysentiment')
    positiveDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[-10:], 'daysentiment')

    negativeWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[:10], 'weeksentiment')
    positiveWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[-10:], 'weeksentiment')

    negativeMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[:10], 'monthsentiment')
    positiveMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[-10:], 'monthsentiment')

    marketCap = calculate_market_cap(data['table'])

    data['marketCap'] = marketCap

    data['negativeGraph'].append(
        {
            "timescale": "24h",
            "labels": negativeDay[0],
            "values": negativeDay[1]
        }        
    )

    data['negativeGraph'].append(
        {
            "timescale": "7d",
            "labels": negativeWeek[0],
            "values": negativeWeek[1]
        }
    )

    data['negativeGraph'].append(
        {
            "timescale": "30d",
            "labels": negativeMonth[0],
            "values": negativeMonth[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "24h",
            "labels": positiveDay[0],
            "values": positiveDay[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "7d",
            "labels": positiveWeek[0],
            "values": positiveWeek[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "30d",
            "labels": positiveMonth[0],
            "values": positiveMonth[1]
        }
    )

    return data

@app.route('/crypto/twitter', methods=['GET'])
def get_crypto_twitter():
    filename = os.path.join(app.root_path, 'data', 'crypto.json')
    with open(filename) as f:
        data = json.load(f)

    negativeDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[:10], 'daysentiment')
    positiveDay = parse_data(sorted(data['table'], key=sort_by_daysentiment)[-10:], 'daysentiment')

    negativeWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[:10], 'weeksentiment')
    positiveWeek = parse_data(sorted(data['table'], key=sort_by_weeksentiment)[-10:], 'weeksentiment')

    negativeMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[:10], 'monthsentiment')
    positiveMonth = parse_data(sorted(data['table'], key=sort_by_monthsentiment)[-10:], 'monthsentiment')

    marketCap = calculate_market_cap(data['table'])

    data['marketCap'] = marketCap

    data['negativeGraph'].append(
        {
            "timescale": "24h",
            "labels": negativeDay[0],
            "values": negativeDay[1]
        }        
    )

    data['negativeGraph'].append(
        {
            "timescale": "7d",
            "labels": negativeWeek[0],
            "values": negativeWeek[1]
        }
    )

    data['negativeGraph'].append(
        {
            "timescale": "30d",
            "labels": negativeMonth[0],
            "values": negativeMonth[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "24h",
            "labels": positiveDay[0],
            "values": positiveDay[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "7d",
            "labels": positiveWeek[0],
            "values": positiveWeek[1]
        }
    )

    data['positiveGraph'].append(
        {
            "timescale": "30d",
            "labels": positiveMonth[0],
            "values": positiveMonth[1]
        }
    )

    return data

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()