import { Box, Button, Tooltip } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import AddNewTestModal from "./AddNewTestModal";
import { generatePath, Link, useNavigate } from "react-router-dom";

const StartTestButton = ({
  subject,
}) => {
  const [AddNewTest, setAddNewTest] = React.useState(false);
  const [InfoTestModal, setInfoTestModal] = React.useState(false);

  let button = (
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
  if (subject.testId !== null) {
    const path = generatePath("/Testing/:id", {id: subject.testId});
    button = (
      <Box sx={{ justifyContent: "space-between" }}>
        <Tooltip title="Start test">
          <Link to={path}>
            <Button>
              <PlayArrowIcon color="success" />
            </Button>
          </Link>
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
