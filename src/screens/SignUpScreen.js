import AddUser from '../assets/AddUser.svg';
import CustomInput from "../components/CustomInput";



export default function SignUpScreen() {
    return (
        <div>
            <div className="signUpLeftDiv">
                <div id="loginRightDivSubCol" className="signInFormDiv">
                    <form id={'signInForm'}>
                        <h1 className="setFont subHeading">Sign Up</h1>
                        <CustomInput type="text" name="username" placeholder="Username"/>
                        <CustomInput type="email" name="email" placeholder="User email"/>
                        {/*<input id="longInput" type="text" name="dob" placeholder="Date of Birth" onFocus={(obj)=>{*/}
                        {/*    obj.type='date';*/}
                        {/*}}/><br/>*/}
                        <CustomInput type="password" name="password" placeholder="Password"/>
                        <CustomInput type="password" name="confirmPassword" placeholder="Confirm Password"/>
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