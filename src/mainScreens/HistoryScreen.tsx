import React from 'react';
import {Text, View} from 'react-native';
import MenuScreen from './MenuScreen.tsx';
import PlansScreen from './PlansScreen.tsx';
import TestScreen from './LanguageSelection.tsx';
import ConversationScreen from './ConversationScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HistoryFavourite from '../addtionalScreens/HistoryFavourite.tsx';
import HistoryHistory from '../addtionalScreens/HistoryHIstory.tsx';
import TranslateScreen from './TranslateScreen.tsx';
const Tab = createMaterialTopTabNavigator();

const HistoryScreen = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Favourite" component={HistoryFavourite} />
        <Tab.Screen name="History" component={HistoryHistory} />
      </Tab.Navigator>
    </>
  );
};

export default HistoryScreen;
