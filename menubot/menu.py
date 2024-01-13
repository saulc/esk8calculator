import sqlite3
from bottle import route, run, debug, template, request, static_file, error

# only needed when you run Bottle on mod_wsgi
from bottle import default_app


@route('/orders')
def todo_list():

    conn = sqlite3.connect('order.db')
    c = conn.cursor()
    c.execute("SELECT * FROM orders JOIN menu ON orders.id = menu.id WHERE status LIKE '1' ")
    result = c.fetchall()
    c.close()

    output = template('make_table', rows=result)
    return output

@route('/menu')
def menu_list():

    conn = sqlite3.connect('order.db')
    c = conn.cursor()
    c.execute("SELECT id, name, quantity FROM menu WHERE quantity >= 0")
    result = c.fetchall()
    c.close()

    output = template('make_table', rows=result)
    return output


@route('/new', method='GET')
def new_item():

    if request.GET.save:

        new = request.GET.id.strip()
        qty = request.GET.qty.strip()
        conn = sqlite3.connect('order.db')
        c = conn.cursor()

        c.execute("INSERT INTO orders (id, quantity, status) VALUES (?,?, ?)", (new, qty, 1))
        new_id = c.lastrowid

        conn.commit()
        c.close()

        return '<p>The new item was inserted into the database, the ID is %s</p>' % new_id

    else:
        return template('new_task.tpl')


@route('/edit/<no:int>', method='GET')
def edit_item(no):

    if request.GET.save:
        edit = request.GET.task.strip()
        status = request.GET.status.strip()

        if status == 'open':
            status = 1
        else:
            status = 0

        conn = sqlite3.connect('order.db')
        c = conn.cursor()
        c.execute("UPDATE orders SET item = ?, status = ? WHERE id LIKE ?", (edit, status, no))
        conn.commit()

        return '<p>The item number %s was successfully updated</p>' % no
    else:
        conn = sqlite3.connect('todo.db')
        c = conn.cursor()
        c.execute("SELECT item FROM orders WHERE id LIKE ?", (str(no)))
        cur_data = c.fetchone()

        return template('edit_task.tpl', old=cur_data, no=no)


@route('/item<item:re:[0-9]+>')
def show_item(item):

        conn = sqlite3.connect('order.db')
        c = conn.cursor()
        c.execute("SELECT * FROM orders  JOIN menu ON orders.id = menu.id WHERE id LIKE ?", (item,))
        result = c.fetchall()
        c.close()

        if not result:
            return 'This item number does not exist!'
        else:
            return 'item: %s' % result[0]


@route('/help')
def help():

    static_file('index.html', root='')


@route('/json<json:re:[0-9]+>')
def show_json(json):

    conn = sqlite3.connect('order.db')
    c = conn.cursor()
    c.execute("SELECT * FROM orders JOIN menu ON orders.id = menu.id WHERE status LIKE '1'", (json,))
    result = c.fetchall()
    c.close()

    if not result:
        return {'item': 'This item number does not exist!'}
    else:
        return {'item': result[0]}

@route('/open')
def show_open():

    conn = sqlite3.connect('order.db')
    c = conn.cursor()
    c.execute("SELECT * FROM orders JOIN menu ON orders.id = menu.id WHERE status LIKE '1'")
    result = c.fetchall()
    c.close()

    if not result:
        return {'Data': 'No open orders exist!'}
    else:
        return {'Open orders': result}

@error(403)
def mistake403(code):
    return 'There is a mistake in your url!'


@error(404)
def mistake404(code):
    return 'Sorry, this page does not exist!'


debug(True)
run(reloader=True, host='0.0.0.0', port=8080)
# run(reloader=True)
# remember to remove reloader=True and debug(True) when you move your
# application from development to a productive environment
