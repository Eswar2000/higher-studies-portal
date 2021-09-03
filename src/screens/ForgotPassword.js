import PasswordForget from '../assets/PasswordForget.svg';
import {useState} from "react";
import CustomInput from "../components/CustomInput";

export default function ForgotPassword(){

    const [email,setEmail]=useState("");
    const [sec, setSec] = useState("");
    const [password,setPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [securityAnswer,setSecurityAnswer]=useState('');

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }

    const handleSecChange=(e)=>{
        setSec(e.target.value);
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
                <img src={PasswordForget} alt="Forgot Password"/>
            </div>
            <div className="loginRightDiv">

                <div id="loginRightDivSubCol" className="signInFormDiv">
                    <form id="signInForm">
                        {/* <h1 className="heading setFont">Higher Studies Portal</h1> */}
                        <h2 className="setFont subHeading">Forgot password</h2>
                        <h2 className="setFont secQs">Email:</h2>
                        <CustomInput type={'email'} value={email} onChange={handleEmailChange}/>
                        
                        <h2 className="setFont secQs">Your favourite movie:</h2>
                        <CustomInput type={'text'} value={securityAnswer} onChange={handleSecChange}/>

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