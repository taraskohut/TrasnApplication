import React, {useRef, useState, createContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../loginScreen/LoginScreen.tsx';
import MainTabs from '../mainScreens/MainTabs.tsx';
import ConversationSpeak from '../addtionalScreens/ConversationSpeek.tsx';
import MenuScreen from '../mainScreens/MenuScreen.tsx';
import TestScreen from '../mainScreens/LanguageSelection.tsx';
import 'react-native-gesture-handler';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import ConversationSpeek from '../addtionalScreens/ConversationSpeek.tsx';
import ReportPopUp from '../addtionalScreens/ReportPopUp.tsx';
import BottomSheet from '@gorhom/bottom-sheet';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Colors from '../Themes/Colors.tsx';
import {Text, TouchableOpacity, useColorScheme} from 'react-native';
import LanguageSelection from '../mainScreens/LanguageSelection.tsx';
import {useThemeContext} from '../addtionalScreens/ThemeContext.tsx';

export type MainContainerParamList = {
  LoginScreen: undefined;
  Menu: undefined;
};

const Stack = createNativeStackNavigator<MainContainerParamList>();

const MainContainer = () => {
  const {currentTheme: currentTheme2, toggleTheme} = useThemeContext();

  console.log(currentTheme2);

  const {colors} = useTheme();

  return (
    <NavigationContainer
      theme={currentTheme2 === 'dark' ? Colors.dark : Colors.light}>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MenuScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Language Selection"
          component={LanguageSelection}
          options={{
            headerStyle: {
              backgroundColor: currentTheme2 === 'dark' ? '#1F202B' : '#EBF0F6',
            },
            headerTintColor: currentTheme2 === 'dark' ? '#FFFFFF' : '#000000',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Conversationn"
          component={ConversationSpeek}
          options={{
            headerStyle: {
              backgroundColor: currentTheme2 === 'dark' ? '#1F202B' : '#EBF0F6',
            },
            headerTintColor: currentTheme2 === 'dark' ? '#FFFFFF' : '#000000',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
