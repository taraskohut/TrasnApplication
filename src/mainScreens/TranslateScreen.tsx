import React, {useState} from 'react';
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

const TranslateScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [text, setText] = useState('');

  const toggleLanguages = () => {
    setSelectedLanguage(selectedLanguage === 'English' ? 'Italian' : 'English');
  };

  return (
    <View style={styles.mainContainer}>
      <Text>Translate Screen</Text>
      <View style={styles.translateContainer}>
        <View style={styles.languageBlock}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {selectedLanguage === 'English' ? (
              <EngIcon style={{marginRight: 8}} />
            ) : (
              <ItIcons style={{marginRight: 8}} />
            )}
            {/*<EngIcon style={{marginRight: 8}} />*/}
            <Text>{selectedLanguage}</Text>
          </View>
          <TouchableOpacity onPress={toggleLanguages}>
            <View>
              <ArrowIcon />
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {selectedLanguage === 'English' ? (
              <ItIcons style={{marginRight: 8}} />
            ) : (
              <EngIcon style={{marginRight: 8}} />
            )}
            {/*<ItIcons style={{marginRight: 8}} />*/}
            <Text>
              {selectedLanguage === 'English' ? 'Italian' : 'English'}
            </Text>
          </View>
        </View>
        <View>
          <Divider style={styles.divider} />
        </View>
        <View style={[styles.textBlock, {flex: 0.8}]}>
          <Text style={{color: '#1A1E2B', marginBottom: 10}}>
            {selectedLanguage}
          </Text>
          <TextInput
            style={styles.input}
            multiline={true}
            placeholder="Enter Your Text..."
            onChangeText={setText}
          />
        </View>
        <Divider style={styles.divider} />
        <View style={[styles.translationBlock, {flex: 0.8}]}>
          <View style={styles.row}>
            <Text>
              {selectedLanguage === 'English' ? 'Italian' : 'English'}
            </Text>
            <HeartIcon />
          </View>
          <View style={styles.miniBlock}>
            <View style={{flexDirection: 'row'}}>
              <PhotoIcon style={{marginRight: 20}} />
              <DialogeIcon />
            </View>
            <View style={{flexDirection: 'row'}}>
              <CopyIcon style={{marginRight: 20}} />
              <FlagIcon style={{marginRight: 20}} />
              <SoundIcon />
            </View>
          </View>
        </View>
      </View>
    </View>
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
  },
  input: {
    fontSize: 24,
    color: '#1A1E2B',
    height: '80%',
  },
  textBlock: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  divider: {
    backgroundColor: 'black',
  },
  mainContainer: {
    flex: 0.9,
    marginHorizontal: 10,
  },
  languageBlock: {
    marginHorizontal: 30,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  translateContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 16,
  },
});

export default TranslateScreen;
