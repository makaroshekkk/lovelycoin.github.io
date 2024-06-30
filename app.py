from flask import Flask, request, jsonify

app = Flask(__name__)
coin_count = 0

@app.route('/')
def index():
    return """
    <html>
    <head><title>Telegram Web Game</title></head>
    <body>
    <h1>Кликни, чтобы получить монету!</h1>
    <button onclick="getCoin()">Получить монету</button>
    <p>Ты получил(а) <span id="coin_count">{}</span> монет.</p>
    <script>
    function getCoin() {
        fetch('/get_coin')
        .then(response => response.json())
        .then(data => {
            document.getElementById('coin_count').innerText = data.coin_count;
        });
    }
    </script>
    </body>
    </html>
    """.format(coin_count)

@app.route('/get_coin')
def get_coin():
    global coin_count
    coin_count += 1
    return jsonify({'coin_count': coin_count})

if __name__ == '__main__':
    app.run(debug=True)
