import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/routes/StackNavigator/Navigators';
// import {Provider} from 'react-redux';
// import store from './src/redux/Store';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default App;
