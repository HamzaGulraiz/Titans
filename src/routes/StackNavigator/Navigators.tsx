import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ACCOUNT_CREATED,
  AUTH,
  GET_STARTED,
  REGISTER_WITH_MOBILE,
  SIGN_IN,
  SIGN_UP,
  SPLASH_SCREEN,
  VERIFICATION_CODE,
} from '../../constants/Navigator';
import SplashScreen from '../../screens/SplashScreen';
import GetStarted from '../../screens/GetStarted';
import Auth from '../../screens/Auth';
import RegisterWithMobile from '../../screens/RegisterWithMobile';
import Verification from '../../screens/Verification';
import AccountCreated from '../../screens/AccountCreated';

export type RootStackParams = {
  SplashScreen: any;
  GetStarted: any;
  Auth: any;
  RegisterWithMobile: any;
  VerificationCode: any;
  AccountCreated: any;
};

const Stack = createStackNavigator<RootStackParams>();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={GET_STARTED} component={GetStarted} />
      <Stack.Screen name={AUTH} component={Auth} />
      <Stack.Screen
        name={REGISTER_WITH_MOBILE}
        component={RegisterWithMobile}
      />
      <Stack.Screen name={VERIFICATION_CODE} component={Verification} />
      <Stack.Screen name={ACCOUNT_CREATED} component={AccountCreated} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
