import {Avatar, IconButton} from "@material-ui/core";
import CustomInput from "./CustomInput";
import {useState} from "react";
import SendIcon from '@material-ui/icons/Send';
import CustomSelect from "./CustomSelect";

// eslint-disable-next-line
export default function CreateStudentTipCard({}){

    // eslint-disable-next-line
    const [tipText,setTipText]=useState("");

    const handleTipTextChange=(e)=>{
        setTipText(e.target.value);
    }



    return (
        <div className={"universityTipCard"}>
            <div className={'tipAuthorRow'}>
                <Avatar sizes={'small'}><b>A</b></Avatar>
                <p className={'tipAuthorAddressing'}>Comment as </p>
                <p className={'tipAuthorText'}>Hello</p>
            </div>
            <div className={'commentInputDiv'}>
                {/* <select>
                    <option>Amrita School of Engineering</option>
                    <option>Stanford</option>
                </select> */}
                <CustomSelect/>
                <div className={'tipInput'}>
                    <CustomInput type="text" value={tipText} name="tipText" placeholder="Your Tip" onChange={handleTipTextChange}/>
                    <IconButton id={'studentTipSendButton'} onClick={()=>{}}>
                        <SendIcon color={'secondary'}/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}