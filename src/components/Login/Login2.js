import React from 'react'
// import './Login2.scss'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form';
import { loginUser } from "../../redux/reducers/authReducer";
import { registerUser } from "../../redux/reducers/authReducer";




export function Form ({ option }) {
    //These hooks are handling a few things:
    //useForm is part of react-hooks-form which is a set of hooks and functions for creating very lightweight forms and input fields
    //specifically, these forms do not cause a re-render on every keystroke added to the form! Makes it very fluid and prevent spammy data calls
    //onSubmit is part of the react-forms that bundles actions and data together for submitting on form submit
    //dispatch is destructuring the useDispatch command for sending action commands to Redux+Axios
    //handleFormSubmit is a function to submit the login/register data. it checks "option" from the LoginForm function down below
    //Option 1 is set for Login and option 2 is set for Register
    //All of this together lets us have a single login/register form that we can style 

const { register, handleSubmit, errors } = useForm();
const onSubmit = data => handleFormSubmit(data, option);
const dispatch = useDispatch()
const handleFormSubmit = (data, option) => {
    console.log(data)
    const loginUserData = {
        username: data.username,
        password: data.password};
    const registerUserData = {
        username: data.username,
        password: data.password,
        email: data.email,
        first_name: data.firstName,
        isAdmin: false};
    
  
    console.log("handleEditPost, editPost.js option:  1= login,  2= register", option);
    if(option === 1){
        dispatch(loginUser(loginUserData))
        console.log("logging in user")
    }
    else if(option === 2){
        dispatch(registerUser(registerUserData))
        console.log("registering user")
    }
  };

	return (
		<form className='account-form' onSubmit={handleSubmit(onSubmit)}>
			<div className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
                <input ref={register} id='username' name='username' type='username' placeholder='Username' required />
                <input ref={register} id='password' name='password' type='password' placeholder='Password' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
				<input ref={register} id='email' name='email' type='email' placeholder='E-mail' required disabled={option === 1 ? true : false}/>
				<input ref={register} id='firstName' name='firstName' type='firstName' placeholder='First Name' required={option === 1 || option === 2 ? false : false} disabled={option === 3 ? true : false} />
			</div>
			<button className='btn-submit-form' type='submit'>
				{ option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'Reset password') }
			</button>
		</form>
	)
}


export function LoginForm () {
	const [option, setOption] = React.useState(1)
	
	return (
		<div className='container'>
			
			<ul className='options'>
				<li className={option === 1 ? 'active' : ' '} onClick={() => setOption(1)}>Sign in</li>
				<li className={option === 2 ? 'active' : ' '} onClick={() => setOption(2)}>Sign up</li>
			</ul>
			<Form option={option} />

		</div>
	)
}



  