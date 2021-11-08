import AddUser from '../assets/AddUser.svg';
import CustomInput from "../components/CustomInput";
import InputValidation from "../services/InputValidation";
import {useState, useEffect} from "react";
import {useHistory} from "react-router";
import backendService from "../services/backendService";
import hashString from "../services/hashString";



export default function SignUpScreen() {

    const history=useHistory();
    const [username, setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [name, setName]=useState("");
    const [statusCode, setStatusCode]=useState(0);
    const [usernameValid,setUsernameValid]=useState(false);
    const [emailValid,setEmailValid]=useState(false);
    const [passwordValid,setPasswordValid]=useState(false);
    const [confirmPasswordValid,setConfirmPasswordValid]=useState(false);
    

    
    const handleNameChange=(e)=>{
        setName(e.target.value);
    }

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

    const onSubmit=async (e)=>{
        e.preventDefault();
        if(!(passwordValid && confirmPasswordValid)){
            return;
        }
        let reqBody = {
            name: name,
            username: username,
            email: email,
            passwordHash: hashString(username,password)
        };
        let response = await backendService("POST", "/signup",reqBody, null, null);
        console.log(response);
        setStatusCode(response.statusCode);
        if(response.statusCode === 200){
            history.replace('/login');
        }
    }


    return (
        <div>
            <div className="signUpLeftDiv">
                <div id="loginRightDivSubCol" className="signInFormDiv">
                    <form id={'signInForm'}>
                        <h1 className="setFont subHeading">Sign Up</h1>
                        <CustomInput type="text" name="name" value={name} placeholder="Name" onChange={handleNameChange}/>
                        <CustomInput type="text" name="username" value={username} placeholder="Username" onChange={handleUsernameChange}/>
                        <CustomInput type="email" name="email" value={email} placeholder="User email" onChange={handleEmailChange}/>
                        <CustomInput type="password" name="password" value={password} placeholder="Password" onChange={handlePasswordChange}/>
                        <CustomInput type="password" name="confirmPassword" value={confirmPassword} placeholder="Confirm Password" onChange={handleConfirmPasswordChange}/>
                        <input className={'formButton'} name={'SignUp'} type="submit" onClick={onSubmit}/>
                        {!usernameValid && <p className={'loginInvalidText'}>Username must be 5-25 alphanumeric characters only</p>}
                        {usernameValid && !emailValid && <p className={'loginInvalidText'}>Enter valid Email</p>}
                        {usernameValid && emailValid && !passwordValid && <p className={'loginInvalidText'}>Password must contain 8-16 characters including at least <br/> 1 Upper case, 1 Lower case and 1 special character</p>}
                        {usernameValid && emailValid && passwordValid && !confirmPasswordValid && <p className={'loginInvalidText'}>Passwords must match</p>}
                        {usernameValid && emailValid && passwordValid && confirmPasswordValid && statusCode!==0 && statusCode!==200 &&<p className={'loginInvalidText'}>Signup Failed. Account Not Created. Retry Later.</p>}
                    </form>
                </div>
            </div>
            <div class="signUpRightDiv">
                <img src={AddUser} alt="LoginImage"/>
            </div>
        </div>
    );
}