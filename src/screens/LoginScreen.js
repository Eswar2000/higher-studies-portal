import BookRead from '../assets/BookRead.svg';
import {useState} from "react";
import CustomInput from "../components/CustomInput";



export default function LoginScreen() {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const handleUsernameChange=(e)=>{
        setUsername(e.target.value);
        console.log(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
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

                        <CustomInput type={'text'} placeholder={'Username'} onChange={handleUsernameChange}/>
                        <CustomInput type={'password'} placeholder={'Password'} onChange={handlePasswordChange}/>

                        <input type="submit" className="formButton" value="Sign In"/>
                    </form>
                </div>

            </div>
        </div>
    );
}