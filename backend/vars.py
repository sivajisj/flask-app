from flask import Flask, render_template

app = Flask(__name__)

@app.route('/name/<string:name>')
def greet(name):
    return f"<h1>Hellooo🚀  {name}</h1>"

@app.route('/')
def home():
    return render_template("index.html",names=["sj","leo"])

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == '__main__':
    app.run(debug=True)