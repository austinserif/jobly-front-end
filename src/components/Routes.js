//libraries
import React from 'react';

//components
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

//styles
import '../styles/Routes.css';


const Routes = () => {
    return (
        <Switch className="Routes">
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/companies">
                {/* <Companies/> */}
            </Route>
            <Route exact path="/jobs">
                {/* <Jobs/> */}
            </Route>
            <Route path="/company/:handle">
                {/* <Jobs/> */}
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