import React, {useState, useEffect} from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import {Fab} from "@mui/material";
import Box from "@mui/material/Box";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SubmitDialog from "./SubmitDialog";
import UserService from "../../services/UserService";
import FormModal from "./FormModal";
import UserUpdateForm from "./UserUpdateForm";
import {getGenderCode} from "../Helpers";
import DoneIcon from '@mui/icons-material/Done';
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from '../../store/userSlice';


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#bd92c9',
        color: theme.palette.common.white,
        fontSize: 17,
        fontWeight: 900
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16
    },
}));

export default function UserTable() {
    const [openDialogRemove, setOpenDialogRemove] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const users = useSelector(state => state.users.users);

    const handleCloseModal = () => {
        setOpenModal(false);
    }
    const handleOpenModal = () => {
        setOpenModal(true);
    }
    const[updateErrors, setUpdateErrors] = useState([]);

    const dispatch = useDispatch();


    const handleSubmitRemove = () => {
        const response = UserService.delete(currentUser.id);
        const user = {...currentUser};

        user.isActive = !user.isActive;
        setCurrentUser(user);

        if (!response.errors) {
            dispatch(updateUser({user: user}));
        }
        setOpenDialogRemove(false);
    }

    const alignment = 'left';

    return (
        <TableContainer sx={{borderRadius: '15px'}} component={Paper}>
            <Table sx={{minWidth: '80%'}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align={alignment}>Username</StyledTableCell>
                        <StyledTableCell align={alignment}>First name</StyledTableCell>
                        <StyledTableCell align={alignment}>Last name</StyledTableCell>
                        <StyledTableCell align={alignment}>Email</StyledTableCell>
                        <StyledTableCell align={alignment}>Birthday</StyledTableCell>
                        <StyledTableCell align={alignment}>Gender</StyledTableCell>
                        {/*<StyledTableCell align={alignment}>Is active</StyledTableCell>*/}
                        <StyledTableCell align={alignment}></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow sx={{backgroundColor: row.isActive ? '#fff' : '#f3bbbb'}} key={row.id}>
                            <StyledTableCell align={alignment}
                            >
                                {row.userName}
                            </StyledTableCell>
                            <StyledTableCell align={alignment}>{row.firstName}</StyledTableCell>
                            <StyledTableCell align={alignment}>{row.lastName}</StyledTableCell>
                            <StyledTableCell align={alignment}>{row.email}</StyledTableCell>
                            <StyledTableCell
                                align={alignment}>{new Date(row.birthday).toLocaleDateString()}</StyledTableCell>
                            <StyledTableCell align={alignment}>{getGenderCode(row.gender)}</StyledTableCell>
                            {/*<StyledTableCell align={alignment}>{row.isActive ? '+' : '-'}</StyledTableCell>*/}
                            <StyledTableCell align={alignment}>
                                <Box sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <Fab sx={{ zIndex: 200}} disabled={!row.isActive} onClick={() => {
                                        handleOpenModal(true);
                                        setUpdateErrors([]);
                                        setCurrentUser(row);
                                    }} color="secondary" size={'small'} aria-label="edit">
                                        <EditIcon sx={{fontSize: '20px'}}/>
                                    </Fab>

                                    <Fab sx={{ zIndex: 200}} onClick={() => {
                                        setCurrentUser(row);
                                        setOpenDialogRemove(true);
                                    }}
                                         color={row.isActive ? 'error' : 'success'} size={'small'}
                                         aria-label="remove">
                                        {row.isActive ?
                                            <DeleteForeverIcon sx={{fontSize: '20px', color: '#fff'}}/>
                                            :
                                            <DoneIcon/>
                                        }
                                    </Fab>

                                </Box>
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <SubmitDialog open={openDialogRemove}
                          handleSubmit={handleSubmitRemove}
                          handleClose={() => setOpenDialogRemove(false)}
                          text={`Do you want to change user status?`}
            >
            </SubmitDialog>

            <FormModal handleClose={handleCloseModal} open={openModal} errors={updateErrors}>
                <UserUpdateForm handleClose={handleCloseModal} user={currentUser} setErrors={setUpdateErrors}></UserUpdateForm>
            </FormModal>

        </TableContainer>
    );
}
