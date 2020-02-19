import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import MiniPostcard from '../MiniPostcard/MiniPostcard'
import AddForm from '../AddPost/AddPost2'
// import { LoginForm } from '../Login/Login2'

export default function UserProfile() {
  const loggedIn = useSelector(state => state.authReducer.loggedIn);
  const isAdmin = useSelector(state => state.authReducer.isAdmin);
  const userPosts = useSelector(state => state.postsReducer.postsByUserId);
  const userFavorites = useSelector(state => state.postsReducer.favoritesByUserId);

  const postsMapped = userPosts.map((post, i) => {
    return (
      <div>

        <div key={i} className="profile-posts-map">
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
      <div key={i} className="profile-posts-map">
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
<<<<<<< HEAD
    <div id="profile-main">
      <div>
        {loggedIn ? (
          <div>
            {isAdmin ? (

              <div>
                <h1 className="profile-header">Admin Profile</h1>
                <AddPost />
                <section id="profile-page">
                  {postsMapped}
                </section>
              </div>
            ) : (
                <div>
                  <h1 className="profile-header">These Are Some H*ckin Good Favorites!</h1>
                  <section id="profile-page">
                    {favoritesMapped}
                  </section>
                </div>
              )}
          </div>
        ) : (
            <Redirect to="/" />
=======
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
>>>>>>> master
          )}
      </div>
    </div>
  );
}

