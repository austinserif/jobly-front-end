import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import useInputChange from '../hooks/useInputChange';
import {v4 as uuid} from 'uuid';
import '../styles/Form.css';
import '../styles/Field.css';
import useLoadRegistration from '../hooks/useLoadRegistration';
import CurrentUserContext from '../CurrentUserContext';
import Field from '../components/Field';

const Registration = () => {

    const initial = {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        photo_url: ''
    }

    //does this line make sense?
    const { userToken } = useContext(CurrentUserContext);

    const history = useHistory();

    if ( userToken ) {
        history.push('/');
    }

    const [ values, handleChange, resetValues ] = useInputChange(initial);

    const [ resData, errs, handleRegistration ] = useLoadRegistration();

    // const allFieldsCompleted = useFormCompletion(values, required);

    useEffect(() => {
        if (resData) {
            history.push('/');
        };
    }, [resData, history]);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegistration(values);
        resetValues();
    }

    const redirectToLogin = () => {
        history.push('/login')
    }

    return (
        <form className="Form" onSubmit={handleSubmit}>

            <div className="Field">

                <h2>Job Portal Sign-In</h2>

                <Field required key='username' name='username' value={values.username} handleChange={handleChange} placeholder='Username'/>
                <Field required key='password' name='password' value={values.password} handleChange={handleChange} placeholder='Password' type='password'/>
                <Field key='first_name' name='first_name' value={values.first_name} handleChange={handleChange} placeholder='First Name'/>
                <Field key='last_name' name='last_name' value={values.last_name} handleChange={handleChange} placeholder='Last Name'/>
                <Field key='email' name='email' value={values.email} handleChange={handleChange} placeholder='Email'/>
                <Field key='photo_url' name='photo_url' value={values.photo_url} handleChange={handleChange} placeholder='Photo URL' type='uri'/>
                
                {/* <button id="sign-up-button" className="Field-button" type="submit" disabled={!allFieldsCompleted}>Sign-Up</button> */}
                <button id="sign-up-button" className="Field-button" type="submit">Sign-Up</button>
                <div className="Form-errors">
                    { errs ? (errs.map(e => (<h4 key={() => uuid()} className="Form-err">{e}</h4>))) : null}
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