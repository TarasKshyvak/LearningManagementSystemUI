import React, {useState, useEffect} from 'react';
import UserService from '../../services/UserService';
import {useFetching} from '../../hooks/useFetching';
import UserCreationForm from './UserCreationForm';
import Box from "@mui/material/Box";
import FormModal from "./FormModal";
import UserTable from "./UserTable";
import FloatingButton from "./FloatingButton";
import Typography from "@mui/material/Typography";
import {CircularProgress} from "@mui/material";
import {useDispatch} from 'react-redux';
import {addUsers} from '../../store/userSlice';

function User() {

    const [userErrors, setUserErrors] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetching();
    }, []);

    const [fetching, isLoading, userError] = useFetching(async () => {
        const response = await UserService.getUsers();
        const data = response.data;
        dispatch(addUsers(data));
    });


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
                    <UserCreationForm setUserErrors={setUserErrors}
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
                        <UserTable openModalChange={handleOpen}></UserTable>
                    }
                </Box>
            }

        </div>
    );
}

export default User;