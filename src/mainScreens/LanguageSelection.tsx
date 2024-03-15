import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MenuScreen from './MenuScreen.tsx';
import PlansScreen from './PlansScreen.tsx';
import HistoryFavourite from '../addtionalScreens/HistoryFavourite.tsx';
import HistoryHistory from '../addtionalScreens/HistoryHIstory.tsx';
import FromLang from '../addtionalScreens/FromLang.tsx';
import ToLang from '../addtionalScreens/ToLang.tsx';
import {useTheme} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const LanguageSelection = ({currentTheme, handleToggleTheme}) => {
  const {colors} = useTheme();
  return (
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
      <Tab.Screen name="From" component={FromLang} />
      <Tab.Screen name="To" component={ToLang} />
    </Tab.Navigator>
  );
};

export default LanguageSelection;
