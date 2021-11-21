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
import {useEffect, useState} from "react";
import {useHistory, useParams, useRouteMatch} from "react-router";
import backendService from "../services/backendService";
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

    const {user}=useParams();
    const history=useHistory();
    const [name,setName]=useState("");
    const [ugUniversity,setUgUniversity]=useState("");
    const [pgUniversityID,setPgUniversityID]=useState("");
    const [city, setCity]=useState("");
    const [email,setEmail]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [securityQuestion, setSecurityQuestion]=useState("");
    const [securityAnswer,setSecurityAnswer]=useState("");
    const [examStream,setExamStream]=useState("");
    const [pgUniversityList,setPgUniversityList]=useState([]);


    const getAllPgUniversities=async ()=>{
        let response = await backendService("GET","/university?includeNotAdmitted=true",null,sessionStorage.username,sessionStorage.passwordHash);
        if(response.statusCode!==200){
            return;
        }
        response = response.response;
        let tempUniversity = [];

        for(let i=0;i<response.university.length;i++){
            let uni = {
                uniID:response.university[i].id._text,
                uniName:response.university[i].name._text,
            };
            tempUniversity.push(uni);
        }

        setPgUniversityList(tempUniversity);
    }


    const getProfileInfo=async ()=>{

        let response;
        await getAllPgUniversities();
        console.log("user ",user);
        if(typeof user === 'undefined'){
            response=await backendService("GET","/profile",null,sessionStorage.username,sessionStorage.passwordHash);
        }else{
            response=await backendService("GET",`/profile?user=${user}`,null,null,null);
        }

        if(response.statusCode!==200){
            return;
        }
        response=response.response;
        console.log(response);

        setName(response.studentProfile.name._text);
        setUgUniversity(response.studentProfile.ugUniversity._text);
        setPgUniversityID(response.studentProfile.pgUniversityID._text);
        setCity(response.studentProfile.city._text);
        setEmail(response.studentProfile.email._text);
        setPhoneNumber(response.studentProfile.phoneNumber._text);
        (typeof user==="undefined") && setSecurityQuestion(response.studentProfile.securityQuestion._text);
        (typeof user==="undefined") && setSecurityAnswer(response.studentProfile.securityAnswer._text);
        setExamStream(response.studentProfile.examStream._text);
    }

    const updateProfileAttribute=async (fieldName,fieldValue)=>{
        const reqBody={
          fieldName:fieldName,
          fieldValue:fieldValue
        };

        let response = await backendService("PUT","/profile",reqBody,sessionStorage.username,sessionStorage.passwordHash);

        return response.statusCode===200;
    }


    const handleNameChange=(e)=>{
        setName(e.target.value);
    }
    const handleUgUniversityChange=(e)=>{
        setUgUniversity(e.target.value);
    }
    const handlePgUniversityChange=(e)=>{
        setPgUniversityID(e.target.value);
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


    const copyProfileURLToClipboard=()=>{
        navigator.clipboard.writeText(`${window.location.host}/visit/${sessionStorage.username}`);
    }

    useEffect(()=>{
        getProfileInfo();
    },[]);






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
                                    <span id="profileListPrimary">{name}</span>
                                </ListItem>
                                <ListItem key="Profile">
                                    <ListItemIcon>{<SchoolIcon/>}</ListItemIcon>
                                    <span className="profileListSecondary">{ugUniversity}</span>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>{<RoomIcon/>}</ListItemIcon>
                                    <span className="profileListSecondary">{city}</span>
                                </ListItem>
                            </List>
                        </Box>

                        <Box item flex={1} textAlign="center">
                            <List id={'profileExamText'} dense disablePadding>
                                <h3>Examination</h3>
                                <h1>{examStream}</h1>
                            </List>
                        </Box>
                    </Grid>
                    
                </CardContent>
            </Card>
            <Box height={16}/>
            <Card className='profileRowCard' variant="outlined">
                <CardContent>
                    <ProfileInfoRow fieldUIName={"Name"} showEditButton={(typeof user==="undefined")} fieldName={"name"} fieldValue={name} fieldOnChange={handleNameChange} onSubmit={updateProfileAttribute}/>
                    <Box height={16}/>
                    <ProfileInfoRow fieldUIName={"UG University"} showEditButton={(typeof user==="undefined")} fieldName={"ugUniversity"} fieldValue={ugUniversity} fieldOnChange={handleUgUniversityChange} onSubmit={updateProfileAttribute}/>
                    <Box height={16}/>
                    <ProfileInfoRow fieldUIName={"Admitted University"} showEditButton={(typeof user==="undefined")} fieldName={"pgUniversityID"} fieldType={'select'} fieldValue={pgUniversityID} selectOptions={pgUniversityList} fieldOnChange={handlePgUniversityChange} onSubmit={updateProfileAttribute}/>
                    <Box height={16}/>
                    <ProfileInfoRow fieldUIName={"City"} fieldValue={city} showEditButton={(typeof user==="undefined")} fieldName={"city"} fieldOnChange={handleCityChange} onSubmit={updateProfileAttribute}/>
                    <Box height={16}/>
                    <ProfileInfoRow fieldUIName={"Email"} fieldValue={email} showEditButton={(typeof user==="undefined")} fieldName={"email"} fieldOnChange={handleEmail} onSubmit={updateProfileAttribute}/>
                    <Box height={16}/>
                    <ProfileInfoRow fieldUIName={"Phone Number"} fieldValue={phoneNumber} showEditButton={(typeof user==="undefined")} fieldName={"phone"} fieldOnChange={handlePhoneNumberChange} onSubmit={updateProfileAttribute}/>
                    <Box height={16}/>
                    {(typeof user==="undefined") && <div>
                        <ProfileInfoRow fieldUIName={"Security Question"} fieldValue={securityQuestion}
                                        fieldName={"secQuestion"} fieldOnChange={handleSecurityQuestionChange}
                                        onSubmit={updateProfileAttribute}/>
                        <Box height={16}/>
                        <ProfileInfoRow fieldUIName={"Security Answer"} fieldValue={securityAnswer}
                                        fieldName={"secAnswer"} fieldOnChange={handleSecurityAnswerChange}
                                        onSubmit={updateProfileAttribute}/>
                    </div>}
                </CardContent>
            </Card>
            <Box height={16}/>
            {(typeof user==="undefined") && <Card>
                <CardContent>
                    <Grid container>
                        <Box item flex={1} textAlign="center">
                            <Button variant="contained" size="small" color="secondary"
                                    onClick={copyProfileURLToClipboard}>Copy Profile URL</Button>
                            {/* <Link to={'/recovery'}>Forgot your Password? Click Here</Link> */}
                        </Box>
                        <Box item flex={1} textAlign="center">
                            <Box height={4}/>
                            <Button variant="contained" size="small" color="secondary" onClick={() => {
                                history.replace('/changePassword');
                                window.location.reload(false);
                            }}>Change Password</Button>
                        </Box>
                    </Grid>
                </CardContent>
            </Card>}
        </div>
    );
}