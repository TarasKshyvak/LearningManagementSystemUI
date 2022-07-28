import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SubjectItem from './SubjectItem';

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

const SubjectsTable = () => {
    const subjects = useSelector(state => state.subjects.subjects);
    const navigate = useNavigate();

    return (
        <TableContainer sx={{borderRadius: '15px',
                                minWidth: '300px',
                                width: '50%',
                                margin: '0 auto'
                            }}
                        component={Paper}
        >
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell
                            sx={{width: '50px'}}
                            align='center'
                        >
                            №
                        </StyledTableCell>
                        <StyledTableCell>Subject name</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subjects.map((subject, index) => 
                        <TableRow key={subject.id}>
                            <StyledTableCell 
                                sx={{width: '50px'}}
                                align='center'
                            >
                                {index + 1}.
                            </StyledTableCell>
                            <StyledTableCell>
                                <SubjectItem subject={subject}/>
                            </StyledTableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SubjectsTable;