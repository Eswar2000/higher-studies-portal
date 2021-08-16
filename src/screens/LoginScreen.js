import BookRead from '../assets/BookRead.svg';



export default function LoginScreen() {
    return (
        <div>
            <div class="loginLeftDiv">
                <img src={BookRead} alt="LoginImage"/>
            </div>
            <div class="loginRightDiv">
                
                <div id="loginRightDivSubCol" class="centerDiv">
                    <h1 class="heading setFont">Higher Studies Portal</h1>
                    <h2 class="setFont subHeading">Login</h2>
                    <form>
                        <input id="longInput" type="text" name="username" placeholder="Username"/><br/>
                        <input id="longInput" type="password" name="password" placeholder="Password"/><br/>
                        <button id="longInput" class="loginButton" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}