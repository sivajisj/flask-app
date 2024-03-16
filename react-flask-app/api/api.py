from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)


    def __str__(self):
        return f"{self.id} {self.content}"


def todo_serializer(todo):
    return {
        'id': todo.id,
        'content': todo.content
    }
@app.route('/api', methods=['GET'])
def index():
    todo = Todo.query.all()
    return jsonify([ *map(todo_serializer, todo)])

@app.route('/api/create', methods=['POST'])
def create():
    data = json.loads(request.data)
    todo = Todo(content=data.content)
    db.session.add(todo)
    db.session.commit()
    return {
        "201": "todo created successfully"
    }

CORS(app)
if __name__ == '__main__':   
    app.run(debug=True)