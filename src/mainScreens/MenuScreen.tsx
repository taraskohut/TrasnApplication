import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions, StatusBar, View} from 'react-native';
import MainTabs from './MainTabs.tsx';
import TicketIcon from '../../assets/TicketIcon.tsx';
import TranslateIcon from '../../assets/TranslateIcon.tsx';
import PhrasesIcon from '../../assets/PhrasesIcon.tsx';
import HistoryIcon from '../../assets/HistoryIcon.tsx';
import CustomDrawer from '../addtionalScreens/CustomDrawer.tsx';
import {useTheme} from '@react-navigation/native';
import {useThemeContext} from '../addtionalScreens/ThemeContext.tsx';
const Drawer = createDrawerNavigator();

const MenuScreen = ({navigation, route}) => {
  const {currentTheme: currentTheme2, toggleTheme} = useThemeContext();
  const {colors} = useTheme();
  console.log('ddddd', currentTheme2);
  // StatusBar.setBarStyle('red');
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#007AFD',
        drawerActiveTintColor: '#fffff',
        drawerStyle: {
          width: Dimensions.get('window').width / 1.15,
          backgroundColor: colors.blocks,
        },
        drawerLabelStyle: {
          marginLeft: -25,
        },
        // drawerContentStyle: {
        //   backgroundColor: '',
        // },
      }}>
      <Drawer.Screen
        name={'Plans'}
        initialParams={{params: 'Plans'}}
        component={MainTabs}
        options={{
          title: 'Plans',
          drawerIcon: ({focused, color, size}) => (
            <TicketIcon focused={focused ? 'white' : colors.iconsCol} />
          ),

          drawerLabelStyle: {
            color: colors.white,
            marginLeft: -25,
          },
        }}
      />

      <Drawer.Screen
        name={'Translate'}
        initialParams={{params: 'Translate'}}
        component={MainTabs}
        options={{
          title: 'Translate',
          drawerIcon: ({focused, color, size}) => (
            <TranslateIcon focused={focused ? 'white' : colors.iconsCol} />
          ),
          drawerLabelStyle: {
            color: colors.white,
            marginLeft: -25,
          },
        }}
      />

      <Drawer.Screen
        name={'Phrases'}
        initialParams={{params: 'Phrases'}}
        component={MainTabs}
        options={{
          title: 'Phrases',
          drawerIcon: ({focused, color, size}) => (
            <PhrasesIcon focused={focused ? 'white' : colors.iconsCol} />
          ),
          drawerLabelStyle: {
            color: colors.white,
            marginLeft: -25,
          },
        }}
      />

      <Drawer.Screen
        name={'History'}
        initialParams={{params: 'History'}}
        component={MainTabs}
        options={{
          title: 'History',
          drawerIcon: ({focused, color, size}) => (
            <HistoryIcon focused={focused ? 'white' : colors.iconsCol} />
          ),
          drawerLabelStyle: {
            color: colors.white,
            marginLeft: -25,
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default MenuScreen;
