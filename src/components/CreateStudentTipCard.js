import {Avatar, Chip, Fab, IconButton} from "@material-ui/core";
import CustomInput from "./CustomInput";
import {useState} from "react";
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import CustomSelect from "./CustomSelect";

export default function CreateStudentTipCard({}){

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
                <CustomSelect />
                <div className={'tipInput'}>
                    <CustomInput type="text" name="tipText" placeholder="Your Tip" onChange={handleTipTextChange}/>
                    <IconButton onClick={()=>{}}>
                        <SendIcon color={'secondary'}/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}