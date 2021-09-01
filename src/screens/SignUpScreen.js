import AddUser from '../assets/AddUser.svg';
import CustomInput from "../components/CustomInput";
import InputValidation from "../tools/InputValidation";
import {useState} from "react";



export default function SignUpScreen() {

    const [username, setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    const handleUsernameChange=(e)=>{
        setUsername(e.target.value);
    }

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange=(e)=>{
        setConfirmPassword(e.target.value);
    }




    return (
        <div>
            <div className="signUpLeftDiv">
                <div id="loginRightDivSubCol" className="signInFormDiv">
                    <form id={'signInForm'}>
                        <h1 className="setFont subHeading">Sign Up</h1>
                        {!InputValidation.checkUsername(username) && <p className={'loginInvalidText'}>Username must be 5-25 alphanumeric characters only</p>}
                        <CustomInput type="text" name="username" placeholder="Username" onChange={handleUsernameChange}/>
                        {!InputValidation.checkEmail(email) && <p className={'loginInvalidText'}>Input valid Email</p>}
                        <CustomInput type="email" name="email" placeholder="User email" onChange={handleEmailChange}/>
                        {/*<input id="longInput" type="text" name="dob" placeholder="Date of Birth" onFocus={(obj)=>{*/}
                        {/*    obj.type='date';*/}
                        {/*}}/><br/>*/}
                        {!InputValidation.checkPassword(password) && <p className={'loginInvalidText'}>Password must contain 8-16 characters including at least <br/> 1 Upper case, 1 Lower case and 1 special character</p>}
                        <CustomInput type="password" name="password" placeholder="Password" onChange={handlePasswordChange}/>
                        {password!==confirmPassword && <p className={'loginInvalidText'}>Passwords must match</p>}
                        <CustomInput type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleConfirmPasswordChange}/>
                        <input className={'formButton'} name={'SignUp'} type="submit"/>
                    </form>
                </div>
            </div>
            <div class="signUpRightDiv">
                <img src={AddUser} alt="LoginImage"/>
            </div>
        </div>
    );
}