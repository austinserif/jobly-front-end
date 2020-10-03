//libraries
import React, { useState, useEffect } from 'react';
import CurrentUserContext from './CurrentUserContext';

//components
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import Nav from './components/Nav';

//styles
import './App.css';
import useCurrentUser from './hooks/useCurrentUser';
import Banner from './components/Banner';
import JoblyApi from './api/JoblyApi';

/** 
 * Top-level App component, renders <Nav/> and <Routes/> components.
 * */
function App() {

  const [ banner, setBanner ] = useState(null);

  const [ userToken, userData, isLoading, toggleIsLoading, handleLogout, handleEditProfile, handleLogin, setUserData ] = useCurrentUser();

  useEffect(() => { 
    if (userToken && !userData && !isLoading) {
      const forceLoadUserData = async () => {

        toggleIsLoading();

        try {
          const response = await JoblyApi.getCurrentUserData();
          setUserData(response);
        } catch (err) {
          console.log(err);
        }

        toggleIsLoading();

      }
      forceLoadUserData();
    }
  }, [userToken, userData, isLoading, setUserData, toggleIsLoading]);
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
