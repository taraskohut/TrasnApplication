import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CoinIcon from '../../assets/CoinIcon.tsx';
import {Divider} from 'react-native-elements';
import TermsIcon from '../../assets/TermsIcons.tsx';
import PrivacyIcon from '../../assets/PrivacyIcon.tsx';
import SupportIcon from '../../assets/SupportIcon.tsx';
import MoveIcon from '../../assets/MoveIcon.tsx';
import LogOutIcon from '../../assets/LogOutIcon.tsx';
import LightModeIcon from '../../assets/LightModeIcon.tsx';
import {useTheme} from '@react-navigation/native';
import {useThemeContext} from './ThemeContext.tsx';
import DarkModeIcon from '../../assets/DarkModeIcon.tsx';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const CustomDrawer = props => {
  const {currentTheme: currentTheme2, toggleTheme} = useThemeContext();
  console.log(currentTheme2);
  const {colors} = useTheme();
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.blocks,
        }}>
        <ImageBackground
          source={require('../../assets/basic.png')}
          style={{
            height: 150,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <View style={{marginTop: '10%'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{fontSize: 25, fontWeight: '500', color: colors.white}}>
                Ciao, Daniel!
              </Text>
              <Text style={{fontSize: 28, marginLeft: 10}}>👋</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Text style={{color: colors.white}}>Translate Basic</Text>
              <View
                style={{
                  width: 4,
                  height: 4,
                  backgroundColor: '#444853',
                  opacity: 0.8,
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                }}
              />
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <CoinIcon size={20} />
                <Text style={{fontWeight: '700', color: colors.white}}>
                  200
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={toggleTheme}
            style={{
              position: 'absolute',
              width: 60,
              height: 32,
              left: 258,
              top: '10%',
              backgroundColor: colors.themeColor,
              borderRadius: 36,
            }}>
            {currentTheme2 === 'light' ? (
              <View style={{marginTop: 5}}>
                <LightModeIcon />
              </View>
            ) : (
              <View style={{marginLeft: 35, marginTop: 5}}>
                <DarkModeIcon />
              </View>
            )}
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.drawerListWrapper}>
          <DrawerItemList {...props} />
        </View>
        <Divider style={{marginVertical: 35, marginHorizontal: 20}} />

        <View style={{marginHorizontal: 30, flexDirection: 'column', gap: 30}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <TermsIcon />
              <Text style={{fontSize: 18, color: colors.white}}>
                Terms of Service
              </Text>
            </View>
            <MoveIcon />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <PrivacyIcon />
              <Text style={{fontSize: 18, color: colors.white}}>
                Privacy Policy
              </Text>
            </View>
            <MoveIcon />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <SupportIcon />
              <Text style={{fontSize: 18, color: colors.white}}>Support</Text>
            </View>
            <MoveIcon />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{backgroundColor: colors.blocks}}
        onPress={handleGoBack}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: '10%',
            backgroundColor: '#EBF0F6',
            paddingVertical: 16,
            marginHorizontal: 20,
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 8,
          }}>
          <LogOutIcon />
          <Text style={{fontSize: 18, fontWeight: '400'}}>Log Out</Text>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerListWrapper: {
    marginTop: 45,
    paddingHorizontal: 10,
  },
});
