import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    makeStyles,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import {useState} from "react";
import clsx from "clsx";
import UniversityTipScreen from "./UniversityTipScreen";
import ProfileScreen from "../subScreens/ProfileScreen";
import CollegePredictorScreen from "../subScreens/CollegePredictorScreen";

const sidebarWidth=240;

const styles=makeStyles((theme)=>({
    sidebar:{
        width: sidebarWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    sidebarOpen:{
        width:sidebarWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    sidebarClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7) + 1,
        },
    }
}));


export default function HomeLayout(){

    const useStyles=styles();
    const [sidebarOpen, setSidebarOpen]  = useState(false);


    const getPlaceholderBoxWidth=()=>{
        if(sidebarOpen){
            return sidebarWidth;
        }
        return sidebarWidth/4.5;
    }

    return (
        <div>
            <AppBar id={'homeLayoutAppBar'} position={'static'}>
                <Toolbar>
                    <Box width={getPlaceholderBoxWidth()}/>
                    <Box display="flex" flexGrow={1}>
                        <IconButton edge="start" color="inherit" onClick={()=>setSidebarOpen(!sidebarOpen)}>
                            <MenuIcon/>
                            <Box width={8}/>
                            <Typography variant={"h4"} id={"homeLayoutAppBarText"}>Home</Typography>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant='permanent'
                    className={clsx(useStyles.sidebar,{
                        [useStyles.sidebarOpen]: sidebarOpen,
                        [useStyles.sidebarClose]:!sidebarOpen
                    })}
                    classes={{
                        paper:clsx({
                            [useStyles.sidebarOpen]: sidebarOpen,
                            [useStyles.sidebarClose]:!sidebarOpen
                        })
                    }}
            >
                <List>
                    <ListItem button key="Home" id="dashboardHomeBtn" onClick={()=>{}}>
                        <ListItemIcon>{<HomeIcon/>}</ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                    <ListItem button key="Profile" id="dashboardProfileBtn" onClick={()=>{}}>
                        <ListItemIcon>{<AccountCircleIcon/>}</ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </ListItem>

                    <ListItem button onClick={()=>setSidebarOpen(false)}>
                        <ListItemIcon>{<CloseIcon/>}</ListItemIcon>
                        <ListItemText primary={"Close"} />
                    </ListItem>
                </List>
            </Drawer>
            <div className="dashboardContentSpace">
                {/*{TODO: This is where main content goes}*/}
                {/* <UniversityTipScreen/> */}
                <CollegePredictorScreen/>
                {/* <ProfileScreen/> */}
            </div>
        </div>
    );
}