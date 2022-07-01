import React from 'react';
import './App.css';
import AppContainer from './Components/AppContainer';
import { Route, Routes } from 'react-router-dom';
import { routes } from './Components/Routes';
import User from './Components/user/User';
import CoursesPage from './pages/CoursesPage';


function App() {
  return (
    <div className="App" >
      <AppContainer>
        <Routes>
          <Route path={routes.home} element={<div>Home</div>}>
          </Route>
          <Route path={routes.users} element={<User></User>}>
          </Route>
          <Route path={routes.courses} element={<CoursesPage/>}>
          </Route>
          <Route path={routes.groups} element={<div>groups</div>}>
          </Route>
          <Route path='*' element={<div>Not found</div>}>
          </Route>
          <Route path='/' element={< div > Home</div>}>
          </Route>
        </Routes>

      </AppContainer >

    </div >
  );
}

export default App;
