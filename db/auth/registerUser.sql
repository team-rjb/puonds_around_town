INSERT INTO users (username, hash, first_name, isadmin, org_id)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;