import ExpandMore from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import AddStudents from './AddStudents';
import classes from './Groups.module.css';

const GroupAccordion = (props) => {
    const [students, setStudents] = useState([...props.students]);

    const addStudents = (newStudents) => {
        setStudents([...students, ...newStudents]);
    }

    return (
        <div>
            <Accordion
                sx={{
                    marginTop: '10px',
                    border: '2px solid lightgrey',
                    boxShadow: 'none'
                }}
            >
                <AccordionSummary 
                    expandIcon={<ExpandMore/>}
                >
                    <Typography>
                        Students
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        borderTop: '2px solid lightgrey'
                    }}
                >
                    <div 
                        style={{
                            textAlign: 'justify'
                        }}
                    >
                        {students.map(student => 
                            <div key={student.id} className={classes.acc_details}>
                                <div>{student.firstName} {student.lastName}</div>
                                <div>{student.userName} | {student.email}</div>
                            </div>
                        )}
                    </div>
                    <AddStudents groupId={props.groupId} addStudents={addStudents}/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default GroupAccordion;