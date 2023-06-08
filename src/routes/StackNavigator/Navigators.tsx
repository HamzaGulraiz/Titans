import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GET_STARTED, SPLASH_SCREEN} from '../../constants/Navigator';
import SplashScreen from '../../screens/SplashScreen';
import GetStarted from '../../screens/GetStarted';

export type RootStackParams = {
  SplashScreen: any;
  GetStarted: any;
};

const Stack = createStackNavigator<RootStackParams>();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={GET_STARTED} component={GetStarted} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
