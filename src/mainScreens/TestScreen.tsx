import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MenuScreen from './MenuScreen.tsx';
import PlansScreen from './PlansScreen.tsx';
import HistoryFavourite from '../addtionalScreens/HistoryFavourite.tsx';
import HistoryHistory from '../addtionalScreens/HistoryHIstory.tsx';
import FromLang from '../addtionalScreens/FromLang.tsx';
import ToLang from '../addtionalScreens/ToLang.tsx';

const Tab = createMaterialTopTabNavigator();

const TestScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="From" component={FromLang} />
      <Tab.Screen name="To" component={ToLang} />
    </Tab.Navigator>
  );
};

export default TestScreen;
