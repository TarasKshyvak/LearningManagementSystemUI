import { Box, Button } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppContainer from "./components/AppContainer";
import InfoMessage from "./components/InfoMessage";
import { routes } from "./components/Routes";
import User from "./components/user/User";
import CoursesPage from "./pages/CoursesPage";
import Groups from "./pages/Groups";
import { connection, start, sendUserId } from "./services/NotificationHub";
import Home from "./pages/Home";
import { Chat } from "@mui/icons-material";
import Subjects from './pages/Subjects';
import SubjectIdPage from './pages/SubjectIdPage';

function App() {
  const [messages, setMessages] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      await start();
      await sendUserId();
      connection.on("ShowNotification", (message) => {
        setMessages([message]);
      console.log(message);
      });
    })();
  }, []);

  return (
    <div className="App">
      <AppContainer>
        <Box>
          <Box position="fixed" zIndex={999}>
            {messages.map((message, index) => (
              <InfoMessage key={index + message.sendingDate } message={message}>
                {}
              </InfoMessage>
            ))}
          </Box>
          <Routes>
            <Route path={routes.home} element={<Home />}></Route>
            <Route path={routes.users} element={<User></User>}></Route>
            <Route
              path={routes.courses}
              element={
                <div>
                  <CoursesPage />
                </div>
              }
            ></Route>
            <Route path={routes.groups} element={<Groups/>}>
            </Route>
            <Route path={routes.subjects} element={<Subjects/>}>
            </Route>
            <Route path={routes.subjects + "/:id"} element={<SubjectIdPage/>}>
            </Route>
            //For testing
            <Route path="/chat" element={<Chat></Chat>}></Route>
            <Route path="*" element={<div>Not found</div>}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Box>
      </AppContainer>
    </div>
  );
}
export default App;
