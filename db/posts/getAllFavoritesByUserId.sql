select p.*, f.favorite_id from posts p
inner join favorites f
  on f.post_id = p.post_id
  where f.user_id = $1