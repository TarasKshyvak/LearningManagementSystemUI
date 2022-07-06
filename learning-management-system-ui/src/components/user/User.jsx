import { React, useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useFetching } from '../../hooks/useFetching';
import CoursesModule from '../../services/modules/CoursesModule';

const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetching();
    }, []);

    const [fetching, userError] = useFetching(async () => {
        const response = await CoursesModule.getAllCourses();
        setUsers(response.data);
    });

    return (
        <div>
            {userError &&
                <div>Error</div>
            }
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {users.map((user) => (
                    <ListItem key={user.id}>
                        <ListItemText primary={user.userName} secondary={user.firstName + ' ' + user.lastName} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default User;