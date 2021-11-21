import { Card, CardContent, Grid, Box, Avatar } from "@material-ui/core";
import { List, ListItem, ListItemIcon } from "@material-ui/core";
import RoomIcon from '@material-ui/icons/Room';
import BookmarkListItem from "./BookmarkListItem";
import { Typography } from "@material-ui/core";


export default function HomeCard(){
    return (
        <div id="homeInfoCard">
            <Card className='homeStudentRow' variant="outlined">
                <CardContent>
                    <Grid container>
                        <Box item flex={1}>
                            <Avatar id="homeAvatar" variant="rounded"><b>E</b></Avatar>
                        </Box>
                        <Box item flex={2}>
                            <List dense disablePadding>
                                <ListItem key="Home">
                                    <span id="profileListPrimary">Eswar Raman</span>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>{<RoomIcon/>}</ListItemIcon>
                                    <span className="profileListSecondary">Hosur</span>
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                    
                </CardContent>
            </Card>
            <Box height={12}/>
            <Card id="bmHome" variant='outlined'>
                <CardContent>
                    <Typography color="secondary" variant="h5" align="center">Bookmarked Resources</Typography>
                    <BookmarkListItem coverURL="https://images-na.ssl-images-amazon.com/images/I/81bGEoXpcUL.jpg" resourceTitle="Sashank's Guide For GRE"/>
                    <BookmarkListItem coverURL="https://images-na.ssl-images-amazon.com/images/I/81bGEoXpcUL.jpg" resourceTitle="Sashank's Guide For GRE"/>
                    <BookmarkListItem coverURL="https://images-na.ssl-images-amazon.com/images/I/81bGEoXpcUL.jpg" resourceTitle="Sashank's Guide For GRE"/>
                    <BookmarkListItem coverURL="https://images-na.ssl-images-amazon.com/images/I/81bGEoXpcUL.jpg" resourceTitle="Sashank's Guide For GRE"/>
                </CardContent>
            </Card>
        </div>
    );
}