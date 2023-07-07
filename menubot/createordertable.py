# create sqlite table

import sqlite3
conn = sqlite3.connect('order.db') # Warning: This file is created in the current directory
conn.execute("CREATE TABLE orders (id INTEGER PRIMARY KEY, item INTEGER, quantity INTEGER, status bool NOT NULL)")
conn.execute("INSERT INTO orders (item, quantity, status) VALUES (1, 2 , 0)")
conn.execute("INSERT INTO orders (item, quantity, status) VALUES (11, 1 , 1)")
conn.execute("INSERT INTO orders (item, quantity, status) VALUES (7, 2 ,1)")
conn.execute("INSERT INTO orders (item, quantity, status) VALUES (2, 1 ,0)")
conn.execute("INSERT INTO orders (item, quantity, status) VALUES (3, 3 ,1)")
conn.commit()




import sqlite3
conn = sqlite3.connect('order.db') # Warning: This file is created in the current directory

CREATE TABLE orders (orderid INTEGER PRIMARY KEY, id INTEGER, quantity INTEGER, status bool NOT NULL);
INSERT INTO orders (id, quantity, status) VALUES (1, 2 , 0);
INSERT INTO orders (id, quantity, status) VALUES (11, 1 , 1);
INSERT INTO orders (id, quantity, status) VALUES (7, 2 ,1);
INSERT INTO orders (id, quantity, status) VALUES (2, 1 ,1);
INSERT INTO orders (id, quantity, status) VALUES (3, 1 ,1);
conn.commit()

select * from orders JOIN menu ON orders.id = menu.id;
