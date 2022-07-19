import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import { Route, Routes } from 'react-router-dom';
import { routes } from './components/Routes';
import User from './components/user/User';
import CoursesPage from './pages/CoursesPage';
import Groups from './pages/Groups';
import { Box } from "@mui/material";
import InfoMessage from "./components/InfoMessage";

function App() {
  // let one = {
  //   type: "error",
  //   text: "asdsadsadsadsadsadsadsdaadsasdads",
  // };

  // let ones = {
  //   type: "success",
  //   text: "asdsadsadsadsadsadsadsdaadsasdads",
  // };

  // let ss = {
  //   type: "info",
  //   text: "asdsadsadsadsadsadsadsdaadsasdads",
  // };

  // let messages = [one, ones, one, ss];
  return (
    <div className="App">
      <AppContainer>
        <Box>
          {/* <Box position="fixed" zIndex={999}>
            {messages.map((message) => (
              <InfoMessage message={message}>{}</InfoMessage>
            ))}
          </Box> */}
          <Routes>
            <Route path={routes.home} element={<div>Home</div>}></Route>
            <Route path={routes.users} element={<User />}></Route>
            <Route
              path={routes.courses}
              element={
                <div>
                  <CoursesPage />
                </div>
              }
            ></Route>
            <Route path={routes.groups} element={<Groups/>}></Route>
            <Route path="*" element={<div>Not found</div>}></Route>
            <Route path="/" element={<div> Home</div>}></Route>
          </Routes>
        </Box>
      </AppContainer>
    </div>
  );
}

export default App;