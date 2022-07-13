import React, {useState, useEffect} from 'react';
import UserService from '../../services/UserService';
import {useFetching} from '../../hooks/useFetching';
import UserCreationForm from './UserCreationForm';
import Box from "@mui/material/Box";
import FormModal from "./FormModal";
import UserTable from "./UserTable";
import {UserErrorContext} from "../Contexts";
import {getGenderCode} from '../Helpers';
import FloatingButton from "./FloatingButton";
import Typography from "@mui/material/Typography";


function User() {
    const [users, setUsers] = useState([]);
    const [userErrors, setUserErrors] = useState([]);

    useEffect(() => {
        fetching();
    }, []);

    const [fetching, userError] = useFetching(async () => {
        const response = await UserService.getUsers();
        const data = response.data;
        setUsers(data);
    });

    const addUser = (newUser) => {
        setUsers([newUser, ...users]);
    }
    const removeUser = (user) => {
        const itemIndex = users.findIndex(p => p.id === user.id);
        const changedArr = [...users];
        changedArr[itemIndex] = user;
        setUsers(changedArr);
    }

    ///Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={{padding: '0px 125px'}}>

            <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-start', p: '15px 0'}}>
                <Typography sx={{fontWeight: 900, fontSize: '40px'}}>
                    Users
                </Typography>
            </Box>

            <Box>
                <FloatingButton sx={{position: 'fixed', bottom: '40px', right: '40px'}} onClick={() => {
                    setUserErrors([]);
                    handleOpen();
                }}>
                </FloatingButton>

                <UserErrorContext.Provider value={{userErrors, setUserErrors}}>
                    <FormModal handleClose={handleClose} open={open} errors={userErrors}>
                        <UserCreationForm create={addUser} handleClose={handleClose}></UserCreationForm>
                    </FormModal>
                </UserErrorContext.Provider>

            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                {userError ?
                    <div>Error - {userError}</div>
                    :
                    <UserTable openModalChange={handleOpen} users={users} removeUser={removeUser}></UserTable>
                }
            </Box>
        </div>
    );
};

export default User;