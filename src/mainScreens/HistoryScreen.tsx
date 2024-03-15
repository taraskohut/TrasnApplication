import React from 'react';
import {Text, View} from 'react-native';
import MenuScreen from './MenuScreen.tsx';
import PlansScreen from './PlansScreen.tsx';
import TestScreen from './LanguageSelection.tsx';
import ConversationScreen from './ConversationScreen.tsx';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HistoryFavourite from '../addtionalScreens/HistoryFavourite.tsx';
import HistoryHistory from '../addtionalScreens/HistoryHIstory.tsx';
import TranslateScreen from './TranslateScreen.tsx';
const Tab = createMaterialTopTabNavigator();

const HistoryScreen = () => {
  const {colors} = useTheme();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.themeColor,
            borderBottomWidth: 1,
          },
          tabBarLabelStyle: {
            color: colors.white,
          },
          tabBarActiveTintColor: '#007AFD',
          tabBarIndicatorStyle: {
            backgroundColor: '#007AFD',
            paddingHorizontal: 30,
          },
        }}>
        <Tab.Screen name="Favourite" component={HistoryFavourite} />
        <Tab.Screen name="History" component={HistoryHistory} />
      </Tab.Navigator>
    </>
  );
};

export default HistoryScreen;
