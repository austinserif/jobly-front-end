//libraries
import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useInputChange from '../hooks/useInputChange';
import {v4 as uuid} from 'uuid';
import CurrentUserContext from '../CurrentUserContext';

//components
import Field from '../components/Field';

//styles
import '../styles/Form.css';
import '../styles/Field.css';


/** 
 * Login component renders a form with inputs for username and password. 
 * 
 * props: userToken <string>
 */
const Login = ({ userToken }) => {

    //initial values for blank fields
    const initial = {
        username: '',
        password: ''
    }

    //consume handleLogin from CurrentUserContext
    const { handleLogin } = useContext(CurrentUserContext);

    //declare history object
    const history = useHistory();

    //import input change logic
    const [ values, handleChange, resetValues ] = useInputChange(initial);

    //set error constant into state 
    const [ errs, setErrors ] = useState(null);

    //form submission logic
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

    //redirect to sign-up page when called
    const redirectToSignUp = () => {
        history.push('/register')
    }

    useEffect(() => {
        if (userToken) {
            history.push('/');
        }
    }, [userToken, history]);
    
    //redirect to root route if userToken present
    // if ( userToken ) {
    //     history.push('/');
    // }

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