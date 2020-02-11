UPDATE posts
SET
 pic = $1,
 post_name = $2,
 breed = $3,
 age = $4,
 gender = $5,
 fixed = $6, 
 bio = $7,
 rating =$8
WHERE post_id = $9 AND user_id=$10
RETURNING *


-- UPDATE posts
-- SET pet_name= $1
-- WHERE post_id= $2 AND user_id= $3;

-- post_id, user_id, pic, pet_name, breed, age, gender, fixed, bio, rating, 
--     org_name, street_address, city, state