import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Button from "@material-ui/core/Button";
import RoomIcon from '@material-ui/icons/Room';
import SchoolIcon from '@material-ui/icons/School';
import ProfileInfoRow from "../components/ProfileInfoRow";
import {useState} from "react";
import {useHistory} from "react-router";
import {Link} from 'react-router-dom';
// import {
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogContentText,
//     DialogTitle,
//     TextField,
//     Typography
// } from "@material-ui/core";


export default function ProfileScreen() {

    const history=useHistory();

    const [name,setName]=useState("Eswar Raman");
    const [university,setUniversity]=useState("Amrita Vishwa Vidyapeetham");
    const [city, setCity]=useState("Hosur");
    const [email,setEmail]=useState("v.eswarraman2000@gmail.com");
    const [phoneNumber,setPhoneNumber]=useState("1234567890");
    const [securityQuestion, setSecurityQuestion]=useState("What is your favourite novel");
    const [securityAnswer,setSecurityAnswer]=useState("Harry Potter and the Sorcerer's Stone");


    const handleNameChange=(e)=>{
        setName(e.target.value);
    }
    const handleUniversityChange=(e)=>{
        setUniversity(e.target.value);
    }
    const handleCityChange=(e)=>{
        setCity(e.target.value);
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handlePhoneNumberChange=(e)=>{
        setPhoneNumber(e.target.value);
    }
    const handleSecurityQuestionChange=(e)=>{
        setSecurityQuestion(e.target.value);
    }
    const handleSecurityAnswerChange=(e)=>{
        setSecurityAnswer(e.target.value);
    }

    // const onChangePasswordButtonClick=()=>{
    //     history.replace('/changePassword');
    // }






    return (
        <div id="subScreenCard">
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
                                    <span className="profileListSecondary">Amrita Vishwa Vidyapeetham, Coimbatore</span>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>{<RoomIcon/>}</ListItemIcon>
                                    <span className="profileListSecondary">Hosur</span>
                                </ListItem>
                            </List>
                        </Box>

                        <Box item flex={1} textAlign="center">
                            <List id={'profileExamText'} dense disablePadding>
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
                    <ProfileInfoRow fieldName={"Name"} fieldValue={name} fieldOnChange={handleNameChange} onSubmit={()=>{}}/>
                    <Box height={16}/>
                    <ProfileInfoRow fieldName={"University"} fieldValue={university} fieldOnChange={handleUniversityChange} onSubmit={()=>{}}/>
                    <Box height={16}/>
                    <ProfileInfoRow fieldName={"City"} fieldValue={city} fieldOnChange={handleCityChange} onSubmit={()=>{}}/>
                    <Box height={16}/>
                    <ProfileInfoRow fieldName={"Email"} fieldValue={email} fieldOnChange={handleEmail} onSubmit={()=>{}}/>
                    <Box height={16}/>
                    <ProfileInfoRow fieldName={"Phone Number"} fieldValue={phoneNumber} fieldOnChange={handlePhoneNumberChange} onSubmit={()=>{}}/>
                    <Box height={16}/>
                    <ProfileInfoRow fieldName={"Security Question"} fieldValue={securityQuestion} fieldOnChange={handleSecurityQuestionChange} onSubmit={()=>{}}/>
                    <Box height={16}/>
                    <ProfileInfoRow fieldName={"Security Answer"} fieldValue={securityAnswer} fieldOnChange={handleSecurityAnswerChange} onSubmit={()=>{}}/>
                </CardContent>
            </Card>
            <Box height={16}/>
            <Card>
                <CardContent>
                    <Grid container>
                        <Box item flex={1} textAlign="center">
                            <Button variant="contained" size="small" color="secondary">Share Profile URL</Button>
                            {/* <Link to={'/recovery'}>Forgot your Password? Click Here</Link> */}
                        </Box>
                        <Box item flex={1} textAlign="center">
                            <Box height={4}/>
                             <Button variant="contained" size="small" color="secondary" onClick={()=>{history.replace('/changePassword');window.location.reload(false);}}>Change Password</Button>
                            {/*<Link id="changePasswordBtn" to={'/changePassword'}>CHANGE PASSWORD</Link>*/}
                        </Box>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
}