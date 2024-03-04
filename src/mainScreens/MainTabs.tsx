import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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

const Tab = createBottomTabNavigator();

enum RouteName {
  Plans = 'Plans',
  Translate = 'Translate',
  Phrases = 'Phrases',
  History = 'History',
  PopUp = 'PopUp',
}

const MainTabs = () => {
  return (
    <Tab.Navigator initialRouteName={RouteName.Plans}>
      <Tab.Screen
        name={RouteName.Plans}
        component={PlansScreen}
        options={{
          headerShown: false,
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
