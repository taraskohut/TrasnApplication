import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MenuScreen from './MenuScreen.tsx';
import PlansScreen from './PlansScreen.tsx';

const Tab = createMaterialTopTabNavigator();

const TestScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Plans" component={PlansScreen} />
    </Tab.Navigator>
  );
};

export default TestScreen;
