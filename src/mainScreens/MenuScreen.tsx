import * as React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import MainTabs from './MainTabs.tsx';
import PlansScreen from './PlansScreen.tsx';
import TranslateScreen from './TranslateScreen.tsx';

const Drawer = createDrawerNavigator();

const MenuScreen = () => {
  const DrawerHeaderContent = props => {
    return (
      <DrawerContentScrollView contentContainerStyle={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#4f4f4f',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            top: -5,
          }}>
          <Text style={{color: '#fff'}}>Test</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
        },
      }}
      drawerContent={DrawerHeaderContent}>
      <Drawer.Screen
        name="Plans"
        component={MainTabs}
        options={{headerShown: true, drawerLabel: 'Plans'}}
      />
      <Drawer.Screen name="Translate" component={TranslateScreen} />
    </Drawer.Navigator>
  );
};
export default MenuScreen;
