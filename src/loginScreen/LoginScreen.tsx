import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AppleIcon from '../../assets/appleIcon.tsx';
import {BlurView} from '@react-native-community/blur';
import LocationIcon from '../../assets/locationIcon.tsx';
import CameraIcon from '../../assets/cameraIcon.tsx';
import LinearGradient from 'react-native-linear-gradient';
import MarkDownIcon from '../../assets/markDownIcon.tsx';
import WorldIcon from '../../assets/worldIcon.tsx';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/login-background.png')}
        style={styles.backgroundImage}>
        <View style={styles.languageContainer}>
          <View style={styles.languageButton}>
            <View style={styles.worldIcon}>
              <WorldIcon />
            </View>
            <Text style={styles.languageText}>EN</Text>
            <View style={styles.markDownIcon}>
              <MarkDownIcon />
            </View>
          </View>
        </View>
        <BlurView blurType="chromeMaterialDark" style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.titleText}>TranslateApp</Text>
          </View>
          <TouchableOpacity style={styles.appleContainer}>
            <View style={styles.appleIconContainer}>
              <AppleIcon />
            </View>
            <Text style={styles.appleText}>Sign In with Apple</Text>
          </TouchableOpacity>
        </BlurView>
        <View style={styles.footer}>
          <View style={styles.locationContainer}>
            <View style={styles.locationIconContainer}>
              <LocationIcon />
            </View>
            <Text style={styles.footerText}>Roman Italy</Text>
          </View>
          <View style={styles.cameraContainer}>
            <View style={styles.locationIconContainer}>
              <CameraIcon />
            </View>
            <Text style={styles.footerText}>Bob Smith</Text>
          </View>
        </View>
      </ImageBackground>
      <LinearGradient
        colors={['#000', 'transparent']}
        start={{x: 0, y: 1.9}}
        end={{x: 0, y: 0}}
        style={styles.gradientOverlay}
      />
    </View>
  );
};

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  languageContainer: {
    marginTop: '15%',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'flex-end',
    width: '100%',
  },
  languageButton: {
    marginTop: '15%',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  languageText: {
    color: '#fff',
  },
  worldIcon: {
    marginRight: 5,
  },
  markDownIcon: {
    marginTop: 3,
    marginLeft: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    paddingVertical: 40,
    borderRadius: 10,
    marginTop: '85%',
    height: '30%',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 28,
  },
  titleText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 32,
  },
  appleContainer: {
    backgroundColor: '#000000',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 15,
    width: '80%',
    marginTop: '5%',
  },
  appleIconContainer: {
    marginRight: 10,
  },
  appleText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 20,
  },
  footer: {
    flexDirection: 'row',
    marginTop: '10%',
    marginHorizontal: '5%',
  },
  footerText: {
    color: '#FFFFFF',
  },
  locationContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  locationIconContainer: {
    marginRight: '4%',
  },
  cameraContainer: {
    flexDirection: 'row',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
});

export default LoginScreen;
