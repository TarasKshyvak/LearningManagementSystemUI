import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import { Route, Routes } from 'react-router-dom';
import { routes } from './components/Routes';
import User from './components/user/User';
import CoursesPage from './pages/CoursesPage';
import Groups from './pages/Groups';
import Home from './pages/Home';

function App() {
  return (
    <div className="App" >
      <AppContainer>
        <Routes>
          <Route path={routes.home} element={<Home/>}>
          </Route>
          <Route path={routes.users} element={<User/>}>
          </Route>
          <Route path={routes.courses} element={<div><CoursesPage/></div>}>
          </Route>
          <Route path={routes.groups} element={<Groups/>}>
          </Route>
          <Route path='*' element={<div>Not found</div>}>
          </Route>
          <Route path='/' element={<Home/>}>
          </Route>
        </Routes>
      </AppContainer >
    </div >
  );
}

export default App;