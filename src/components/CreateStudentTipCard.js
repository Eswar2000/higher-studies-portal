import {Avatar, IconButton} from "@material-ui/core";
import CustomInput from "./CustomInput";
import {useState} from "react";
import SendIcon from '@material-ui/icons/Send';
import CustomSelect from "./CustomSelect";

// eslint-disable-next-line
export default function CreateStudentTipCard({tipText,handleTipTextChange,onSubmit}){

    // eslint-disable-next-line



    return (
        <div className={"universityTipCard"}>
            <div className={'tipAuthorRow'}>
                <Avatar sizes={'small'}><b>{sessionStorage.name[0]}</b></Avatar>
                <p className={'tipAuthorAddressing'}>Comment as </p>
                <p className={'tipAuthorText'}>{sessionStorage.name}</p>
            </div>
            <p className={'tipAdmittedUniversity'}>{sessionStorage.pgUniversityName}</p>
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