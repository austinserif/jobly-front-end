//libraries
import React from 'react';

//components
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Jobs from '../pages/Jobs';
import Company from '../pages/Company';

//styles
import '../styles/Routes.css';
import Companies from '../pages/Companies';


const Routes = () => {
    return (
        <Switch className="Routes">
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/companies">
                <Companies/>
            </Route>

            <Route exact path="/jobs" component={withRouter(Jobs)}/>

            <Route path="/companies/:handle">
                <Company/>
            </Route>
                        
            <Route exact path="/login">
                {/* <Login/> */}
            </Route>
            <Route exact path="/profile">
                {/* <Profile/> */}
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