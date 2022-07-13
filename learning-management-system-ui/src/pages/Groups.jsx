import React, { useState } from 'react';
import { useEffect } from 'react';
import AddGroupModal from '../components/Groups/AddGroupModal';
import GroupsList from '../components/Groups/GroupsList';
import { useFetching } from '../hooks/useFetching';
import GroupsService from '../services/GroupsService';

const Groups = () => {
    const [groups, setGroups] = useState([]);

    const [fetchGroups, groupError] = useFetching(async () => {
        const response = await GroupsService.getGroups();
        setGroups(response.data);
    });

    useEffect(() => {
        fetchGroups();
    }, []);

    const addGroup = (newGroup) => {
        setGroups([newGroup, ...groups]);
    };
    
    console.log(groups);
    return (
        <div>
            {groupError &&
                <h3>An error has occured: {groupError}</h3>
            }
            <GroupsList groups={groups} title={"List of groups"}/>
            <AddGroupModal create={addGroup}/>
        </div>
    );
};

export default Groups;