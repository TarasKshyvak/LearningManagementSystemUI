import * as React from "react";
import Box from "@mui/material/Box";
import EditButton from "./EditButton";
import {Grid, Typography} from "@mui/material";
import DeleteButton from "./DeleteButton";
import Modall from "./Modall";
import EditCoursesModel from "./EditCourseModel";
import DelleteModal from "./DeleteModal";
import UpdateButton from "./UpdateButton";

const CorseBody = ({cours, setCours}) => {
    const [open, setOpen] = React.useState(false);
    const [errors, setErrors] = React.useState([]);
    const [delteModall, setDelteModall] = React.useState(false);

    const editButton = <EditButton setopen={setOpen} course={cours}/>;
    const emptySpace = <div></div>;
    const deleteButton = (
        <DeleteButton
            cours={cours}
            setCours={setCours}
            setDelteModall={setDelteModall}
        />
    );
    const updateButton = (
        <UpdateButton
            cours={cours}
            setCours={setCours}
            setDelteModall={setDelteModall}
        />
    );

    let changeButton;

    let button;
    if (cours.isActive) {
        changeButton = deleteButton;
        button = editButton;
    } else {
        changeButton = updateButton;
        button = emptySpace;
    }

    return (
        <Box>
            <Grid

                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Typography
                    sx={{
                        maxWidth: '100%',
                        display: 'inline-block',
                        wordBreak: 'break-all'
                    }}
                   >
                    Description:{cours.description}
                </Typography>
                <Grid container direction="row" justifyContent="space-between">
                    <Box sx={{mt: 5}}>
                        Start Date: {new Date(cours.startedAt).toLocaleDateString()}
                    </Box>

                    <Grid container direction="row" justifyContent="flex-end">
                        {button}
                        {changeButton}
                    </Grid>
                </Grid>
            </Grid>
            <Modall open={open} errors={errors}>
                <EditCoursesModel
                    setOpen={setOpen}
                    setErrors={setErrors}
                    cours={cours}
                    setCours={setCours}
                ></EditCoursesModel>
            </Modall>

            <Modall open={delteModall} errors={errors}>
                <DelleteModal
                    setOpen={setDelteModall}
                    cours={cours}
                    setCours={setCours}
                ></DelleteModal>
            </Modall>
        </Box>
    );
};

export default CorseBody;
