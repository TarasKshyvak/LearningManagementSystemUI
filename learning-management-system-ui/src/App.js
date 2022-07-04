import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import { Route, Routes } from 'react-router-dom';
import { routes } from './components/Routes';
import User from './components/user/User';
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
