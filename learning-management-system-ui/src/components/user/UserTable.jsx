import * as React from 'react';
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


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function UserTable({users, openModalChange, deleteRow}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: '85%'}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Username</StyledTableCell>
                        <StyledTableCell align="center">First name</StyledTableCell>
                        <StyledTableCell align="center">Last name</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">Birthday</StyledTableCell>
                        <StyledTableCell align="center">Gender</StyledTableCell>
                        <StyledTableCell align="center">Is active</StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="center"
                            >
                                    {row.userName}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.firstName}</StyledTableCell>
                            <StyledTableCell align="center">{row.lastName}</StyledTableCell>
                            <StyledTableCell align="center">{row.email}</StyledTableCell>
                            <StyledTableCell
                                align="center">{new Date(row.birthday).toLocaleDateString()}</StyledTableCell>
                            <StyledTableCell align="center">{row.gender}</StyledTableCell>
                            <StyledTableCell align="center">{row.isActive ? '+' : '-'}</StyledTableCell>
                            <StyledTableCell align ="center">
                                <Box sx={{display: 'flex', justifyContent: 'space-evenly'}} >
                                    <Fab onClick={openModalChange} color="secondary" size={'small'} aria-label="edit">
                                        <EditIcon sx={{fontSize: '20px'}}/>
                                    </Fab>
                                    <Fab onClick={deleteRow} color='error' size={'small'} aria-label="remove">
                                        <DeleteForeverIcon sx={{fontSize: '20px', color: '#fff'}}/>
                                    </Fab>
                                </Box>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
