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
        <Route path={'/'}>
          <LandingScreen/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
