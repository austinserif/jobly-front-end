//libraries
import React, { useState } from 'react';
import CurrentUserContext from './CurrentUserContext';

//components
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import Nav from './components/Nav';

//styles
import './App.css';
import useCurrentUser from './hooks/useCurrentUser';
import Banner from './components/Banner';

/** 
 * Top-level App component, renders <Nav/> and <Routes/> components.
 * */
function App() {

  const [ banner, setBanner ] = useState(null);

  const [ userToken, userData, isLoading, toggleIsLoading, handleLogout, handleEditProfile, handleLogin ] = useCurrentUser();

  return (
    <div className="App">
      <BrowserRouter>
        <CurrentUserContext.Provider value={{userData, userToken, toggleIsLoading, isLoading, handleLogin, handleEditProfile, setBanner}}>
          <Nav userToken={userToken} handleLogout={handleLogout}/>
          <div className="content">
            <div>
              {banner ? (<Banner message={banner}/>) : null}
            </div>
            <Routes userToken={userToken} isLoading={isLoading} userData={userData}/>
          </div>
        </CurrentUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
