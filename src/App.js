<<<<<<< HEAD
 //import LoginScreen from './screens/LoginScreen';
 //import ForgotPassword from './screens/ForgotPassword';
 //import ChangePassword from './screens/ChangePassword';
// import SignUpScreen from "./screens/SignUpScreen";
import HomeLayout from "./screens/HomeLayout";
// import HomeLayout from "./screens/HomeLayout";
// import ProfileScreen from "./subScreens/ProfileScreen";
// import UniversityTipScreen from"./subScreens/UniversityTipScreen";
function App() {
  return (
     //<LoginScreen/>
      <HomeLayout/>
      // <CustomSelect/>
    //<ForgotPassword/>
    //<ChangePassword/>
    // <SignUpScreen/>
    //<UniversityTipScreen/>
=======
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from "./screens/SignUpScreen";
import HomeLayout from "./screens/HomeLayout";
// import HomeLayout from "./screens/HomeLayout";
// import ProfileScreen from "./subScreens/ProfileScreen";
import LandingScreen from "./screens/LandingScreen";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/login'}>
          <LoginScreen/>
        </Route>
        <Route exact path={'/signup'}>
          <SignUpScreen/>
        </Route>
        <Route exact path={'/home'}>
          <HomeLayout/>
        </Route>
        <Route path={'/'}>
          <LandingScreen/>
        </Route>
      </Switch>
    </Router>
>>>>>>> 5ab20607bb97e7611d2b60dca899c5796f7a7ca8
  );
}

export default App;
