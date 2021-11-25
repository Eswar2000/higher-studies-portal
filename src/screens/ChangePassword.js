import ChangePasswordImage from '../assets/ChangePasswordImage.svg';
import {useState} from "react";
import CustomInput from "../components/CustomInput";
import hashString from "../services/hashString";
import backendService from "../services/backendService";
import {useHistory} from "react-router";

export default function ChangePassword(){
    const history = useHistory();

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

                        <input type="submit" className="formButton" value="Submit" onClick = {
                            async (e) => {
                                e.preventDefault();
                                if(password.localeCompare(newPassword) == 0) {
                                    let reqBody = {
                                        username: username,
                                        authhash: hashString(username, oldPassword),
                                        newHash: hashString(username, password)
                                    };
                                    console.log(reqBody)
                                    let response = await backendService("POST", "/changePassword", reqBody, null, null);
                                    console.log(response);
                                    if(response.statusCode === 200) {
                                        history.replace("/login");
                                    }
                                } else {
                                    alert("PASSWORDS DO NOT MATCH");
                                }
                            }
                        }/>
                    </form>
                </div>

            </div>
        </div>
    );
}