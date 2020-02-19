import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import MiniPostcard from '../MiniPostcard/MiniPostcard'
import AddPost from '../AddPost/AddPost'
import AddForm from '../AddPost/AddPost copy'
// import { LoginForm } from '../Login/Login2'

export default function UserProfile() {
  const loggedIn = useSelector(state => state.authReducer.loggedIn);
  const isAdmin = useSelector(state => state.authReducer.isAdmin);
  const userPosts = useSelector(state => state.postsReducer.postsByUserId);
  const userFavorites = useSelector(state => state.postsReducer.favoritesByUserId);

  const postsMapped = userPosts.map((post, i) => {
    return (
      <div>
      
        <div key={i}>
            <MiniPostcard
                user={post.user_id}
                post_id={post.post_id}
                pic={post.pic}
                post_name={post.post_name}
                breed={post.breed}
                age={post.age}
                gender={post.gender}
                fixed={post.fixed}
                rating={post.rating}
                org_name={post.org_name}
                bio={post.bio}
                isAdmin={isAdmin}
            />
        </div></div>
    )
})
const favoritesMapped = userFavorites.map((post, i) => {
  return (
      <div key={i}>
          <MiniPostcard
              user={post.user_id}
              post_id={post.post_id}
              pic={post.pic}
              post_name={post.post_name}
              breed={post.breed}
              age={post.age}
              gender={post.gender}
              fixed={post.fixed}
              rating={post.rating}
              org_name={post.org_name}
              bio={post.bio}
              isAdmin={isAdmin}
          />
      </div>
  )
})


  return (
    <div>
      {loggedIn ? (
        <div>
          {isAdmin ? (
            
            <div>
              <h1>Admin Profile</h1>
              <AddForm />
               {postsMapped}
            </div>
          ) : (
            <div>
            <h1>User Profile</h1>
            {favoritesMapped}
            </div>
          )}
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}

