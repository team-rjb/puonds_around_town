import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addPost, getAllPosts, getAllPostsByUserId } from "../../redux/reducers/postsReducer";


export default function AddForm() {

  const { register, handleSubmit } = useForm();
  const [ link, setLink ] = useState("")
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
        console.log(resultEvent.info.url )
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
          })}

  return (
      <div className="addPostDiv">
    <button className="add-post-button-1" name="img" onClick={() => widget.open()}>Add a picture</button>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" name="Name" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Breed" name="Breed" ref={register({required: true, maxLength: 100})} />
      <input type="number" placeholder="Age" name="Age" ref={register({required: true})} />
      <select name="Gender" ref={register({ required: true })}>
        <option value="Male">Male</option>
        <option value=" Female"> Female</option>
        <option value=" Undetermined"> Undetermined</option>
      </select>
      <select name="Fixed" ref={register({ required: true })}>
        <option value="True">Fixed: True</option>
        <option value="False">Fixed: False</option>
        <option value="Undefined">Fixed: Undetermined</option>
      </select>
      <textarea name="Biography" ref={register({required: true, maxLength: 500})} />
      <input type="number" placeholder="Rating" name="Rating" ref={register} />

      <input type="submit" />
    </form>
    </div>
  );
}
// export function Form ({ option }) {
//     //These hooks are handling a few things:
//     //useForm is part of react-hooks-form which is a set of hooks and functions for creating very lightweight forms and input fields
//     //specifically, these forms do not cause a re-render on every keystroke added to the form! Makes it very fluid and prevent spammy data calls
//     //onSubmit is part of the react-forms that bundles actions and data together for submitting on form submit
//     //dispatch is destructuring the useDispatch command for sending action commands to Redux+Axios
//     //handleFormSubmit is a function to submit the login/register data. it checks "option" from the LoginForm function down below
//     //Option 1 is set for Login and option 2 is set for Register
//     //All of this together lets us have a single login/register form that we can style 

// const { register, handleSubmit } = useForm();
// const onSubmit = data => handleFormSubmit(data, option);
// const dispatch = useDispatch()
// const handleFormSubmit = (data, option) => {
//     console.log(data)
//     const loginUserData = {
//         username: data.username,
//         password: data.password};
//     const registerUserData = {
//         username: data.username,
//         password: data.password,
//         email: data.email,
//         first_name: data.firstName,
//         isAdmin: false};
    
  
//     console.log("handleEditPost, editPost.js option:  1= login,  2= register", option);
//     if(option === 1){
//         // dispatch(loginUser(loginUserData))
//         console.log(loginUserData)
//     }
//     else if(option === 2){
//         // dispatch(registerUser(registerUserData))
//         console.log("registering user", registerUserData)
//     }
//   };

// 	return (
// 		<form className='account-form' onSubmit={handleSubmit(onSubmit)}>
// 			<div className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
//                 <input ref={register} id='post_name' name='post_name' type='post_name' placeholder='Pet Name' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
//                 <input ref={register} id='breed' name='breed' type='breed' placeholder='Breed' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
// 				<input ref={register} id='age' name='age' type='age' placeholder='Age' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
// 				<input ref={register} id='fixed' name='fixed' type='fixed' placeholder='Fixed' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
// 				<input ref={register} id='gender' name='gender' type='gender' placeholder='Gender' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
// 			</div>
// 			<button className='btn-submit-form' type='submit'>
// 				{ option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'Reset password') }
// 			</button>
// 		</form>
// 	)
// }


// export function AddForm () {
// 	const [option, setOption] = React.useState(2)
	
// 	return (
// 		<div className='container'>
// 			<h1 className="headline">Pounds Around Town</h1>
// 			<ul className='options'>
// 				<li className={option === 1 ? 'active' : ' '} onClick={() => setOption(1)}>Sign in</li>
// 				<li className={option === 2 ? 'active' : ' '} onClick={() => setOption(2)}>Sign up</li>
// 				<li className={option === 2 ? 'active' : ' '} onClick={() => setOption(3)}>Sign 3</li>
// 			</ul>
// 			<Form option={option} />

// 		</div>
// 	)
// }





// function AddPost() {
//     constructor() {
//         super();
//         this.state = {
//             pic: "",
//             post_name: "",
//             breed: "",
//             age: "",
//             gender: "",
//             fixed: "",
//             bio: "",
//             rating: "",
//             addPost: false
//         }
//     }

//     handleChange = e => {
//         this.setState({ [e.target.name]: e.target.value })
//     }

//     handleAddPost = () => {
//         const { pic, post_name, breed, age, gender, fixed, bio, rating } = this.state;
//         const { addPost } = this.props;
//         addPost({ pic, post_name, breed, age, gender, fixed, bio, rating })
//     }

//     checkUploadResult = (error, resultEvent) => {
//         if (resultEvent.event === 'success') {
//             this.setState({ pic: resultEvent.info.url })
//         }
//     }

//     render() {
//         let widget
//         if (window.cloudinary) {
//             widget = window.cloudinary.createUploadWidget(
//                 {
//                     cloudName: `${process.env.REACT_APP_cloudName}`,
//                     uploadPreset: `${process.env.REACT_APP_uploadPreset}`,
//                     sources: ["local", "url", "facebook", "instagram"],
//                     Default: false
//                 },
//                 (error, result) => {
//                     this.checkUploadResult(error, result)
//                     this.checkUploadResult(error, result)
//                 })
//         }
//         return (
//             <div className="add-post-background">
//                 <div className="add-post-container">
//                     <div className="form-3">
//                         <h1>Add a Dog To Your Shelter</h1>
//                         <button className="add-post-button-1" name="img" onClick={() => widget.open()}>Add a picture</button>
//                         <input className="input-field" name="post_name" placeholder="Name" value={this.state.caption} onChange={this.handleChange} />
//                         <input className="input-field" name="breed" placeholder="Breed" value={this.state.caption} onChange={this.handleChange} />
//                         <input className="input-field" name="age" placeholder="age" value={this.state.caption} onChange={this.handleChange} />
//                         <input className="input-field" name="gender" placeholder="Gender" value={this.state.caption} onChange={this.handleChange} />
//                         <input className="input-field" name="fixed" placeholder="Fixed" value={this.state.caption} onChange={this.handleChange} />
//                         <input className="input-field" name="bio" placeholder="Bio" value={this.state.caption} onChange={this.handleChange} />
//                         <input className="input-field" name="rating" placeholder="Rating" value={this.state.caption} onChange={this.handleChange} />
//                         <Link to="/home">
//                             <button className="add-post-button-2" onClick={this.handleAddPost}>Add Your Dog</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = reduxState => {
//     return {
//         user_id: reduxState.authReducer.user_id
//     }
// }

// export default withRouter(connect(mapStateToProps, {
//     addPost,
//     getSession
// })(AddPost));
