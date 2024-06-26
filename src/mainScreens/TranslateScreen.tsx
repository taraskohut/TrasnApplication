import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import ArrowIcon from '../../assets/ArrowIcon.tsx';
import EngIcon from '../../assets/EngIcon.tsx';
import ItIcons from '../../assets/ItIcons.tsx';
import {Divider} from 'react-native-elements';
import HeartIcon from '../../assets/HeartIcon.tsx';
import PhotoIcon from '../../assets/PhotoIcon.tsx';
import DialogeIcon from '../../assets/DialogeIcon.tsx';
import CopyIcon from '../../assets/CopyIcon.tsx';
import FlagIcon from '../../assets/FlagIcon.tsx';
import SoundIcon from '../../assets/SoundIcon.tsx';
import {useNavigation, useTheme} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ReportPopUp from '../addtionalScreens/ReportPopUp.tsx';

const TranslateScreen = () => {
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [text, setText] = useState('');
  const bottomSheetRef = useRef<BottomSheet>(null);
  const toggleLanguages = () => {
    setSelectedLanguage(selectedLanguage === 'English' ? 'Italian' : 'English');
  };
  const navigation = useNavigation();
  const {colors} = useTheme();
  return (
    <BottomSheetModalProvider style={{flex: 1}}>
      <View
        style={{...styles.mainContainer, backgroundColor: colors.themeColor}}>
        <Text>Translate Screen</Text>
        <View style={styles.translateContainer}>
          <View
            style={{
              ...styles.languageBlock,
              backgroundColor: colors.blocks,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {selectedLanguage === 'English' ? (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Language Selection')}>
                  <EngIcon style={{marginRight: 8}} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Language Selection')}>
                  <ItIcons style={{marginRight: 8}} />
                </TouchableOpacity>
              )}
              {/*<EngIcon style={{marginRight: 8}} />*/}
              <Text style={{color: colors.white}}>{selectedLanguage}</Text>
            </View>
            <TouchableOpacity onPress={toggleLanguages}>
              <ArrowIcon />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {selectedLanguage === 'English' ? (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Language Selection')}>
                  <ItIcons style={{marginRight: 8}} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Language Selection')}>
                  <EngIcon style={{marginRight: 8}} />
                </TouchableOpacity>
              )}
              {/*<ItIcons style={{marginRight: 8}} />*/}
              <Text style={{color: colors.white}}>
                {selectedLanguage === 'English' ? 'Italian' : 'English'}
              </Text>
            </View>
          </View>
          <View>
            <Divider style={styles.divider} />
          </View>
          <View style={{...styles.textBlock, backgroundColor: colors.blocks}}>
            <Text style={{color: colors.white, marginBottom: 10}}>
              {selectedLanguage}
            </Text>
            <TextInput
              style={{...styles.input, color: colors.white}}
              multiline={true}
              placeholderTextColor={colors.white}
              placeholder="Enter Your Text..."
              onChangeText={setText}
            />
          </View>
          <Divider style={styles.divider} />
          <View
            style={{
              ...styles.translationBlock,
              backgroundColor: colors.itBlock,
            }}>
            <View style={styles.row}>
              <Text style={{color: colors.white}}>
                {selectedLanguage === 'English' ? 'Italian' : 'English'}
              </Text>
              <HeartIcon />
            </View>
            <View style={{...styles.miniBlock, backgroundColor: colors.blocks}}>
              <View style={{flexDirection: 'row'}}>
                <PhotoIcon style={{marginRight: 20}} />
                <TouchableOpacity
                  onPress={() => navigation.navigate('Conversationn')}>
                  <DialogeIcon />
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row'}}>
                <CopyIcon style={{marginRight: 20}} />
                <TouchableOpacity onPress={handleOpenPress}>
                  <FlagIcon style={{marginRight: 20}} />
                </TouchableOpacity>
                <SoundIcon />
              </View>
            </View>
          </View>
        </View>
      </View>
      <ReportPopUp bottomSheetRef={bottomSheetRef} />
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  miniBlock: {
    height: 45,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  translationBlock: {
    backgroundColor: '#D8E3F0',
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 0.8,
  },
  input: {
    fontSize: 24,
    color: '#1A1E2B',
    height: '80%',
  },
  textBlock: {
    paddingHorizontal: 30,
    paddingTop: 10,
    flex: 0.6,
  },
  divider: {
    backgroundColor: 'black',
  },
  mainContainer: {
    flex: 1,
    paddingBottom: '20%',
    paddingHorizontal: 10,
  },
  languageBlock: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
  translateContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 16,
  },
});

export default TranslateScreen;
