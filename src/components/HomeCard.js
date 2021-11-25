import { Card, CardContent, Grid, Box, Avatar } from "@material-ui/core";
import { List, ListItem, ListItemIcon } from "@material-ui/core";
import RoomIcon from '@material-ui/icons/Room';
import BookmarkListItem from "./BookmarkListItem";
import { Typography } from "@material-ui/core";
import GetRandomAvatarColor from "../styleComponents/GetRandomAvatarColor";



export default function HomeCard({studentProfile,bookmarkedResources}){
    return (
        <div id="homeInfoCard">
            <Card className='homeStudentRow' variant="outlined">
                <CardContent>
                    <Grid container>
                        <Box item flex={1}>
                            <Avatar id="homeAvatar" className={GetRandomAvatarColor('ascii',studentProfile.name)} variant="rounded"><b>{studentProfile.name[0]}</b></Avatar>
                        </Box>
                        <Box item flex={2}>
                            <List dense disablePadding>
                                <ListItem key="Home">
                                    <span id="profileListPrimary">{studentProfile.name}</span>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>{<RoomIcon/>}</ListItemIcon>
                                    <span className="profileListSecondary">{studentProfile.city}</span>
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                    
                </CardContent>
            </Card>
            <Box height={12}/>
            {bookmarkedResources.length!==0 && <Card id="bmHome1" variant='outlined'>
                <CardContent>
                    <Typography color="secondary" variant="h5" align="center">Bookmarked Resources</Typography>
                    {bookmarkedResources.map((item) => (
                        <BookmarkListItem coverURL={item.coverURL} resourceTitle={item.name}/>
                    ))}
                    {/*<Typography color="secondary" variant="h7" align="center">No Bookmarked Resources</Typography>}*/}
                    {/*<BookmarkListItem coverURL="https://images-na.ssl-images-amazon.com/images/I/81bGEoXpcUL.jpg" resourceTitle="Sashank's Guide For GRE"/>*/}
                    {/*<BookmarkListItem coverURL="https://images-na.ssl-images-amazon.com/images/I/81bGEoXpcUL.jpg" resourceTitle="Sashank's Guide For GRE"/>*/}
                    {/*<BookmarkListItem coverURL="https://images-na.ssl-images-amazon.com/images/I/81bGEoXpcUL.jpg" resourceTitle="Sashank's Guide For GRE"/>*/}
                </CardContent>
            </Card>}
            {bookmarkedResources.length===0 && <Card id="bmHome2" variant='outlined'>
                <CardContent>
                    <Typography id={"bmText1"} color="secondary" variant="h2" align="center">No Bookmarked Resources</Typography>
                    <Box height={20}/>
                    <Typography id={"bmText2"} color="primary" variant="h4" align="center">Check out your study materials tab</Typography>
                </CardContent>
            </Card>}
        </div>
    );
}