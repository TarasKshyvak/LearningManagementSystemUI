import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import classes from './Groups.module.css';

const GroupsSort = ({value, onChange}) => {
    return (
        <div className={classes.groups_sort}>
            <FormControl sx={{width: 200, mb: 2}}>
                <Select
                    value={value}
                    onChange={event => onChange(event.target.value)}
                    sx={{borderRadius: '9px', textAlign: 'left'}}
                >
                    <MenuItem value='all'>
                        All groups
                    </MenuItem>
                    <MenuItem value='active'>
                        Active groups
                    </MenuItem>
                    <MenuItem value='finished'>
                        Education finished
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default GroupsSort;