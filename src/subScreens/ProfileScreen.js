import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Button from "@material-ui/core/Button";
import RoomIcon from '@material-ui/icons/Room';
import SchoolIcon from '@material-ui/icons/School';


export default function ProfileScreen() {
    return (
        <div id="profileScreenCard">
            <Card className='profileRowCard' variant="outlined">
                <CardContent>
                    <Grid container>
                        <Box item flex={1}>
                            <Avatar id="profileAvatar" variant="rounded"><b>E</b></Avatar>
                        </Box>
                        <Box item flex={2}>
                            <List dense disablePadding>
                                <ListItem key="Home">
                                    <span id="profileListPrimary">Eswar Raman</span>
                                </ListItem>
                                <ListItem key="Profile">
                                    <ListItemIcon>{<SchoolIcon/>}</ListItemIcon>
                                    <span className="profileListSecondary">Amrita Viswa Vidyapeetham, Coimbatore</span>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>{<RoomIcon/>}</ListItemIcon>
                                    <span className="profileListSecondary">Hosur</span>
                                </ListItem>
                            </List>
                        </Box>

                        <Box item flex={1} textAlign="center">
                            <List dense disablePadding>
                                <h3>Examination</h3>
                                <h1>GRE</h1>
                            </List>
                        </Box>
                    </Grid>
                    
                </CardContent>
            </Card>
            <Box height={16}/>
            <Card className='profileRowCard' variant="outlined">
                <CardContent>
                    <Grid container>
                        <Box item flex={1}>
                            <span className="profileEditCategory">Username</span>
                        </Box>
                        <Box item flex={2}>
                            <span className="profileEditResponse">Eswar Raman</span>
                        </Box>
                        <Box item flex={1}>
                            <Button variant="contained" size="small" color="secondary">Edit</Button>
                        </Box>
                    </Grid>
                    <Box height={16}/>
                    <Grid container>
                        <Box item flex={1}>
                            <span className="profileEditCategory">University / College</span>
                        </Box>
                        <Box item flex={2}>
                            <span className="profileEditResponse">Amrita School of Engineering, Coimbatore</span>
                        </Box>
                        <Box item flex={1}>
                            <Button variant="contained" size="small" color="secondary">Edit</Button>
                        </Box>
                    </Grid>
                    <Box height={16}/>
                    <Grid container>
                        <Box item flex={1}>
                            <span className="profileEditCategory">City</span>
                        </Box>
                        <Box item flex={2}>
                            <span className="profileEditResponse">Hosur</span>
                        </Box>
                        <Box item flex={1}>
                            <Button variant="contained" size="small" color="secondary">Edit</Button>
                        </Box>
                    </Grid>
                    <Box height={16}/>
                    <Grid container>
                        <Box item flex={1}>
                            <span className="profileEditCategory">Date of Birth</span>
                        </Box>
                        <Box item flex={2}>
                            <span className="profileEditResponse">16 October, 2000</span>
                        </Box>
                        <Box item flex={1}>
                            <Button variant="contained" size="small" color="secondary">Edit</Button>
                        </Box>
                    </Grid>
                    <Box height={16}/>
                    <Grid container>
                        <Box item flex={1}>
                            <span className="profileEditCategory">Security Question</span>
                        </Box>
                        <Box item flex={2}>
                            <span className="profileEditResponse">What is your favorite story book?</span>
                        </Box>
                        <Box item flex={1}>
                            <Button variant="contained" size="small" color="secondary">Edit</Button>
                        </Box>
                    </Grid>
                    <Box height={16}/>
                    <Grid container>
                        <Box item flex={1}>
                            <span className="profileEditCategory">Security Answer</span>
                        </Box>
                        <Box item flex={2}>
                            <span className="profileEditResponse">Harry Potter and Sorceror's Stone</span>
                        </Box>
                        <Box item flex={1}>
                            <Button variant="contained" size="small" color="secondary">Edit</Button>
                        </Box>
                    </Grid>
                </CardContent>
            </Card>
            <Box height={16}/>
            <Card>
                <CardContent>
                    <Grid container>
                        <Box item flex={1} textAlign="center">
                            <Button variant="contained" size="small" color="secondary">Share Profile URL</Button>
                        </Box>
                        <Box item flex={1} textAlign="center">
                            <Button variant="contained" size="small" color="secondary">Change Password</Button>
                        </Box>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
}