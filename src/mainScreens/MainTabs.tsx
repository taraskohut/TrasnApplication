/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';

import {useNavigation, useTheme} from '@react-navigation/native';
import PlansScreen from './PlansScreen.tsx';
import TranslateScreen from './TranslateScreen.tsx';
import HistoryScreen from './HistoryScreen.tsx';
import PhrasesScreen from './PhrasesScreen.tsx';
import TicketIcon from '../../assets/TicketIcon.tsx';
import TranslateIcon from '../../assets/TranslateIcon.tsx';
import PhrasesIcon from '../../assets/PhrasesIcon.tsx';
import HistoryIcon from '../../assets/HistoryIcon.tsx';
import MicroIcon from '../../assets/MicroIcon.tsx';
import conversationScreen from './ConversationScreen.tsx';
import BurgerIcon from '../../assets/BurgerIcon.tsx';
Icon.loadFont();

const Tab = createBottomTabNavigator();

function MainTabs(props) {
  const navigation = useNavigation();
  const {colors} = useTheme();
  console.log('navigation', colors);
  return (
    <Tab.Navigator
      initialRouteName={props.route && props.route.params && props.route.params.params ? props.route.params.params : 'Plans'}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconComponent;
          if (route.name === 'Plans') {
            iconComponent = focused ? <TicketIcon focused={'#007AFD'} /> : <TicketIcon focused={'grey'} />;
          } else if (route.name === 'Translate') {
            iconComponent = focused ? <TranslateIcon focused={'#007AFD'} /> : <TranslateIcon focused={'grey'} />;
          } else if (route.name === 'Phrases') {
            iconComponent = focused ? <PhrasesIcon focused={'#007AFD'}/> : <PhrasesIcon focused={'grey'} />;
          } else if (route.name === 'History') {
            iconComponent = focused ? <HistoryIcon focused={'#007AFD'} /> : <HistoryIcon focused={'grey'} />;
          }
          return iconComponent;
        },
        tabBarStyle: {
          backgroundColor: colors.blocks,
        },
      })}

    >
      <Tab.Screen name="Plans" component={PlansScreen} options={{
        tabBarLabel:'Plans',
        tabBarLabelStyle: { color: colors.white },
        title:'Plans',
        headerShown:true,
        headerStyle: {
          backgroundColor: '#007AFD',
        },
        headerTitleStyle: {
          color: 'white',
        },
        headerTitleAlign: 'center',
        headerLeft:() =>{
          return (
            <TouchableOpacity style={{paddingLeft:10}} onPress={() => navigation.openDrawer()}>
              <BurgerIcon color={'white'}/>
            </TouchableOpacity>
          );
        },
      }} />
      <Tab.Screen name="Translate" component={TranslateScreen} options={{
        tabBarLabel:'Translate',
        title:'Translate',
        headerShown:true,
        tabBarLabelStyle: { color: colors.white },
        headerStyle: {
          backgroundColor: colors.themeColor,
        },
        headerTitleStyle: {
          color: colors.white,
        },
        headerLeft:() =>{
          return (
            <TouchableOpacity style={{paddingLeft:10}} onPress={() => navigation.openDrawer()}>
              <BurgerIcon color={colors.white}/>
            </TouchableOpacity>
          );
        },
      }} />
      <Tab.Screen
        name=" "
        component={conversationScreen}
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{paddingLeft: 10}}
                >
                <Text>lala</Text>
              </TouchableOpacity>
            );
          },
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <MicroIcon
              width={size + 15}
              height={size + 15}
              borderColor={colors.themeColor}
            />
          ),
        }}
      />
      <Tab.Screen name="Phrases" component={PhrasesScreen} options={{
        tabBarLabel:'Phrases',
        title:'Phrases',
        tabBarLabelStyle: { color: colors.white },
        headerShown:true,
        headerStyle: {
          backgroundColor: colors.themeColor,
        },
        headerTitleStyle: {
          color: colors.white,
        },
        headerLeft:() =>{
          return (
            <TouchableOpacity style={{paddingLeft:10}} onPress={() => navigation.openDrawer()}>
              <BurgerIcon color={colors.white}/>
            </TouchableOpacity>
          );
        },
      }} />
      <Tab.Screen name="History" component={HistoryScreen}  options={{
        tabBarLabel: 'History',
        title:'History',
        tabBarLabelStyle: { color: colors.white },
        headerShown:true,
        headerStyle: {
          backgroundColor: colors.themeColor,
        },
        headerTitleStyle: {
          color: colors.white,
        },
        headerLeft:() =>{
          return (
            <TouchableOpacity style={{paddingLeft:10}} onPress={() => navigation.openDrawer()}>
              <BurgerIcon color={colors.white}/>
            </TouchableOpacity>
          );
        },
      }} />
    </Tab.Navigator>
  );
}
export default MainTabs;

const styles = StyleSheet.create({

  tabBarStyle:{
    backgroundColor:'transparent',
    position:'absolute',
    borderTopWidth:0,
    bottom:15,
    right:0,
    left:0,
    height:55,
  },

});
