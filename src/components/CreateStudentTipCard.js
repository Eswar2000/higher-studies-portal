import {Avatar, IconButton} from "@material-ui/core";
import CustomInput from "./CustomInput";
import SendIcon from '@material-ui/icons/Send';
import {useEffect, useState} from "react";
import backendService from "../services/backendService";

// eslint-disable-next-line
export default function CreateStudentTipCard({tipText,handleTipTextChange,onSubmit}){

    // eslint-disable-next-line

    const [studentDetails,setStudentDetails]=useState();
    const [statusCode,setStatusCode]=useState(0);

    const fetchStudentDetails=async ()=>{
        let response=await backendService("GET","/profile",null,sessionStorage.username,sessionStorage.passwordHash);

        let tempStatusCode=response.statusCode;

        if(response.statusCode !== 200){
            setStatusCode(response.statusCode);
            return;
        }
        response=response.response;

        setStudentDetails({
            name: response.studentProfile.name._text,
            pgUniversityName: response.studentProfile.pgUniversityName._text
        });

        setStatusCode(tempStatusCode);


    }


    useEffect(()=>{
        fetchStudentDetails()
    },[]);



    return (
        <div className={"universityTipCard"}>
            {statusCode===200 && <div className={'tipAuthorRow'}>
                <Avatar sizes={'small'}><b>{studentDetails.name[0]}</b></Avatar>
                <p className={'tipAuthorAddressing'}>Comment as </p>
                <p className={'tipAuthorText'}>{studentDetails.name}</p>
            </div>}
            {statusCode===200 && <p className={'tipAdmittedUniversity'}>{studentDetails.pgUniversityName}</p>}
            <div className={'commentInputDiv'}>
                {/* <select>
                    <option>Amrita School of Engineering</option>
                    <option>Stanford</option>
                </select> */}
                <div className={'tipInput'}>
                    <CustomInput id="studentTip" type="text" value={tipText} name="tipText" placeholder="Your Tip" onChange={handleTipTextChange}/>
                    <IconButton id={'studentTipSendButton'} onClick={onSubmit}>
                        <SendIcon color={'secondary'}/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}