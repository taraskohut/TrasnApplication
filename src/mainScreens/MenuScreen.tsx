import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions, View} from 'react-native';
import MainTabs from './MainTabs.tsx';
import TicketIcon from '../../assets/TicketIcon.tsx';
import TranslateIcon from '../../assets/TranslateIcon.tsx';
import PhrasesIcon from '../../assets/PhrasesIcon.tsx';
import HistoryIcon from '../../assets/HistoryIcon.tsx';
import CustomDrawer from '../addtionalScreens/CustomDrawer.tsx';
const Drawer = createDrawerNavigator();

const MenuScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#007AFD',
        drawerActiveTintColor: '#fff',
        drawerStyle: {
          width: Dimensions.get('window').width / 1.15,
        },
        drawerLabelStyle: {
          marginLeft: -25,
        },
      }}>
      <Drawer.Screen
        name={'Plans'}
        initialParams={{params: 'Plans'}}
        component={MainTabs}
        options={{
          title: 'Plans',
          drawerIcon: ({focused, color, size}) => (
            <TicketIcon focused={focused ? 'white' : 'black'} />
          ),
        }}
      />

      <Drawer.Screen
        name={'Translate'}
        initialParams={{params: 'Translate'}}
        component={MainTabs}
        options={{
          title: 'Translate',
          drawerIcon: ({focused, color, size}) => (
            <TranslateIcon focused={focused ? 'white' : 'black'} />
          ),
        }}
      />

      <Drawer.Screen
        name={'Phrases'}
        initialParams={{params: 'Phrases'}}
        component={MainTabs}
        options={{
          title: 'Phrases',
          drawerIcon: ({focused, color, size}) => (
            <PhrasesIcon focused={focused ? 'white' : 'black'} />
          ),
        }}
      />

      <Drawer.Screen
        name={'History'}
        initialParams={{params: 'History'}}
        component={MainTabs}
        options={{
          title: 'History',
          drawerIcon: ({focused, color, size}) => (
            <HistoryIcon focused={focused ? 'white' : 'black'} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MenuScreen;
