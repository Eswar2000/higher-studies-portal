import LoginScreen from './screens/LoginScreen';
import SignUpScreen from "./screens/SignUpScreen";
import HomeLayout from "./screens/HomeLayout";
// import HomeLayout from "./screens/HomeLayout";
// import ProfileScreen from "./subScreens/ProfileScreen";
import LandingScreen from "./screens/LandingScreen";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ChangePassword from "./screens/ChangePassword";
import ForgotPassword from "./screens/ForgotPassword";
import ProfileScreen from "./subScreens/ProfileScreen";

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
        <Route exact path={'/recovery'}>
          <ForgotPassword/>
        </Route>
        <Route exact path={'/changePassword'}>
          <ChangePassword/>
        </Route>
        <Route exact path={'/visit/:user'}>
          <ProfileScreen/>
        </Route>
        <Route path={'/'}>
          <LandingScreen/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
