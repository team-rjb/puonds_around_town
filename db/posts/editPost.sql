UPDATE posts
SET
 pic = $3,
 pet_name = $4,
 breed = $5,
 age = $6,
 gender = $7,
 fixed = $8, 
 bio = $9,
 rating = $10, 
 org_name = $11, 
 street_address = $12,
 city =$13,
 state = $14
WHERE post_id = $1 AND user_id=$2


-- UPDATE posts
-- SET pet_name= $1
-- WHERE post_id= $2 AND user_id= $3;

-- post_id, user_id, pic, pet_name, breed, age, gender, fixed, bio, rating, 
--     org_name, street_address, city, state