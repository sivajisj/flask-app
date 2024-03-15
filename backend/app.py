from flask import Flask, render_template, request, redirect, url_for
from forms import Todo
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SECRET_KEY"] = "sjisabrand"
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///tmp/test.db'

db = SQLAlchemy(app)


class TodoModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(240))

    def __str__(self):
        return f'{self.content}   {self.id}'

with app.app_context():
    db.create_all()


@app.route('/', methods=['GET','POST'])	
def home():
    request_method = request.method
    todo = TodoModel.query.all()
    if request.method == 'POST':
        print("-----------------")
        print(request.form.get("fname"))
        print(request.form.get("lname"))
        print("-----------------")
        return redirect(url_for("name",fname=request.form.get("fname" )))
    return render_template("hello.html", request_method=request_method,todo=todo)

@app.route("/todo", methods=["GET","POST"])
def todo():
    todo_form = Todo()
    if todo_form.validate_on_submit():
        todo = TodoModel(content=todo_form.content.data)
        db.session.add(todo)
        db.session.commit()
        print(todo_form.content.data)
    return render_template("todo.html",form=todo_form)

@app.route("/name/<string:fname>")
def name(fname):
    return f"name page of {fname}"
if __name__ == '__main__':
    app.run(debug=True)