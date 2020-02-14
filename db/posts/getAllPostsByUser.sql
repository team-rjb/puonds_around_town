SELECT p.*,o.*, u.username FROM posts p
INNER JOIN users u
    ON p.user_id = u.user_id
INNER JOIN ORGS O 
    ON u.org_id = o.org_id
WHERE p.user_id= $1
ORDER BY p.post_id DESC;