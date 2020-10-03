import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useInputChange from '../hooks/useInputChange';
import {v4 as uuid} from 'uuid';
import '../styles/Form.css';
import '../styles/Field.css';
import CurrentUserContext from '../CurrentUserContext';
import Field from '../components/Field';

const Login = ({ userToken }) => {

    const initial = {
        username: '',
        password: ''
    }

    const { handleLogin } = useContext(CurrentUserContext);

    const history = useHistory();

    const [ values, handleChange, resetValues ] = useInputChange(initial);

    const [ errs, setErrors ] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { username, password } = values;
            await handleLogin(username, password);            
        } catch (err) {
            resetValues();
            console.error(err);
            setErrors(err);
        }
    }

    const redirectToSignUp = () => {
        history.push('/register')
    }
    
    if ( userToken ) {
        history.push('/');
    }

    return (
        <form className="Form" onSubmit={handleSubmit}>
            <div className="Field">
                <h2>Job Portal Sign-In</h2>
                <Field required key='username' name='username' value={values.username} handleChange={handleChange} placeholder='Username'/>
                <Field required key='password' name='password' value={values.password} handleChange={handleChange} placeholder='Password' type='password'/>
                <button id="sign-in-button" className="Field-button" type="submit">Sign-In</button>
                <div className="Form-errors">
                    { errs ? (errs.map(e => (<h4 key={() => uuid()} className="Form-err">{e}</h4>))) : null}
                </div>
            </div>                
                <div className="bottom-border Field-divider" width='90%'></div>
                
            <div className="Field">
                <h4>New to Jobly?</h4>
                <button id="login-sign-up-button" className="Field-button" type="button" onClick={redirectToSignUp}>Sign-Up</button>
            </div>
        </form>
    );
}

export default Login;