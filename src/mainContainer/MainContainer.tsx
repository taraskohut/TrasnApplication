import React, {useRef, useState} from 'react';
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

export type MainContainerParamList = {
  LoginScreen: undefined;
  Menu: undefined;
};

const Stack = createNativeStackNavigator<MainContainerParamList>();

const MainContainer = () => {
  const theme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const {colors} = useTheme();
  const handleToggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(newTheme);
  };
  console.log('col', currentTheme);
  return (
    <NavigationContainer
      theme={currentTheme === 'dark' ? Colors.dark : Colors.light}>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MenuScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Language Selection">
          {props => (
            <LanguageSelection
              {...props}
              currentTheme={currentTheme}
              handleToggleTheme={handleToggleTheme}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Conversationn" component={ConversationSpeek} />
      </Stack.Navigator>
      <TouchableOpacity
        onPress={handleToggleTheme}
        style={{position: 'absolute', bottom: 20, right: 20}}>
        <Text style={{color: colors.themeColor}}>Toggle Theme</Text>
      </TouchableOpacity>
    </NavigationContainer>
  );
};

export default MainContainer;
