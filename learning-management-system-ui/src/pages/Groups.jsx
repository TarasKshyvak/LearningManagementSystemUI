import { Box, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { GroupErrorContext, StudentsWithoutGroupsContext } from '../components/Contexts';
import AddGroupModal from '../components/Groups/AddGroupModal';
import GroupsList from '../components/Groups/GroupsList';
import { useFetching } from '../hooks/useFetching';
import GroupsService from '../services/GroupsService';
import StudentsService from '../services/StudentsService';

const Groups = () => {
    const [groups, setGroups] = useState([]);
    const [studentsWithoutGroups, setStudentsWithoutGroups] = useState([]);
    const [selectedSort, setSelectedSort] = useState('all');
    const [groupErrors, setGroupErrors] = useState([]);
    
    const [sortedGroups, setSortedGroups] = useState([]);

    const [fetchGroups, isLoading, groupError] = useFetching(async () => {
        const response = await GroupsService.getGroups();
        setGroups(response.data);
        setSortedGroups(response.data);
    });

    const [fetchUsers, userError] = useFetching(async () => {
        const response = await StudentsService.getStudentsWithoutGroups();
        const data = response.data;
        setStudentsWithoutGroups(data);
    });

    useEffect(() => {
        fetchGroups();
        fetchUsers();
    }, []);

    const addGroup = (newGroup) => {
        setGroups([newGroup, ...groups]);
    }

    const changeGroupState = (group) => {
        group.isActive = !group.isActive;
        const itemIndex = groups.findIndex(g => g.id === group.id);
        const changedArr = [...groups];
        changedArr[itemIndex] = group;
        setGroups(changedArr);
    }

    const sortGroups = (choice) => {
        setSelectedSort(choice);
        if (choice === 'all') {
            setSortedGroups(groups);
        }
        if (choice === 'active') {
            setSortedGroups([...groups].filter(g => g.isActive === true));
        }
        if (choice === 'finished') {
            setSortedGroups([...groups].filter(g => g.isActive === false));
        }
    }
    
    return (
        <div>
            {groupError &&
                <h3>An error has occured: {groupError}</h3>
            }
            <StudentsWithoutGroupsContext.Provider value={studentsWithoutGroups}>
                <GroupsList
                    groups={sortedGroups}
                    title={"List of groups"}
                    value={selectedSort}
                    sortGroups={sortGroups}
                    changeGroupState={changeGroupState}
                />
            </StudentsWithoutGroupsContext.Provider>
            {isLoading &&
                <Box sx={{
                    display: 'flex',
                    height: '60vh',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <CircularProgress size={80}/>
                </Box>
            }
            
            <GroupErrorContext.Provider value={{groupErrors, setGroupErrors}}>
                <AddGroupModal create={addGroup} errors={groupErrors}/>
            </GroupErrorContext.Provider>
        </div>
    );
};

export default Groups;