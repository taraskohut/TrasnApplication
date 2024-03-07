import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../loginScreen/LoginScreen.tsx';
import MainTabs from '../mainScreens/MainTabs.tsx';
import MenuScreen from '../mainScreens/MenuScreen.tsx';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
export type MainContainerParamList = {
  LoginScreen: undefined;
  Main: undefined;
  Menu: undefined;
};

const Stack = createNativeStackNavigator<MainContainerParamList>();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
