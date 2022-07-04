import React, {useState, useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import UserService from '../../services/UserService';
import {useFetching} from '../../hooks/useFetching';
import UserForm from './UserForm';
import {Formik, Form, Field} from 'formik';
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import FormModal from "./FormModal";
import UserTable from "./UserTable";
import Typography from "@mui/material/Typography";

const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetching();
    }, []);

    const [fetching, userError] = useFetching(async () => {
        const response = await UserService.getUsers();
        setUsers(response.data);
    });

    ///For modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={{padding: '0px 100px'}}>
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', mb: '50px'}}>

                <Button onClick={handleOpen} variant="contained" color="success">
                    Add user
                </Button>
                <FormModal handleClose={handleClose} open={open} children={ <UserForm></UserForm>}></FormModal>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                {userError &&
                    <div>Error - {userError}</div>
                }
                <UserTable openModalChange={handleOpen} users={users}></UserTable>
            </Box>
        </div>
    );
};

export default User;