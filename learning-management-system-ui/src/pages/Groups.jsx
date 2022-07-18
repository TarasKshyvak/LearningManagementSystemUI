import React, { useState } from 'react';
import { useEffect } from 'react';
import { GroupErrorContext } from '../components/Contexts';
import AddGroupModal from '../components/Groups/AddGroupModal';
import GroupsList from '../components/Groups/GroupsList';
import { useFetching } from '../hooks/useFetching';
import GroupsService from '../services/GroupsService';

const Groups = () => {
    const [groups, setGroups] = useState([]);
    const [selectedSort, setSelectedSort] = useState('all');
    const [groupErrors, setGroupErrors] = useState([]);
    
    const [sortedGroups, setSortedGroups] = useState([]);

    const [fetchGroups, groupError] = useFetching(async () => {
        const response = await GroupsService.getGroups();
        setGroups(response.data);
        setSortedGroups(response.data);
    });

    useEffect(() => {
        fetchGroups();
    }, []);

    const addGroup = (newGroup) => {
        setGroups([newGroup, ...groups]);
    }

    const changeGroupState = (group) => {
        group.isActive = !group.isActive;
        const itemIndex = groups.findIndex(g => g.id === group.id);
        console.log(itemIndex);
        const changedArr = [...groups];
        changedArr[itemIndex] = group;
        setGroups(changedArr);
        console.log(groups);
    }

    const sortGroups = (choice) => {
        setSelectedSort(choice);
        if (choice === 'all') {
            console.log(`choice is ${choice}`);
            console.log(`selectedSort is ${selectedSort}`);
            console.log(groups);
            setSortedGroups(groups);
        }
        if (choice === 'active') {
            console.log(`choice is ${choice}`);
            console.log(`selectedSort is ${selectedSort}`);
            console.log([...groups].filter(g => g.isActive === true));
            setSortedGroups([...groups].filter(g => g.isActive === true));
        }
        if (choice === 'finished') {
            console.log(`choice is ${choice}`);
            console.log(`selectedSort is ${selectedSort}`);
            console.log([...groups].filter(g => g.isActive === false));
            setSortedGroups([...groups].filter(g => g.isActive === false));
        }
    }
    
    return (
        <div>
            {groupError &&
                <h3>An error has occured: {groupError}</h3>
            }
            <GroupsList
                groups={sortedGroups}
                title={"List of groups"}
                value={selectedSort}
                sortGroups={sortGroups}
                changeGroupState={changeGroupState}
            />
            <GroupErrorContext.Provider value={{groupErrors, setGroupErrors}}>
                <AddGroupModal create={addGroup} errors={groupErrors}/>
            </GroupErrorContext.Provider>
        </div>
    );
};

export default Groups;