## db intialization

ython 3.12.2 (main, Mar  6 2024, 09:19:36) [GCC 11.4.0] on linux
App: app
Instance: /workspace/flask-app/backend/instance
>>> from app import db
>>> db.create_all()
>>> from app import TodoModel
>>> todo = TodoModel(content="I want to eat')
  File "<console>", line 1
    todo = TodoModel(content="I want to eat')
                             ^
SyntaxError: unterminated string literal (detected at line 1)
>>> todo = TodoModel(content="I want to eat")
>>> db.session.add(todo)
>>> db.session.commit()
>>> todo
<TodoModel 1>
>>> todos = TodoModel.query.filter_by(id=1).first()
>>> todos.id
1
>>> todos.content
'I want to eat'