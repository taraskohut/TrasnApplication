import React, {useRef} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BottomSheetComponent} from 'react-native-elements';
import BottomSheet from '@gorhom/bottom-sheet';
import ReportPopUp from '../addtionalScreens/ReportPopUp.tsx';

const Tab = createBottomTabNavigator();

enum RouteName {
  Plans = 'Plans',
  Translate = 'Translate',
  Phrases = 'Phrases',
  History = 'History',
  PopUp = 'PopUp',
}

const MainTabs = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator initialRouteName={RouteName.Plans}>
      <Tab.Screen
        name={RouteName.Plans}
        component={PlansScreen}
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{paddingLeft: 10}}
                onPress={() => navigation.openDrawer()}>
                <Text>lala</Text>
              </TouchableOpacity>
            );
          },
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <TicketIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.Translate}
        component={TranslateScreen}
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{paddingLeft: 10}}
                onPress={() => navigation.openDrawer()}>
                <Text>lala</Text>
              </TouchableOpacity>
            );
          },
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <TranslateIcon width={size} height={size} />
          ),
        }}
        initialParams={{
          Translate: 'Translate',
        }}
      />
      <Tab.Screen
        name=" "
        component={ConversationScreen}
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{paddingLeft: 10}}
                onPress={() => navigation.openDrawer()}>
                <Text>lala</Text>
              </TouchableOpacity>
            );
          },
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <MicroIcon
              width={size + 15}
              height={size + 15}
              borderColor={'#EBF0F6'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.Phrases}
        component={PhrasesScreen}
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{paddingLeft: 10}}
                onPress={() => navigation.openDrawer()}>
                <Text>lala</Text>
              </TouchableOpacity>
            );
          },
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <PhrasesIcon width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.History}
        component={HistoryScreen}
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{paddingLeft: 10}}
                onPress={() => navigation.openDrawer()}>
                <Text>lala</Text>
              </TouchableOpacity>
            );
          },
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <HistoryIcon width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
