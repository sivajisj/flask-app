from flask import Flask, render_template, request, redirect, url_for
from forms import Todo
app = Flask(__name__)

app.config["SECRET_KEY"] = "sjisabrand"


@app.route('/', methods=['GET','POST'])	
def home():
    request_method = request.method
    if request.method == 'POST':
        print("-----------------")
        print(request.form.get("fname"))
        print(request.form.get("lname"))
        print("-----------------")
        return redirect(url_for("name",fname=request.form.get("fname" )))
    return render_template("hello.html", request_method=request_method)

@app.route("/todo", methods=["GET","POST"])
def todo():
    todo_form = Todo()
    if todo_form.validate_on_submit():
        print(todo_form.content.data)
    return render_template("todo.html",form=todo_form)

@app.route("/name/<string:fname>")
def name(fname):
    return f"name page of {fname}"
if __name__ == '__main__':
    app.run(debug=True)