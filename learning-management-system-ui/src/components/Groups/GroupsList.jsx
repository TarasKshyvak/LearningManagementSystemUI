import React from "react";
import GroupItem from "./GroupItem";
import classes from './Groups.module.css';

const GroupsList = ({groups, title}) => {

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <div className={classes.groups_container}>
                {groups.map(group => 
                    <GroupItem key={group.id} group={group}/>
                )}
            </div>
        </div>
    );
}

export default GroupsList;