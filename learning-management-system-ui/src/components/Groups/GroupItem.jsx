import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import GroupsService from "../../services/GroupsService";
import GroupAccordion from "./GroupAccordion";
import classes from './Groups.module.css';

const GroupItem = (props) => {
    let startDate = props.group.startEducation.toString();
    let endDate = props.group.endEducation.toString();

    const [isActive, setIsActive] = useState(props.group.isActive);

    const setGroupState = async () => {      
        const response = await GroupsService.removeGroup(props.group.id);
        console.log(response);
        setIsActive(!isActive);        
    }

    return (
        <div className={classes.group_item}>
            <h3>{props.group.name}</h3>
            <hr/>
            <div>
                Education period: {startDate
                                    .slice(0, startDate.indexOf('T'))
                                    .replace(/-/g, "/")} - {endDate
                                                            .slice(0, endDate.indexOf('T'))
                                                            .replace(/-/g, "/")}
            </div>
            <Button 
                variant="outlined" 
                className={isActive ? classes.active_group : classes.inactive_group} 
                onClick={setGroupState}
            >
                {isActive
                 ? <div>Active</div>
                 : <div>Education finished</div>
                }
            </Button>
            <GroupAccordion className={classes.group_accordion} students={props.group.students}/>
        </div>
    );
}

export default GroupItem;