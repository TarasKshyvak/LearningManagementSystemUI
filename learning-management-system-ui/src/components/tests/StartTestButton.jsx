import { Box, Button, Tooltip } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import AddNewTestModal from "./AddNewTestModal";

const StartTestButton = ({
  subject,
}) => {
  const [AddNewTest, setAddNewTest] = React.useState(false);
  const [StartTestModal, setStartTestModal] = React.useState(false);
  const [InfoTestModal, setInfoTestModal] = React.useState(false);


  let button = (
    <Box sx={{ justifyContent: "space-between" }}>
      <Tooltip title="Start test">
        <Button
          onClick={() => {
            setStartTestModal(true);
          }}
        >
          <PlayArrowIcon color="success" />
        </Button>
      </Tooltip>
      <Tooltip title="Info about test">
        <Button
          onClick={async () => {
             setInfoTestModal(true);
          }}
        >
          <InfoIcon />
        </Button>
      </Tooltip>
    </Box>
  );
  if (subject.testId === null) {
    button = (
      <Tooltip title="Add new test">
        <Button
          onClick={() => {
            setAddNewTest(true);
          }}
        >
          <AddIcon color="success" />
        </Button>
      </Tooltip>
    );
  }
  return (
    <div>
      {button}
      <AddNewTestModal
        subject={subject}
        AddNewTest={AddNewTest}
        setAddNewTest={setAddNewTest}
      />
    </div>
  );
};

export default StartTestButton;
