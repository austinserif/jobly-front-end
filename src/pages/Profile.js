import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import useInputChange from '../hooks/useInputChange';
import '../styles/Form.css';
import '../styles/Field.css';
import CurrentUserContext from '../CurrentUserContext';
import Field from '../components/Field';
import LoadingIcon from '../components/LoadingIcon';

const Profile = ({ userData, isLoading }) => {

    const history = useHistory();

    // load the currentUser and callback for updating the user token from context token from context
    const { handleEditProfile, toggleIsLoading } = useContext(CurrentUserContext);

    // load response data into the current values
    const [ values, handleChange ] = useInputChange({...userData, password: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEditProfile(values, userData.username)
        alert('Your Profile Has Been Successfully Updated!')
        history.push('/');
    }

    if (isLoading) {
        return ( 
            <div>
                <LoadingIcon/>
            </div>)
    }

    return (
        <form className="Form" onSubmit={handleSubmit}>

            <div className="Field">

                <h2>Profile Editor</h2>

                <Field key='username' name='username' value={values.username || ''} handleChange={handleChange} placeholder='Username' disabled/>
                <Field key='first_name' name='first_name' value={values.first_name || ''} handleChange={handleChange} placeholder='First Name'/>
                <Field key='last_name' name='last_name' value={values.last_name || ''} handleChange={handleChange} placeholder='Last Name'/>
                <Field key='email' name='email' value={values.email || ''} handleChange={handleChange} placeholder='Email'/>
                <Field key='photo_url' name='photo_url' value={values.photo_url || ''} handleChange={handleChange} placeholder='Photo URL' type='uri'/>
                
            </div>
                <div className="bottom-border Field-divider" width='90%'>
            </div>
                <div style={{padding: '15px 0px 15px 0px', }}>
                    <h3>Enter Password & Confirm Changes</h3>
                    <Field required key='password' name='password' value={values.password} handleChange={handleChange} placeholder='Password' type='password'/>
                    <button id="sign-up-button" className="Field-button" type="submit">Confirm</button>
                </div>



        </form>
    );
}

export default Profile;