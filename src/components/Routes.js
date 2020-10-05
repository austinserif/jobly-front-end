//libraries
import React from 'react';

//components
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Jobs from '../pages/Jobs';
import Company from '../pages/Company';
import Login from '../pages/Login';

//styles
import '../styles/Routes.css';
import Companies from '../pages/Companies';
import Profile from '../pages/Profile';
import Registration from '../pages/Registration';



const Routes = ({userToken, isLoading, userData, setUserData, toggleIsLoading}) => {
    return (
        <Switch className="Routes">

            <Route exact path="/">
                <Home  userToken={userToken} userData={userData} isLoading={isLoading} setUserData={setUserData} toggleIsLoading={toggleIsLoading} />
            </Route>

            <Route exact path="/companies">
                <Companies/>
            </Route>

            <Route exact path="/jobs" component={withRouter(Jobs)}/>

            <Route path="/companies/:handle">
                <Company/>
            </Route>
                        
            <Route exact path="/login">
                <Login userToken={userToken}/>
            </Route>

            <Route exact path="/register">
                <Registration userToken={userToken}/>
            </Route>
            
            <Route exact path="/profile">
                <Profile userData={userData} isLoading={isLoading} toggleIsLoading={toggleIsLoading} userToken={userToken}/>
            </Route>

            <Route>
                <div>
                    Whoops! The page you requested wasn't found!
                </div>
            </Route>
        </Switch>
    );
}

export default Routes;