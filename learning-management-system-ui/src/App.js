import { Box } from "@mui/material";
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppContainer from './components/AppContainer';
import InfoMessage from "./components/InfoMessage";
import { routes } from './components/Routes';
import User from './components/user/User';
import CoursesPage from './pages/CoursesPage';
import Groups from './pages/Groups';
import NotifHub from './services/NotificationHub';
import Home from './pages/Home';
import {Chat} from "@mui/icons-material";

function  App() {
  // console.log(connection.connectionId)
  // console.log(NotifHub(setMessages));
  const[messages, setMessages] = React.useState([]);
  console.log(messages);
  return (
    <div className="App" >
      <AppContainer>
        <Box>
        
          {/* <Box position="fixed" zIndex={999}>
            {messages.map((message) => (
              <InfoMessage message={message}>{}</InfoMessage>
            ))}
          </Box> */}
        <Routes>
          <Route path={routes.home} element={<Home/>}>
          </Route>
          <Route path={routes.users} element={<User></User>}>
          </Route>
          <Route path={routes.courses} element={<div><CoursesPage/></div>}>
          </Route>
          <Route path={routes.groups} element={<div>groups</div>}>
          </Route>
          //For testing
          <Route path='/chat' element={<Chat></Chat>}>
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
