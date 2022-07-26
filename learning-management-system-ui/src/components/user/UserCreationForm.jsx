import React, {useState, useContext} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import Selector from "./Selector";
import UserService from "../../services/UserService";
import {convertDate, getGenderCode} from '../Helpers';
import LoadingButton from '@mui/lab/LoadingButton';
import {useDispatch} from "react-redux";
import {addUser} from '../../store/userSlice';

const charactersOnly = /^[A-Za-z]+$/;

const styledElement = {
    marginBottom: '20px'
}

const selectData = [{key: 0, value: 'Male'}, {key: 1, value: 'Female'}, {key: 2, value: 'Other'}];

const validationSchema = Yup.object({
    firstName: Yup.string()
        .max(15, "First name must be 15 characters or less")
        .matches(charactersOnly, "First name should contains characters only")
        .required("First name is required"),
    lastName: Yup.string()
        .min(2, "Last name should be min 2 letters")
        .max(20, "Last name must be 20 characters or less")
        .matches(charactersOnly, "Last name should contains characters only")
        .required("Last name is required"),
    userName: Yup.string()
        .min(3, "Username must be min 3 characters only")
        .max(25, "Username must be max 25 characters only")
        .required("Username is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    birthday: Yup.date()
        .max(new Date())
        .required("Birthday is required"),
    gender: Yup.number()
        .required("Gender is required")
});


const UserCreationForm = ({setUserErrors, handleClose}) => {
    const handleChange = (event) => {
        formik.setFieldValue("gender", event.target.value);
    };
    const dispatch = useDispatch();

    const [isDisabledBtn, setDisabledBtn] = useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            birthday: new Date(),
            gender: ''
        },
        validationSchema: validationSchema,

        onSubmit: async (values) => {
            setUserErrors([]);
            setDisabledBtn(true);

            values.birthday = convertDate(values.birthday);

            let data = JSON.stringify(values, null, 2);
            const res = await UserService.post(data);

            if (res.errors) {
                res.errors.push('Error test');
                setUserErrors(res.errors);
            } else {
                const model = res.data;
                dispatch(addUser({user: model}));
                handleClose();
            }
            setDisabledBtn(false);

        },
    });
    return (
        <Box sx={{padding: '20px 20px', textAlign: 'center'}}>
            <Typography variant={'h5'} sx={{mb: '30px', fontWeight: '900'}}>Adding new user</Typography>
            <form style={{width: '380px', textAlign: 'left'}} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={styledElement}
                />
                <TextField
                    fullWidth
                    id="userName"
                    name="userName"
                    label="Username"
                    variant="outlined"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    error={formik.touched.userName && Boolean(formik.errors.userName)}
                    helperText={formik.touched.userName && formik.errors.userName}
                    sx={styledElement}
                />
                <TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="First name"
                    variant="outlined"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    sx={styledElement}
                />
                <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    variant="outlined"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    sx={styledElement}
                />

                <LocalizationProvider sx={styledElement} dateAdapter={AdapterDateFns}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Typography>
                            Birthday:
                        </Typography>
                        <DatePicker
                            name="birthday"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            label="Birthday"
                            value={formik.values.birthday}
                            onChange={(newValue) => {

                                formik.setFieldValue("birthday", newValue);
                            }}
                            renderInput={(params) => {
                                return (<TextField sx={{maxWidth: '70%'}} {...params}
                                                   value=''
                                                   error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                                                   helperText={formik.touched.birthday && formik.errors.birthday}/>);
                            }}
                        />
                    </Box>
                </LocalizationProvider>

                <Box sx={{mt: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Typography>
                        Gender:
                    </Typography>
                    <Selector handleChange={handleChange} items={selectData} labelName={'Gender'}
                              value={2}/>
                </Box>

                <LoadingButton
                    loading={isDisabledBtn}
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    sx={{mt: '20px'}}
                >
                    Create
                </LoadingButton>
            </form>
        </Box>
    );
};
export default UserCreationForm;

