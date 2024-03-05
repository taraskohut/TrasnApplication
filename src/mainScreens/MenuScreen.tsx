import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import {NavigatorContainer} from '@react-navigation/native';
import ConversationScreen from './ConversationScreen.tsx';
import HistoryScreen from './HistoryScreen.tsx';
import TranslateScreen from './TranslateScreen.tsx';

const Drawer = createDrawerNavigator();
const MenuScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="History">
      <Drawer.Screen name="History" component={HistoryScreen} />
      <Drawer.Screen name="History" component={TranslateScreen} />
    </Drawer.Navigator>
  );
};

export default MenuScreen;
