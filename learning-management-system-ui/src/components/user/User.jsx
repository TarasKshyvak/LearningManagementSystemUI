import React, {useState, useEffect} from 'react';
import UserService from '../../services/UserService';
import {useFetching} from '../../hooks/useFetching';
import UserForm from './UserForm';
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import FormModal from "./FormModal";
import UserTable from "./UserTable";
import {UserErrorContext} from "../Contexts";
import {getGenderCode} from '../Helpers';

function User() {
    const [users, setUsers] = useState([]);
    const [userErrors, setUserErrors] = useState([]);

    //Users
    useEffect(() => {
        fetching();
    }, []);

    const [fetching, userError] = useFetching(async () => {
        const response = await UserService.getUsers();
        const data = response.data.map(model=>{return {...model, gender: getGenderCode(model.gender)}});
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
        <div style={{padding: '0px 100px'}}>

            <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', mb: '50px'}}>
                <Button onClick={()=>{ setUserErrors([]); handleOpen();}} variant="contained" color="success">
                    Add user
                </Button>
                <UserErrorContext.Provider value={{userErrors, setUserErrors}}>
                    <FormModal handleClose={handleClose} open={open}>
                        <UserForm create={addUser}></UserForm>
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