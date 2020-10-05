import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useInputChange from '../hooks/useInputChange';
import '../styles/Form.css';
import '../styles/Field.css';
import useLoadRegistration from '../hooks/useLoadRegistration';
import Field from '../components/Field';

const Registration = ({ userToken }) => {

    const initial = {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        photo_url: ''
    }

    //declare history variable
    const history = useHistory();

    //declare field change logic from custom hook
    const [ values, handleChange, resetValues ] = useInputChange(initial);

    //declare response data and errors into state, load things
    const [ resData, errs, handleRegistration ] = useLoadRegistration();

    //if response data loads from API, redirect user to home page
    useEffect(() => {
        if (resData) {
            history.push('/');
        };
    //eslint-disable-next-line
    }, [resData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegistration(values);
        resetValues();
    }

    //redirect user to login form
    const redirectToLogin = () => {
        history.push('/login')
    }

    //if a userToken is already present, redirect user to home
    useEffect(() => {
        if (userToken) {
            history.push('/');
        }
    }, [userToken, history]);

    return (
        <form className="Form" onSubmit={handleSubmit}>

            <div className="Field">

                <h2>Job Portal Sign-In</h2>

                <Field required key='username' name='username' value={values.username} handleChange={handleChange} placeholder='Username'/>
                <Field required key='password' name='password' value={values.password} handleChange={handleChange} placeholder='Password' type='password'/>
                <Field required key='first_name' name='first_name' value={values.first_name} handleChange={handleChange} placeholder='First Name'/>
                <Field required key='last_name' name='last_name' value={values.last_name} handleChange={handleChange} placeholder='Last Name'/>
                <Field required name='email' value={values.email} handleChange={handleChange} placeholder='Email' type='email'/>
                <Field required key='photo_url' name='photo_url' value={values.photo_url} handleChange={handleChange} placeholder='Photo URL' type='url'/>
                
                <button id="sign-up-button" className="Field-button" type="submit">Sign-Up</button>
                <div className="Form-errors">
                    {/* { errs ? (errs.map(e => (<h4 key={() => uuid()} className="Form-err">{e}</h4>))) : null} */}
                    {errs ? (console.log(errs)) : (null)}
                </div>

            </div>
                <div className="bottom-border Field-divider" width='90%'>
            </div>
                
            <div className="Field">
                <h4>Already Have An Account?</h4>
                <button id="registration-sign-in-button" className="Field-button" type="button" onClick={redirectToLogin}>Sign-In</button>
            </div>
        </form>
    );
}

export default Registration;