import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HistoryScreen from '../mainScreens/HistoryScreen.tsx';
import PlansScreen from '../mainScreens/PlansScreen.tsx';
import TranslateScreen from './TranslateScreen.tsx';
import PhrasesScreen from './PhrasesScreen.tsx';
import TicketIcon from '../../assets/TicketIcon.tsx';
import HistoryIcon from '../../assets/HistoryIcon.tsx';
import PhrasesIcon from '../../assets/PhrasesIcon.tsx';
import TranslateIcon from '../../assets/TranslateIcon.tsx';
import ConversationScreen from './ConversationScreen.tsx';
import MicroIcon from '../../assets/MicroIcon.tsx';
import MenuScreen from './MenuScreen.tsx';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

enum RouteName {
  Plans = 'Plans',
  Translate = 'Translate',
  Phrases = 'Phrases',
  History = 'History',
  PopUp = 'PopUp',
}

const MainTabs = () => {
  return (
    //

    // <Drawer.Navigator initialRouteName={RouteName.Menu}>
    //   <Drawer.Screen name={RouteName.Menu} component={MenuScreen} />
    // </Drawer.Navigator>
    <Tab.Navigator initialRouteName={RouteName.Plans}>
      <Tab.Screen
        name={RouteName.Plans}
        component={PlansScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <TicketIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.Translate}
        component={TranslateScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <TranslateIcon width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.PopUp}
        component={ConversationScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MicroIcon width={size + 100} height={size + 100} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.Phrases}
        component={PhrasesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <PhrasesIcon width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.History}
        component={HistoryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <HistoryIcon width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
