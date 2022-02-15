import React,{useState} from 'react';
import Login from './Login'
import LoginFormSuccess from './LoginFormSuccess'
import SignupForm from './SignupForm'
import SignupFormSuccess from './SignupFormSuccess'

const Form = () =>{
    const [formIsSubmitted, setFormIsSubmitted]=useState(false);
    const submitForm = () =>{
        setFormIsSubmitted(true);
    }
    return(
        <div>
            {!formIsSubmitted ? (
                <Login submitForm={submitForm} />

            ):(
                <LoginFormSuccess />
            )}
        </div>
        

    )

}
export default Form;