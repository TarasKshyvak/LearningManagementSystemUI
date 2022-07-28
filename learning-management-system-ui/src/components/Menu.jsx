import { EmojiSymbols } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import MenuItem from './MenuItem';
import { routes } from './Routes';


const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const menuList = [
    {
        text: 'Home',
        image: <HomeIcon />,
        route: routes.home
    },
    {
        text: 'Users',
        image: <GroupIcon />,
        route: routes.users
    },
    {
        text: 'Courses',
        image: <SchoolIcon />,
        route: routes.courses
    },
    {
        text: 'Groups',
        image: <GroupsIcon />,
        route: routes.groups
    },
    {
        text: 'Subjects',
        image: <EmojiSymbols />,
        route: routes.subjects
    },
];


const Menu = ({ handleDrawerClose, open, theme }) => {

    return (
        <Drawer
            PaperProps={{
                sx: {
                    backgroundColor: "#1976d2"
                }
            }}
            variant="permanent" open={open}>
            <DrawerHeader >
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon sx={{ color: '#fff' }} />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {menuList.map((item) => (
                    <MenuItem key={item.text} menuLink={item.route} text={item.text} open={open} image={item.image}></MenuItem>
                ))}
            </List>
        </Drawer>

    );
};

export default Menu;