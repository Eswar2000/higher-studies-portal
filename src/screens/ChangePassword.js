import ChangePasswordImage from '../assets/ChangePasswordImage.svg';
import {useState} from "react";
import CustomInput from "../components/CustomInput";

export default function ChangePassword(){

    const [username,setUsername]=useState("");
    const [oldPassword,setOld]=useState("");
    const [password,setPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");

    const handleUsernameChange=(e)=>{
        setUsername(e.target.value);
    }

    const handleOldPassChange=(e)=>{
        setOld(e.target.value);
    }

    const handlePassChange=(e)=>{
        setPassword(e.target.value);
    }

    const handleNewPassChange=(e)=>{
        setNewPassword(e.target.value);
    }
    

    return (
        <div>
            <div className="loginLeftDiv">
                <img src={ChangePasswordImage} alt="LoginImage"/>
            </div>
            <div className="loginRightDiv">

                <div id="loginRightDivSubCol" className="signInFormDiv">
                    <form id="signInForm">
                        {/* <h1 className="heading setFont">Higher Studies Portal</h1> */}
                        <h2 className="setFont subHeading">Change password</h2>

                        <h2 className="setFont secQs">Username:</h2>
                        <CustomInput type={'text'} value={username} onChange={handleUsernameChange}/>
                        
                        <h2 className="setFont secQs">Old password:</h2>
                        <CustomInput type={'password'} value={oldPassword} onChange={handleOldPassChange}/>

                        <h2 className="setFont secQs">New password:</h2>
                        <CustomInput type={'password'} value={password} onChange={handlePassChange}/>

                        <h2 className="setFont secQs">Confirm password:</h2>
                        <CustomInput type={'password'} value={newPassword} onChange={handleNewPassChange}/>

                        <input type="submit" className="formButton" value="Submit"/>
                    </form>
                </div>

            </div>
        </div>
    );
}