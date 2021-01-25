import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import HighlightIcon from '@material-ui/icons/Highlight';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import ArchiveIcon from '@material-ui/icons/Archive';
import DashLogo from '../../Assets/LogoDashboard.png';

import ReplayIcon from '@material-ui/icons/Replay'
import ViewStreamOutlinedIcon from '@material-ui/icons/ViewStreamOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import DialpadIcon from '@material-ui/icons/Dialpad';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginLeft: '20px',
        paddingLeft: '10px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '10px',
        backgroundColor: '#f1f3f4',
        marginRight: theme.spacing(2),
        width: '50%',
        "&:click": {
            backgroundColor: 'white',
        }
    },
    searchIcon: {
        padding: '5px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menuButton: {
        marginRight: 0,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        borderRight: 0
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: '50px',
        borderRight: 0
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: 'white',
        padding: theme.spacing(3),
    },
    buttonCustomization: {
        borderTopRightRadius: '50px',
        borderBottomRightRadius: '50px',
        '&:focus': {
            backgroundColor: '#feefc3'
        }
    },
    barIcons: {
        marginLeft: '10px',
        marginRight: '10px'
    },
    sectionDesktop:{
        display: 'flex',
        position: 'absolute',
        right: '20px'
    }
}));

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuId = 'primary-search-account-menu';
    const handleDrawer = () => {
        setOpen(!open)
    };
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer}
                        edge="start"
                        className={clsx(classes.menuButton)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={DashLogo} alt="Fundoo notes" />
                    <Typography variant="h6" noWrap>
                        Fundoo Notes
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase className={classes.input}
                            placeholder="Search"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }} />
                    </div>
                    {/* <div style={{ marginLeft: '10%' }}>
                        <ReplayIcon className={classes.barIcons} />
                        <ViewStreamOutlinedIcon className={classes.barIcons} />
                        <SettingsIcon className={classes.barIcons} />
                    </div>
                    <div style={{ marginLeft: '20px'}}>
                        <DialpadIcon className={classes.barIcons} />
                        <AccountCircleIcon className={classes.barIcons} />
                    </div> */}

                    <div className={classes.sectionDesktop}>
                        <IconButton>
                            <Badge >
                                <ReplayIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge >
                                <ViewStreamOutlinedIcon  />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge >
                                <SettingsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge >
                                <DialpadIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>


                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <List style={{ marginTop: '70px', }}
                >
                    <ListItem button key='Notes' className={classes.buttonCustomization}>
                        <ListItemIcon><HighlightIcon /></ListItemIcon>
                        <ListItemText primary='Notes' />
                    </ListItem>
                    <ListItem button key='Reminders' className={classes.buttonCustomization}>
                        <ListItemIcon><NotificationsIcon /></ListItemIcon>
                        <ListItemText primary='Reminders' />
                    </ListItem>
                    <ListItem button key='Edit Labels' className={classes.buttonCustomization}>
                        <ListItemIcon><CreateIcon /></ListItemIcon>
                        <ListItemText primary='Edit Labels' />
                    </ListItem>
                    <ListItem button key='Archive' className={classes.buttonCustomization}>
                        <ListItemIcon><ArchiveIcon /></ListItemIcon>
                        <ListItemText primary='Archive' />
                    </ListItem>
                    <ListItem button key='Bin' className={classes.buttonCustomization}>
                        <ListItemIcon><DeleteIcon /></ListItemIcon>
                        <ListItemText primary='Bin' />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
        </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
            </main>
        </div>
    );
}