import React, {useState} from 'react';
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


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

export default function UserTable({users, removeUser}) {
    const [openDialogRemove, setOpenDialogRemove] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const handleCloseModal = () => {
        setOpenModal(false);
    }
    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleSubmitRemove = () => {
        const response = UserService.delete(currentUser.id);
        currentUser.isActive = false;
        if (!response.errors) {
            removeUser(currentUser);
        }
        setOpenDialogRemove(false);
    }

    const alignment = 'left';

    return (
        <TableContainer component={Paper}>
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
                        <TableRow sx={{backgroundColor: row.isActive ? '#fff' : '#ffa6a6'}} key={row.id}>
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
                                <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                                    <Fab onClick={()=>{handleOpenModal(true);setCurrentUser(row);}} color="secondary" size={'small'} aria-label="edit">
                                        <EditIcon sx={{fontSize: '20px'}}/>
                                    </Fab>

                                    <Fab disabled={!row.isActive} onClick={() => {
                                        setCurrentUser(row);
                                        setOpenDialogRemove(true);
                                    }}
                                         color="error" size={'small'}
                                         aria-label="remove">

                                        <DeleteForeverIcon sx={{fontSize: '20px', color: '#fff'}}/>
                                    </Fab>

                                </Box>
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <SubmitDialog open={openDialogRemove} handleSubmit={handleSubmitRemove}
                          handleClose={() => setOpenDialogRemove(false)}></SubmitDialog>

            <FormModal handleClose={handleCloseModal} open={openModal}>
              <UserUpdateForm user={currentUser} create={()=>''}></UserUpdateForm>
            </FormModal>
        </TableContainer>
    );
}
