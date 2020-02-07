INSERT INTO users (username, hash, first_name, isAdmin)
VALUES ($1, $2, $3, 4)
RETURNING *;