import React, { useState, useEffect, useRef } from "react";
import { useFetching } from "../hooks/useFetching";
import CoursesModule from "../services/modules/CoursesModule";
import Cours from "../components/CoursAccordion";
import { Box } from "@mui/material";
import AddButton from "../components/coursespage/AddButton";
import Modall from "../components/coursespage/Modall";
import AddUserModel from "../components/coursespage/AddUserModel";


const CoursesPage = () => {
  const [courses, setUsers] = useState([]);
  useEffect(() => {
    fetching();
  }, []);


  const [fetching, userError] = useFetching(async () => {
    const response = await CoursesModule.getAllCourses();
    setUsers(response.data);
  });

  console.log(userError);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [errors, setErrors] = useState([]);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {userError && <div>Error{userError}</div>}
      <Box sx={{ width: "100%", maxWidth: 700, bgcolor: "background.paper" }}>
        {courses.map((cours) => (
          <Cours courses={cours} key={cours.id} />
        ))}
      </Box>
      <Box position="fixed" sx={{ bottom: "10%", right: "5%", zIndex: 998 }}>
        <AddButton
          onClick={() => {
            handleOpen();
            setErrors([]);
          }}
        />
        <Modall handleClose={handleClose} open={open} errors={errors}>
          <AddUserModel handleClose={handleClose} setErrors={setErrors} courses={courses} setUsers={setUsers} />
        </Modall>
      </Box>
    </div>
  );
};

export default CoursesPage;
