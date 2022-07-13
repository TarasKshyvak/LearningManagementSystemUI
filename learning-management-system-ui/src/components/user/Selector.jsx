import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selector({value = null, handleChange, items, labelName, ...props}) {

    return (
        <Box sx={{ minWidth: 120 }} {...props}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{labelName}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    label={labelName}
                    defaultValue={value ? value: items[0].key}
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
