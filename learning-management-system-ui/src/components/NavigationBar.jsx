import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import Menu from './Menu';
import {alpha} from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InputBase from '@mui/material/InputBase';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {routes} from "./Routes";
import { Link } from 'react-router-dom';
import {Button, Slide, Zoom} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ChatWindow from "./chat/ChatWindow";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


//
const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%'
    },
}));


const NavigationBar = () => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const containerRef = React.useRef(null);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    //
    const [openChat, setOpenChat] = React.useState(false);

    const handleClick = () => {
        setOpenChat(!openChat);
    };


    //

    return (
        <div>
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && {display: 'none'}),
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <MenuBookIcon sx={{fontSize: '30px', mr: '5px'}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{display: {xs: 'none', sm: 'block', marginLeft: 15, marginRight: 15}}}
                        >
                            LMS
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                {/* Todo icon upd search layout  */}
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>
                    </Box>
                    {/*<Link style={{textDecoration: 'none', color: '#000'}} to={routes.chat}>*/}
                        <Box
                            onClick={handleClick}
                            sx={{display: 'flex'}}>
                            <MailIcon/>
                        </Box>


                    {/*</Link>*/}
                </Toolbar>
            </AppBar>
            <Menu handleDrawerClose={handleDrawerClose} open={open} theme={theme}></Menu>
            {/*<Box*/}
            {/*    sx={{position: 'fixed',*/}
            {/*        right: 10,*/}
            {/*        top: 100,*/}
            {/*        zIndex: 999,  width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}*/}
            {/*    component="nav"*/}
            {/*    aria-labelledby="nested-list-subheader"*/}
            {/*>*/}
            {/*    /!*<Collapse in={openChat} timeout="auto" unmountOnExit>*!/*/}

            {/*    /!*</Collapse>*!/*/}
            {/*    */}
            {/*</Box>*/}
            <Slide sx={{position: 'fixed', right: '20px', top: '70px', zIndex: 999,}} timeout={600} direction="down" in={openChat} container={containerRef.current}>
                <Box >
                    <ChatWindow></ChatWindow>
                </Box>
            </Slide>
        </div>
    );
};

export default NavigationBar;