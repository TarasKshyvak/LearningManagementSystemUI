import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import {Route, Routes} from 'react-router-dom';
import {routes} from './components/Routes';
import User from './components/user/User';
import CoursesPage from './pages/CoursesPage';
import Groups from "./pages/Groups";
import ChatWindow from "./components/chat/ChatWindow";
import {useEffect} from "react";
import ChatService from "./services/ChatService";
import {useDispatch, useSelector} from "react-redux";
import {addMessages, addMessage, setGroup, setUser, setConnected} from "./store/chatSlice";


function App() {

    const dispatch = useDispatch();
    const userId = useSelector(state=> state.chat.userId);

    useEffect(() => {
        if(userId) {
            (async () => {
                await ChatService.start(userId, (m)=>dispatch(addMessage({message: m})));
                dispatch(setConnected({isConnected: true}));
                const history = await ChatService.GetChatHistory();

                dispatch(addMessages({messages: history.chatMessages}));
                dispatch(setGroup({group: {name: history.groupName, id: history.groupId}}));
                dispatch(setUser({user: {userName: history.userName, id: history.userId}}));
            })();
        }
    }, [userId]);

    return (
        <div className="App">
            <AppContainer>
                {/* <Box position="fixed" zIndex={999}>
            {messages.map((message) => (
              <InfoMessage message={message}>{}</InfoMessage>
            ))}
          </Box> */}
                <Routes>
                    <Route path={routes.home} element={<div>Home</div>}>
                    </Route>
                    <Route path={routes.users} element={<User></User>}>
                    </Route>
                    <Route path={routes.courses} element={<div><CoursesPage/></div>}>
                    </Route>
                    <Route path={routes.groups} element={<Groups></Groups>}>
                    </Route>

                    <Route path={routes.chat} element={
                        <ChatWindow></ChatWindow>
                    }>
                    </Route>

                    <Route path='*' element={<div>Not found</div>}>
                    </Route>
                    <Route path='/' element={< div> Home</div>}>
                    </Route>
                </Routes>
            </AppContainer>
        </div>
    );
}

export default App;
