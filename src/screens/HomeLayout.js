
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
import BookIcon from "@material-ui/icons/Book";
import BallotIcon from '@material-ui/icons/Ballot';
import QuizScreen from "./QuizScreen";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import {useState} from "react";
import clsx from "clsx";
import UniversityTipScreen from "./UniversityTipScreen";
import Home from "./Home";
import ProfileScreen from "../subScreens/ProfileScreen";
import RepositoryScreen from "./RepositoryScreen";
import CollegePredictorScreen from "../subScreens/CollegePredictorScreen";
import NewResourceScreen from "../subScreens/NewResource";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SchoolIcon from '@material-ui/icons/School';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';
import {useRouteMatch,useHistory} from "react-router";

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

    const screenPaths=['home','profile','repository','quiz','predictor','tips'];
    const screenNames=['Home','Profile','Study Materials','Sample Quiz','University Finder','Forum'];
    const history=useHistory();
    const url=useRouteMatch().url;
    const useStyles=styles();
    const [currentPathIndex,setCurrentPathIndex]=useState(0);
    const [sidebarOpen, setSidebarOpen]  = useState(false);


    const getPlaceholderBoxWidth=()=>{
        if(sidebarOpen){
            return sidebarWidth;
        }
        return sidebarWidth/4.5;
    }

    const getSidebarStyleClass=(index)=>{
        if(index===currentPathIndex){
            return 'screenOptionSelected';
        }
        return null;
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
                            <Typography variant={"h5"} id={"homeLayoutAppBarText"}>{screenNames[currentPathIndex]}</Typography>
                        </IconButton>
                    </Box>
                    <IconButton onClick={()=>{history.replace('/login')}}>
                        <ExitToAppIcon id={'appBarIcon'}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Router>
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
                        <Link to={`${url}`} className={'sidebarOptionText'}>
                            <ListItem button key="Home" id="dashboardHomeBtn" onClick={()=>{setCurrentPathIndex(0)}}>
                                <ListItemIcon>{<HomeIcon className={getSidebarStyleClass(0)}/>}</ListItemIcon>
                                <ListItemText className={getSidebarStyleClass(0)} primary="Home"/>
                            </ListItem>
                        </Link>
                        <Link to={`${url}/${screenPaths[1]}`} className={'sidebarOptionText'}>
                            <ListItem button key="Profile" id="dashboardProfileBtn" onClick={()=>{setCurrentPathIndex(1)}}>
                                <ListItemIcon>{<AccountCircleIcon className={getSidebarStyleClass(1)}/>}</ListItemIcon>
                                <ListItemText className={getSidebarStyleClass(1)} primary="Profile"/>
                            </ListItem>
                        </Link>

                        <Link to={`${url}/${screenPaths[2]}`} className={'sidebarOptionText'}>
                            <ListItem button key="Repository" id="dashboardRepositoryBtn" onClick={()=>{setCurrentPathIndex(2)}}>
                                <ListItemIcon>{<BookIcon className={getSidebarStyleClass(2)}/>}</ListItemIcon>
                                <ListItemText className={getSidebarStyleClass(2)} primary="Repository"/>
                            </ListItem>
                        </Link>

                        <Link to={`${url}/${screenPaths[3]}`} className={'sidebarOptionText'}>
                            <ListItem button key="QuizScreen" id="dashboardCollegePredictorBtn" onClick={()=>{setCurrentPathIndex(3)}}>
                                <ListItemIcon>{<BallotIcon className={getSidebarStyleClass(3)}/>}</ListItemIcon>
                                <ListItemText className={getSidebarStyleClass(3)} primary="Quiz"/>
                            </ListItem>
                        </Link>

                        <Link to={`${url}/${screenPaths[4]}`} className={'sidebarOptionText'}>
                            <ListItem button key="CollegePredictor" id="dashboardCollegePredictorBtn" onClick={()=>{setCurrentPathIndex(4)}}>
                                <ListItemIcon>{<SchoolIcon className={getSidebarStyleClass(4)}/>}</ListItemIcon>
                                <ListItemText className={getSidebarStyleClass(4)} primary="College Predictor"/>
                            </ListItem>
                        </Link>



                        <Link to={`${url}/${screenPaths[5]}`} className={'sidebarOptionText'}>
                            <ListItem button key="Tip" id="dashboardTipBtn" onClick={()=>{setCurrentPathIndex(5)}}>
                                <ListItemIcon>{<DoneAllIcon className={getSidebarStyleClass(5)}/>}</ListItemIcon>
                                <ListItemText className={getSidebarStyleClass(5)} primary="Tips"/>
                            </ListItem>
                        </Link>


                        <ListItem button onClick={()=>setSidebarOpen(false)}>
                            <ListItemIcon>{<CloseIcon/>}</ListItemIcon>
                            <ListItemText primary={"Close"} />
                        </ListItem>
                    </List>
            </Drawer>
            <div className="dashboardContentSpace">
                {/*{TODO: This is where main content goes}*/}

                <Switch>
                    <Route exact path={`${url}/`}>
                        <Home/>
                    </Route>
                    <Route exact path={`${url}/${screenPaths[1]}`}>
                        <ProfileScreen/>
                    </Route>
                    <Route exact path={`${url}/${screenPaths[2]}`}>
                        <RepositoryScreen/>
                    </Route>
                    <Route exact path={`${url}/${screenPaths[3]}`}>
                        <QuizScreen/>
                    </Route>
                    <Route exact path={`${url}/${screenPaths[4]}`}>
                        <CollegePredictorScreen/>
                    </Route>
                    <Route exact path={`${url}/${screenPaths[5]}`}>
                        <UniversityTipScreen/>
                    </Route>
                    <Route exact path={`${url}/${screenPaths[2]}/new`}>
                        <NewResourceScreen/>
                    </Route>
                    <Route exact path={`${url}/${screenPaths[0]}`}>
                        <Home/>
                    </Route>
                </Switch>
                {/*<RespositoryScreen/>*/}
                {/*<NewResourceScreen/>*/}
                {/* <CollegePredictorScreen/>*/}
                {/* <ProfileScreen/>*/}
                {/*<QuizScreen/>*/}
            </div>
            </Router>
        </div>
    );
}