import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../loginScreen/LoginScreen.tsx';

export type MainContainerParamList = {
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<MainContainerParamList>();

const MainContainer = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainContainer;
