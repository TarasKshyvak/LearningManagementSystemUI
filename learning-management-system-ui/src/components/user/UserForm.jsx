import React, {useEffect} from "react";
import {Formik, Form, useField, useFormikContext, useFormik} from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";

import {Button, Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";

const validationSchema = Yup.object({
    firstName: Yup.string()
        .max(15, "First name must be 15 characters or less")
        .required("First name is required"),
    lastName: Yup.string()
        .min(2, "Last name should be min 2 letters")
        .max(20, "Last name must be 20 characters or less")
        .required("Last name is required"),
    // userName: Yup.string()
    //     .max(12, "Username must be 12 characters only")
    //     .required("required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Required")
});


const UserForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            userName: "",
            email: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Box sx={{padding: '50px 20px'}}>
            <form style={{width: '400px'}} onSubmit={formik.handleSubmit}>

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
                />
                <TextField
                    sx={{fontSize: '50px'}}
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="First name"
                    variant="outlined"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
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
                />

                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </Box>
    );
};
export default UserForm;

//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import {Button, TextField} from "@mui/material";
//
//
// const validationSchema = yup.object({
//     email: yup
//         .string('Enter your email')
//         .email('Enter a valid email')
//         .required('Email is required'),
//     password: yup
//         .string('Enter your password')
//         .min(8, 'Password should be of minimum 8 characters length')
//         .required('Password is required'),
// });
//
// const WithMaterialUI = () => {
//     const formik = useFormik({
//         initialValues: {
//             email: 'foobar@example.com',
//             password: 'foobar',
//         },
//         validationSchema: validationSchema,
//         onSubmit: (values) => {
//             alert(JSON.stringify(values, null, 2));
//         },
//     });
//
//     return (
//         <div>
//             <form onSubmit={formik.handleSubmit}>
//                 <TextField
//                     fullWidth
//                     id="email"
//                     name="email"
//                     label="Email"
//                     value={formik.values.email}
//                     onChange={formik.handleChange}
//                     error={formik.touched.email && Boolean(formik.errors.email)}
//                     helperText={formik.touched.email && formik.errors.email}
//                 />
//                 <TextField
//                     fullWidth
//                     id="password"
//                     name="password"
//                     label="Password"
//                     type="password"
//                     value={formik.values.password}
//                     onChange={formik.handleChange}
//                     error={formik.touched.password && Boolean(formik.errors.password)}
//                     helperText={formik.touched.password && formik.errors.password}
//                 />
//                 <Button color="primary" variant="contained" fullWidth type="submit">
//                     Submit
//                 </Button>
//             </form>
//         </div>
//     );
// };
// export default  WithMaterialUI;
