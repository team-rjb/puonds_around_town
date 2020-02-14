INSERT INTO favorites (post_id, user_id)
VALUES ($1, $2);
SELECT * FROM favorites;