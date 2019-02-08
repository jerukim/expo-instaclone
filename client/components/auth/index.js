import { createSwitchNavigator } from 'react-navigation';

import Login from './Login';
import Signup from './Signup';

const AuthStack = createSwitchNavigator(
  {
    Login: Login,
    Signup: Signup,
  },
  {
    initialRouteName: 'Login',
  }
);

export default AuthStack;
