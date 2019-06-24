SELECT users.users_id, users.username, orders. * FROM orders
INNER JOIN users
ON orders.products_id = users.users_id