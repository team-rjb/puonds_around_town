import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addPost, getAllPosts, getAllPostsByUserId } from "../../redux/reducers/postsReducer";

export default function AddForm() {

  const { register, handleSubmit } = useForm();
  const [link, setLink] = useState("")
  const dispatch = useDispatch()
  const onSubmit = data => handleFormSubmit(data);
  const handleFormSubmit = (data, option) => {
    console.log(data)
    const addPostData = {
      pic: link,
      post_name: data.Name,
      breed: data.Breed,
      age: data.Age,
      gender: data.Gender,
      fixed: data.Fixed,
      bio: data.Biography,
      rating: data.Rating,
      addPost: false
    };
    console.log(addPostData);
    dispatch(addPost(addPostData))
    console.log("addingPost")
    dispatch(getAllPosts())
    dispatch(getAllPostsByUserId());
  };

  const checkUploadResult = (error, resultEvent) => {
    if (resultEvent.event === 'success') {
      console.log("Cloudinary event is success")
      console.log(resultEvent.info.url)
      setLink(resultEvent.info.url)
    }
  }
  let widget
  if (window.cloudinary) {
    widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `${process.env.REACT_APP_cloudName}`,
        uploadPreset: `${process.env.REACT_APP_uploadPreset}`,
        sources: ["local", "url", "facebook", "instagram"],
        Default: false
      },
      (error, result) => {
        checkUploadResult(error, result)
        //   checkUploadResult(error, result)
      })
  }



  return (
    <div className="add-post-container">
      <h1 className="add-post-header">Add A New Dog</h1>
      <button className="add-post-button-1" name="img" onClick={() => widget.open()}>Add a picture</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="column-divs">
          <div className="left-column">
            <input type="text" placeholder="Name" name="Name" ref={register({ required: true, maxLength: 80 })} />
            <input type="text" placeholder="Breed" name="Breed" ref={register({ required: true, maxLength: 100 })} />
            <input type="number" placeholder="Age" name="Age" ref={register({ required: true })} />
            <select name="Gender" ref={register({ required: true })}>
              <option value="Male">Male</option>
              <option value=" Female"> Female</option>
              <option value=" Undetermined"> Undetermined</option>
            </select>
          </div>
          <div className="right-column">
            <select name="Fixed" ref={register({ required: true })}>
              <option value="True">Fixed: True</option>
              <option value="False">Fixed: False</option>
              <option value="Undefined">Fixed: Undetermined</option>
            </select>
            <textarea name="Biography" placeholder="Bio" ref={register({ required: true, maxLength: 500 })} />
            <input type="number" placeholder="Rating" name="Rating" ref={register} />
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}