import React, {useState, useEffect} from 'react';
import UserService from '../../services/UserService';
import {useFetching} from '../../hooks/useFetching';
import UserCreationForm from './UserCreationForm';
import Box from "@mui/material/Box";
import FormModal from "./FormModal";
import UserTable from "./UserTable";
import {UserErrorContext} from "../Contexts";
import FloatingButton from "./FloatingButton";
import Typography from "@mui/material/Typography";
import {CircularProgress} from "@mui/material";


function User() {
    const [users, setUsers] = useState([]);
    const [userErrors, setUserErrors] = useState([]);

    useEffect(() => {
        fetching();
    }, []);

    const [fetching, isLoading, userError] = useFetching(async () => {
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

    const changeUser = (user) => {
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


                <FormModal handleClose={handleClose} open={open} errors={userErrors}>
                    <UserCreationForm create={addUser} setUserErrors={setUserErrors}
                                      handleClose={handleClose}></UserCreationForm>
                </FormModal>

            </Box>

            {isLoading ?
                <Box sx={{
                    display: 'flex',
                    height: '60vh',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <CircularProgress size={80}/>
                </Box>
                :
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    {userError ?
                        <Typography sx={{fontSize: '25px', fontWeight: '900'}}>Error - {userError}</Typography>
                        :
                        <UserTable updateUser={changeUser} openModalChange={handleOpen} users={users}
                                   removeUser={removeUser}></UserTable>
                    }
                </Box>
            }

        </div>
    );
};

export default User;