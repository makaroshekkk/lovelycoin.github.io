from flask import Flask, request, abort, render_template_string

app = Flask(__name__)

@app.route('/')
def index():
    user_agent = request.headers.get('User-Agent', '')
    if 'TelegramBot' in user_agent or 'Telegram' in user_agent:
        return render_template_string(open('index.html').read())
    else:
        abort(403)

if __name__ == '__main__':
    app.run()
