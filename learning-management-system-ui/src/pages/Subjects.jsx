import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SubjectsTable from "../components/Subjects/SubjectsTable";
import { useFetching } from "../hooks/useFetching";
import SubjectsService from "../services/SubjectsService";
import { setSubjectsArray } from "../store/subjectSlice";

const Subjects = () => {
  const dispatch = useDispatch();

  const [fetchSubjects, isLoading, errors] = useFetching(async () => {
    const response = await SubjectsService.getSubjects();
    dispatch(setSubjectsArray(response.data));
  });

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            height: "60vh",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={50} />
        </Box>
      )}
      <SubjectsTable />
    </div>
  );
};

export default Subjects;
