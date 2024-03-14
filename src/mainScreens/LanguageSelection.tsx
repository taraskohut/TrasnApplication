import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MenuScreen from './MenuScreen.tsx';
import PlansScreen from './PlansScreen.tsx';
import HistoryFavourite from '../addtionalScreens/HistoryFavourite.tsx';
import HistoryHistory from '../addtionalScreens/HistoryHIstory.tsx';
import FromLang from '../addtionalScreens/FromLang.tsx';
import ToLang from '../addtionalScreens/ToLang.tsx';
import {useTheme} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const LanguageSelection = ({currentTheme, handleToggleTheme}) => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator>
      <Tab.Screen name="From" component={FromLang}>
        {/*{props => (*/}
        {/*  <FromLang*/}
        {/*    {...props}*/}
        {/*    currentTheme={currentTheme}*/}
        {/*    handleToggleTheme={handleToggleTheme}*/}
        {/*  />*/}
        {/*)}*/}
      </Tab.Screen>
      <Tab.Screen name="To">
        {props => (
          <FromLang
            {...props}
            currentTheme={currentTheme}
            handleToggleTheme={handleToggleTheme}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default LanguageSelection;
