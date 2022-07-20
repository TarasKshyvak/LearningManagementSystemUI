import { Autocomplete, Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import StudentsService from '../../services/StudentsService';
import { StudentsWithoutGroupsContext } from '../Contexts';

const AddStudents = (props) => {
    const studentsWithoutGroups = useContext(StudentsWithoutGroupsContext);

    const options = [];
    studentsWithoutGroups.forEach(s => {
        options.push({label: s.firstName + " " + s.lastName, id: s.id})
    });

    const [values, setValues] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const studentIds = [];
        values.forEach(v => {
            studentIds.push(v.id);
        });
        const response = await StudentsService.addStudentsToGroup(studentIds, props.groupId);
        if (!response.errors) {
            props.addStudents(response.data);
            setValues([]);
        }
    }

    return (
        <form onSubmit={(event, values) => handleSubmit(event, values)}
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginTop: '10px'
            }}
        >
            <Autocomplete
                isOptionEqualToValue={(option, value) => option.id === value.id}
                multiple
                id="add-students-autocomplete"
                options={options}
                sx={{
                    width: '90%'
                }}
                renderInput={(params) => <TextField 
                                            {...params}
                                            placeholder="Start typing students' username"
                                         />}
                value={values}
                onChange={(event, newValue) => setValues(newValue, ...values)}
            />
            <Button
                variant="contained"
                style={{
                    height: '55px',
                    width: '10%',
                    marginLeft: '8px',
                    fontSize: '17px'
                }}
                type="submit"
            >
                Add
            </Button>
        </form>
    );
};

export default AddStudents;