import AddUser from '../assets/AddUser.svg';



export default function SignUpScreen() {
    return (
        <div>
            <div className="signUpLeftDiv">
                <div id="loginRightDivSubCol" className="centerDiv">
                    <h1 className="heading setFont">Higher Studies Portal</h1>
                    <h2 className="setFont subHeading">Sign Up</h2>
                    <form>
                        <input id="longInput" type="text" name="username" placeholder="Username"/><br/>
                        <input id="longInput" type="email" name="email" placeholder="User email"/><br/>
                        <input id="longInput" type="text" name="dob" placeholder="Date of Birth" onFocus={(obj)=>{
                            obj.type='date';
                        }}/><br/>
                        <input id="longInput" type="password" name="password" placeholder="Password"/><br/>
                        <input id="longInput" type="password" name="confirmPassword" placeholder="Confirm Password"/><br/>
                        <button id="longInput" className="loginButton" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
            <div class="signUpRightDiv">
                <img src={AddUser} alt="LoginImage"/>
            </div>
        </div>
    );
}