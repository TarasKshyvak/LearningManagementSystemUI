import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Fab, Modal, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from "yup";
import GroupsService from '../../services/GroupsService';
import AddButton from '../coursespage/AddButton';
import { convertDate } from '../Helper';

const AddGroupModal = ({create}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    //for date input validation
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    tomorrow.setHours(0, 0, 0, 0);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        bgcolor: 'background.paper',
        borderRadius: '20px',
        boxShadow: 24,
        padding: '40px'
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, "Name length must be between 3 and 25")
            .max(25, "Name length must be between 3 and 25")
            .required("Required"),
        startEducation: Yup.date()
            .min(today, "The date can not be less than today's")
            .required("Required"),
        endEducation: Yup.date()
            .min(tomorrow, "The date must be greater than today's")
            .required("Required")
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            startEducation: "",
            endEducation: ""
        },
        validationSchema: validationSchema,
        onSubmit:  async(values) => {
            values.startEducation = convertDate(values.startEducation);
            values.endEducation = convertDate(values.endEducation);
            let data = JSON.stringify(values, null, 2);
            const response = await GroupsService.postGroup(data);
            if (!response.errors) {
                console.log(values);
                setOpen(false);
                create(response.data);
            }
            
            
        },
    });

    return (
        <Box>
            <AddButton 
                onClick={handleOpen} 
                sx={{
                    position: 'fixed',
                    right: '50px',
                    bottom: '50px'
                }}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <form onSubmit={formik.handleSubmit}>
                    <Fab 
                        onClick={handleClose} 
                        sx = {{
                            position: 'absolute',
                            top: '20px',
                            right: '20px'
                        }}
                        color="error"
                        size={'small'}
                        aria-label="error"
                    >
                        <CloseIcon />
                    </Fab>
                    <Typography 
                        id="modal-modal-title"
                        variant="h7"
                        sx={{textAlign: 'center', fontSize: 25}}
                    >
                        Add new group
                    </Typography>
                    <Box id="modal-modal-textfields" sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            id="groupname"
                            name="name"
                            label="Group name"
                            variant="outlined"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            sx={{mb: '20px'}}
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                mb: '20px'
                            }}
                        >
                            <Typography>
                                Start date:
                            </Typography>
                            <DatePicker
                                name="startEducation"
                                label="Start date"
                                views={['year', 'month', 'day']}
                                value={formik.values.startEducation}
                                onChange={(newValue) => {
                                    formik.setFieldValue("startEducation", newValue)
                                }}
                                renderInput={(params) => {
                                    return (<TextField sx={{maxWidth: '70%'}} {...params}
                                                       error={formik.touched.startEducation && Boolean(formik.errors.startEducation)}
                                                       helperText={formik.touched.startEducation && formik.errors.startEducation}/>);
                                }}
                            />
                        </Box>
                        <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                mb: '20px'
                            }}
                        >
                            <Typography>
                                End date:
                            </Typography>
                            <DatePicker
                                name="endEducation"
                                label="End date"
                                inputFormat="MM/dd/yyyy"
                                value={formik.values.endEducation}
                                onChange={(newValue) => {
                                    formik.setFieldValue("endEducation", newValue)
                                }}
                                renderInput={(params) => {
                                    return (<TextField sx={{maxWidth: '70%'}} {...params}
                                                       error={formik.touched.endEducation && Boolean(formik.errors.endEducation)}
                                                       helperText={formik.touched.endEducation && formik.errors.endEducation}/>);
                                }}
                            />
                        </Box>
                        </LocalizationProvider>
                    </Box>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        fullWidth
                    >
                        Create
                    </Button>
                </form>
                </Box>
            </Modal>
        </Box>
    );
};

export default AddGroupModal;