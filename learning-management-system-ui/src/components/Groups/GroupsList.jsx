import React from "react";
import GroupItem from "./GroupItem";
import classes from './Groups.module.css';
import GroupsSort from "./GroupsSort";

const GroupsList = ({groups, title, value, sortGroups, changeGroupState}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <GroupsSort
                value={value}
                onChange={sortGroups}
            />
            <div className={classes.groups_container}>
                {groups.map(group => 
                    <GroupItem key={group.id} group={group} changeGroupState={changeGroupState}/>
                )}
            </div>
        </div>
    );
}

export default GroupsList;