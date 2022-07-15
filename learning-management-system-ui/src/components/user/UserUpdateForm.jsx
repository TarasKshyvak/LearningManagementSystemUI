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
import LoadingButton from "@mui/lab/LoadingButton";


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
        .min(5, "Username must be min 12 characters only")
        .max(12, "Username must be max 12 characters only")
        .required("Username is required"),
    birthday: Yup.date()
        .max(new Date())
        .required("Birthday is required"),
    gender: Yup.number()
        .required("Gender is required")
});


const UserUpdateForm = ({update, user, setErrors}) => {
    const handleChange = (event) => {
        formik.setFieldValue("gender", event.target.value);
    };
    // const {setUserErrors} = useContext(UserErrorContext);
    const [isDisabledBtn, setDisabledBtn] = useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            //TODO: Change email with confirmation by email
            // email: "",
            birthday: user.birthday,
            gender: user.gender
        },
        validationSchema: validationSchema,

        onSubmit: async (values) => {
            setErrors([]);
            setDisabledBtn(true);
            values.id = user.id;
            let data = {...user, ...values}
            let dataJson = JSON.stringify(data, null, 2);
            const res = await UserService.put(user.id, data);
            console.log(dataJson)
            if (res.errors) {
                setErrors(res.errors);
            } else {
                const model = res.data;
                update(model);
            }
            setDisabledBtn(false);
        },
    });
    return (
        <Box sx={{padding: '20px 20px', textAlign: 'center'}}>
            <Typography variant={'h5'} sx={{mb: '30px', fontWeight: '900'}}>Updating user</Typography>
            <form style={{width: '380px', textAlign: 'left'}} onSubmit={formik.handleSubmit}>
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
                              value={formik.values.gender}/>
                </Box>

                <LoadingButton
                    loading={isDisabledBtn}
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    sx={{mt: '20px'}}
                >
                    Update
                </LoadingButton>
            </form>
        </Box>
    );
};
export default UserUpdateForm;

