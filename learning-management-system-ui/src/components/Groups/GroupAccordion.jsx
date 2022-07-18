import ExpandMore from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import classes from './Groups.module.css';

const GroupAccordion = (props) => {
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
                        {props.students.map(student => 
                            <div key={student.id} className={classes.acc_details}>
                                <div>{student.firstName} {student.lastName}</div>
                                <div>{student.userName} | {student.email}</div>
                            </div>
                        )}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default GroupAccordion;