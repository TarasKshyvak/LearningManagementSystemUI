import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selector({value, handleChange, items, labelName, ...props}) {

    return (
        <Box sx={{ minWidth: 120 }} {...props}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{labelName}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    displayEmpty
                    label={labelName}
                    onChange={handleChange}
                >
                    {items.map((item)=>{
                        return ( <MenuItem key={item.key} value={item.key}>{item.value}</MenuItem>);
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}
