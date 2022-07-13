import React from "react";
import GroupAccordion from "./GroupAccordion";
import classes from './Groups.module.css';

const GroupItem = (props) => {
    let startDate = props.group.startEducation.toString();
    let endDate = props.group.endEducation.toString();

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
            {props.group.isActive
             ? <div>Active</div>
             : <div>Education finished</div>
            }
            <GroupAccordion className={classes.group_accordion} students={props.group.students}/>
        </div>
    );
}

export default GroupItem;