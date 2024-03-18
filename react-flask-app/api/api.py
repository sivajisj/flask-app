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
    data = request.json
    if 'content' in data:
        content = data['content']
        todo = Todo(content=content)
        db.session.add(todo)
        db.session.commit()
        return jsonify({'message': 'Todo created successfully'})
    else:
        return jsonify({'error': 'Content attribute is missing in the request data'})

@app.route("/api/<int:id>")
def show(id):
    return jsonify([*map(todo_serializer, Todo.query.filter_by(id=id))])

@app.route("/api/<int:id>", methods=["POST"])
def delete(id):
    content_id = id
    todo = Todo.query.get(content_id)
    db.session.delete(todo)
    db.session.commit()

    return {
        "204": "Deleted successfully"
    }



CORS(app)
if __name__ == '__main__':   
    app.run(debug=True)