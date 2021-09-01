import AddUser from '../assets/AddUser.svg';
import CustomInput from "../components/CustomInput";
import InputValidation from "../tools/InputValidation";
import {useState} from "react";



export default function SignUpScreen() {

    const [username, setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    const [usernameValid,setUsernameValid]=useState(false);
    const [emailValid,setEmailValid]=useState(false);
    const [passwordValid,setPasswordValid]=useState(false);
    const [confirmPasswordValid,setConfirmPasswordValid]=useState(false);


    const handleUsernameChange=(e)=>{
        setUsernameValid(InputValidation.checkUsername(e.target.value));
        setUsername(e.target.value);
    }

    const handleEmailChange=(e)=>{
        setEmailValid(InputValidation.checkEmail(e.target.value));
        setEmail(e.target.value);
    }

    const handlePasswordChange=(e)=>{
        setPasswordValid(InputValidation.checkPassword(e.target.value));
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange=(e)=>{
        setConfirmPasswordValid(password===e.target.value);
        setConfirmPassword(e.target.value);
    }




    return (
        <div>
            <div className="signUpLeftDiv">
                <div id="loginRightDivSubCol" className="signInFormDiv">
                    <form id={'signInForm'}>
                        <h1 className="setFont subHeading">Sign Up</h1>
                        <CustomInput type="text" name="username" placeholder="Username" onChange={handleUsernameChange}/>

                        <CustomInput type="email" name="email" placeholder="User email" onChange={handleEmailChange}/>
                        {/*<input id="longInput" type="text" name="dob" placeholder="Date of Birth" onFocus={(obj)=>{*/}
                        {/*    obj.type='date';*/}
                        {/*}}/><br/>*/}

                        <CustomInput type="password" name="password" placeholder="Password" onChange={handlePasswordChange}/>

                        <CustomInput type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleConfirmPasswordChange}/>
                        <input className={'formButton'} name={'SignUp'} type="submit"/>
                        {!usernameValid && <p className={'loginInvalidText'}>Username must be 5-25 alphanumeric characters only</p>}
                        {usernameValid && !emailValid && <p className={'loginInvalidText'}>Enter valid Email</p>}
                        {usernameValid && emailValid && !passwordValid && <p className={'loginInvalidText'}>Password must contain 8-16 characters including at least <br/> 1 Upper case, 1 Lower case and 1 special character</p>}
                        {usernameValid && emailValid && passwordValid && !confirmPasswordValid && <p className={'loginInvalidText'}>Passwords must match</p>}
                    </form>
                </div>
            </div>
            <div class="signUpRightDiv">
                <img src={AddUser} alt="LoginImage"/>
            </div>
        </div>
    );
}