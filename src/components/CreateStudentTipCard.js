import {Avatar, Chip, IconButton} from "@material-ui/core";
import CustomInput from "./CustomInput";
import {useState} from "react";
import SendIcon from '@material-ui/icons/Send';


export default function CreateStudentTipCard({}){

    const [tipText,setTipText]=useState("");

    const handleTipTextChange=(e)=>{
        setTipText(e.target.value);
    }



    return (
        <div className={"universityTipCard"}>
            <div className={'tipAuthorRow'}>
                <Avatar sizes={'small'}><b>A</b></Avatar>
                <p className={'tipAuthorText'}>Hello</p>
            </div>
            <div className={'commentInputDiv'}>
                <select>
                    <option>Amrita School of Engineering</option>
                    <option>Stanford</option>
                </select>
                <CustomInput id="longInput" type="text" name="tipText" placeholder="Your Tip" onChange={handleTipTextChange}/>
                <IconButton onClick={()=>{}}>
                    <SendIcon color={'secondary'}/>
                </IconButton>
            </div>
        </div>
    );
}