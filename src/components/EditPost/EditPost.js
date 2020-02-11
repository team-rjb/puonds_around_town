import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost, deletePost } from "../../../reducks/reducers/postsReducer";

export default function EditPost(props) {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    pic: "",
    post_name: "",
    breed: "",
    age: "",
    gender: "",
    fixed: "",
    bio: "",
    rating: 0
  });

  function Options({ options }) {
    return options.map(option => (
      <option key={option.id} value={option.value} object={option}>
        {option.value}
      </option>
    ));
  }
  const [editState, setEditState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);

  const handleEditPost = () => {
    const post_id = props.postId;
    const updated_post = post;
    console.log("handleEditPost, editPost.js", post_id);
    dispatch(editPost(post_id, updated_post));
    setEditState(false);
    // props.setView("profile");
  };

  const handleDeletePost = () => {
    const post_id = props.postId;
    console.log("handleDeletePost, editPost.js", post_id);
    dispatch(deletePost(post_id));
    setDeleteState(false);
    // props.setView("profile");
  };

  return (
    <div>
      {editState ? (
        <div>
          <input
            name="post_name"
            placeholder="Pet Name"
            onChange={e =>
              setPost({ ...post, post_name: e.currentTarget.value })
            }
          />
          <input
            name="breed"
            placeholder="Pet Breed"
            onChange={e => setPost({ ...post, breed: e.currentTarget.value })}
          />
          <input
            name="age"
            placeholder="Pet Age"
            onChange={e => setPost({ ...post, age: e.currentTarget.value })}
          />
          <input
            name="gender"
            placeholder="Pet Sex"
            onChange={e => setPost({ ...post, gender: e.currentTarget.value })}
          />

          <h1>
            <select
              name="gender"
              placeholder="Pet Sex"
              className="form-control"
              onChange={e =>
                setPost({ ...post, gender: e.currentTarget.value })}>
              <Options options={[Male, Female, Undetermined]} />
            </select>
          </h1>

          <input
            name="fixed"
            placeholder="Spayed/Neutered?"
            onChange={e => setPost({ ...post, fixed: e.currentTarget.value })}/>
          <h1>
            <select
              name="gender"
              className="form-control"
              placeholder="Spayed/Neutered?"
              onChange={e => setPost({ ...post, fixed: e.currentTarget.value })} >
              <Options options={[True, False, Undetermined]} />
            </select>
          </h1>

          <input
            name="bio"
            placeholder="Bio/Description"
            onChange={e => setPost({ ...post, bio: e.currentTarget.value })}
          />
          <input
            name="rating"
            placeholder="Fun Rating"
            onChange={e => setPost({ ...post, rating: e.currentTarget.value })}
          />
          <button onClick={handleEditPost}>Submit Edit</button>
        </div>
      ) : (
        <div>
          {" "}
          <h1>Edit This Pet Post's Information</h1>
          <button onClick={setEditState}>Edit This Pet's Info</button>
        </div>
      )}

      <div>
        {deleteState ? (
          <div>
            <button onClick={handleDeletePost}>Submit Delete</button>
          </div>
        ) : (
          <div>
            <h1>Delete Your Pet Post</h1>
            <button onClick={setDeleteState}>Delete This Pet Post</button>
          </div>
        )}
      </div>
      {/* <button onClick ={handleChangeView}>To Profile</button> */}
    </div>
  );
}
