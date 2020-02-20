import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost, deletePost, getAllPosts, getAllPostsByUserId } from "../../redux/reducers/postsReducer";
import { useForm } from "react-hook-form";

export default function EditPost(props) {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    pic: "",
  });
  const [editState, setEditState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const [isDisabled, setIsDisabled] = useState(false)
  const onSubmit = data => handleEditPost(data);
  console.log(errors);

  const handleEditPost = (data) => {
    const post_id = props.postId;
    const updated_post = {
      pic: post.pic,
      post_name: data.PetName,
      breed: data.Breed,
      age: data.Age,
      gender: data.Gender,
      fixed: data.Altered,
      bio: data.Bio,
      rating: data.Rating
    };
    console.log("handleEditPost, editPost.js", post_id);
    dispatch(editPost(post_id, updated_post));
    setEditState(false);
    dispatch(getAllPosts())
    dispatch(getAllPostsByUserId())
    setIsDisabled(false)
    props.handleEditClick()
  };

  const handleDeletePost = () => {
    const post_id = props.postId;
    console.log("handleDeletePost, editPost.js", post_id);
    dispatch(deletePost(post_id));
    setDeleteState(false);
    dispatch(getAllPosts())
    dispatch(getAllPostsByUserId())
    setIsDisabled(false)
    props.handleEditClick()
  };

  const handleCancelEdit = () => {
    props.handleEditClick()
  };
  const checkUploadResult = (error, resultEvent) => {
    if (resultEvent.event === "success") {
      console.log("checkUploadResult success: setting Post");
      setPost({ ...post, pic: resultEvent.info.url });
      setIsDisabled(true)
    }
    else { console.log(error) }
  };
  let widget;
  if (window.cloudinary) {
    widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `${process.env.REACT_APP_cloudName}`,
        uploadPreset: `${process.env.REACT_APP_uploadPreset}`,
        sources: ["local", "url", "facebook", "instagram"],
        Default: false
      },
      (error, result) => {
        checkUploadResult(error, result);
      }
    );
  }

  return (
    <div className="add-post-container">
            <h1 className="add-post-header">Pupdate This Info</h1>
      {editState ? (
        <div>
          <button
            className="edit-post-button-1"
            name="img"
            onClick={() => widget.open()}
            disabled={isDisabled}
          >
            Add A New Photo
          </button>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="column-divs">
              <div className="left-column">
                <input
                  type="text"
                  placeholder="PetName"
                  name="PetName"
                  ref={register({ required: true, maxLength: 80 })}
                />
                <input
                  type="text"
                  placeholder="Breed"
                  name="Breed"
                  ref={register({ required: true, maxLength: 100 })}
                />
                <input
                  type="number"
                  placeholder="Age"
                  name="Age"
                  ref={register({ required: true })}
                />
                <input
                  type="text"
                  placeholder="Bio/Description"
                  name="Bio"
                  ref={register({ required: true })}
                />
              </div>
              <div className="right-column">
                <select name="Gender" placeholder="Gender" ref={register({ required: true })}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Undetermined">Undetermined</option>
                </select>
                <select name="Altered" placeholder="Spayed/Neutered" ref={register({ required: true })}>
                  <option value="True">Fixed: True</option>
                  <option value="False">Fixed: False</option>
                  <option value="Undetermined">Undetermined</option>
                </select>
                <input
                  type="number"
                  placeholder="Fun Rating"
                  name="Rating"
                  ref={register({ required: true })}
                />
                <input type="submit" />
              </div>
            </div>
          </form>
        </div>
      ) : (
          <div>
            {" "}
            {/* <h1>Pupdate This Info!</h1> */}
            <button className="edit-buttons" onClick={setEditState}>Pupdate This Info!</button>
          </div>
        )}

      <div>
        {deleteState ? (
          <div>
            <button className="edit-buttons" onClick={handleDeletePost}>Submit Delete</button>
          </div>
        ) : (
            <div>
              {/* <h1>Delete Your Pet Post</h1> */}
              <button className="edit-buttons" onClick={setDeleteState}>Delete This Adopted Pet!</button>
            </div>
          )}
      </div>
      <button className="edit-buttons" onClick={handleCancelEdit}>Cancel The Pupdate</button>
    </div>
  );
}
