INSERT INTO users (username, hash, first_name, email, isAdmin, org_id)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;