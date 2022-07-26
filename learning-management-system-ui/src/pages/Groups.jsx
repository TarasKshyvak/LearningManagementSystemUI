import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GroupErrorContext, StudentsWithoutGroupsContext } from '../components/Contexts';
import AddGroupModal from '../components/Groups/AddGroupModal';
import GroupsList from '../components/Groups/GroupsList';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';
import GroupsService from '../services/GroupsService';
import StudentsService from '../services/StudentsService';
import { setGroupsArray, updateGroupState } from '../store/groupSlice';
import { getPageCount } from '../utils/pages';

const Groups = () => {
    const dispatch = useDispatch();
    const groups = useSelector(state => state.groups.groups);
    const [sortedGroups, setSortedGroups] = useState([]);

    //Group filter button
    const [studentsWithoutGroups, setStudentsWithoutGroups] = useState([]);
    const [selectedSort, setSelectedSort] = useState('all');
    const [groupErrors, setGroupErrors] = useState([]);
    
    //Pagination
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalPages, setTotalPages] = useState(0);
    const lastElement = useRef();

    const [fetchGroups, isLoading, groupError] = useFetching(async (pageNumber, pageSize) => {
        const response = await GroupsService.getGroups(pageNumber, pageSize);
        
        dispatch(setGroupsArray(response.data.data));
        setSortedGroups([...sortedGroups, ...response.data.data]);

        const totalCount = response.data.totalRecords;
        setTotalPages(getPageCount(totalCount, pageSize));
    });
    
    useEffect(() => {
        fetchGroups(pageNumber, pageSize);
    }, [pageNumber, pageSize]);
    
    useObserver(lastElement, pageNumber < totalPages, isLoading, () => {
        console.log('observer is working')
        setPageNumber(pageNumber + 1);
    });

    const [fetchUsers, userError] = useFetching(async () => {
        const response = await StudentsService.getStudentsWithoutGroups();
        const data = response.data;
        setStudentsWithoutGroups(data);
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const addGroup = (newGroup) => {
        setSortedGroups([newGroup, ...sortedGroups]);
    }

    const changeGroupState = (group) => {
        dispatch(updateGroupState({group}));
        setSortedGroups(groups);
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
                <div ref={lastElement} style={{height: 1}}/>
            </StudentsWithoutGroupsContext.Provider>
                        
            <GroupErrorContext.Provider value={{groupErrors, setGroupErrors}}>
                <AddGroupModal create={addGroup} errors={groupErrors}/>
            </GroupErrorContext.Provider>
        </div> 
    );
};

export default Groups;