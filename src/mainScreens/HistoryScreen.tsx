import React from 'react';
import {Text, View} from 'react-native';
import MenuScreen from './MenuScreen.tsx';
import PlansScreen from './PlansScreen.tsx';
import TestScreen from './TestScreen.tsx';
import ConversationScreen from './ConversationScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TranslateScreen from './TranslateScreen.tsx';
const Tab = createMaterialTopTabNavigator();

const HistoryScreen = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Plans" component={PlansScreen} />
        <Tab.Screen name="Translate" component={TranslateScreen} />
      </Tab.Navigator>
    </>
  );
};

export default HistoryScreen;
