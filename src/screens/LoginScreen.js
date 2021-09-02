import BookRead from '../assets/BookRead.svg';
import {useState} from "react";
import CustomInput from "../components/CustomInput";
import InputValidation from "../tools/InputValidation";



export default function LoginScreen() {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const [errorText,setErrorText]=useState("");


    const handleUsernameChange=(e)=>{
        setUsername(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        //Length restriction username min 5-25 alphanum only
        //Password 8-16, atleast 1 caps, 1 small, 1 num, 1 special character
        if(!InputValidation.checkUsername(username) || !InputValidation.checkPassword(password)){
            setErrorText("Invalid Username or Password");
        }

    }



    return (
        <div>
            <div className="loginLeftDiv">
                <img src={BookRead} alt="LoginImage"/>
            </div>
            <div className="loginRightDiv">
                
                {/* <div id="loginRightDivSubCol" className="centerDiv">
                    <h1 className="heading setFont">Higher Studies Portal</h1>
                    <h2 className="setFont subHeading">Login</h2>
                    <form>
                        <CustomInput id="longInput" type="text" name="username" placeholder="Username" onChange={handleUsernameChange}/><br/>
                        <CustomInput id="longInput" type="password" name="password" placeholder="Password" onChange={handlePasswordChange}/><br/>
                        <button id="longInput" className="loginButton" type="submit">Login</button>
                    </form>
                </div> */}

                <div id="loginRightDivSubCol" className="signInFormDiv">
                    <form id="signInForm">
                        {/* <h1 className="heading setFont">Higher Studies Portal</h1> */}
                        <h2 className="setFont subHeading">Login</h2>

                        <CustomInput type={'text'} value={username} placeholder={'Username'} onChange={handleUsernameChange}/>
                        <CustomInput type={'password'} value={password} placeholder={'Password'} onChange={handlePasswordChange}/>

                        <input type="submit" className="formButton" value="Sign In" onClick={onSubmit}/><br/>
                        {errorText!=="" && <p className={'loginInvalidText'}>{errorText}</p>}
                    </form>
                </div>

            </div>
        </div>
    );
}