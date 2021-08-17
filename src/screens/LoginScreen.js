import BookRead from '../assets/BookRead.svg';



export default function LoginScreen() {
    return (
        <div>
            <div className="loginLeftDiv">
                <img src={BookRead} alt="LoginImage"/>
            </div>
            <div className="loginRightDiv">
                
                <div id="loginRightDivSubCol" className="centerDiv">
                    <h1 className="heading setFont">Higher Studies Portal</h1>
                    <h2 className="setFont subHeading">Login</h2>
                    <form>
                        <input id="longInput" type="text" name="username" placeholder="Username"/><br/>
                        <input id="longInput" type="password" name="password" placeholder="Password"/><br/>
                        <button id="longInput" className="loginButton" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}