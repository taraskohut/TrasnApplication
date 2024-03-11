import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../loginScreen/LoginScreen.tsx';
import MainTabs from '../mainScreens/MainTabs.tsx';
import ConversationSpeak from '../addtionalScreens/ConversationSpeek.tsx';
import MenuScreen from '../mainScreens/MenuScreen.tsx';
import TestScreen from '../mainScreens/TestScreen.tsx';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ConversationSpeek from '../addtionalScreens/ConversationSpeek.tsx';
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
        {/*<Stack.Screen*/}
        {/*  name="Main"*/}
        {/*  component={MainTabs}*/}
        {/*  options={{headerShown: false}}*/}
        {/*/>*/}
        <Stack.Screen name="Language Selection" component={TestScreen} />
        <Stack.Screen name="Conversationn" component={ConversationSpeek} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
