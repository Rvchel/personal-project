SELECT u.users_id, u.users_username, o. * FROM orders AS o
INNER JOIN users AS u
ON o.products_id = u.users_id