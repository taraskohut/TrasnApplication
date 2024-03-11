import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import EngIcon from '../../assets/EngIcon.tsx';
import PenIcon from '../../assets/PenIcon.tsx';
import ItIcons from '../../assets/ItIcons.tsx';
import SoundIcon from '../../assets/SoundIcon.tsx';
import DownLoadIcon from '../../assets/DownLoadIcon.tsx';

const FromLang = () => {
  const [selectedLang, setSelectedLang] = useState('');

  return (
    <View style={{marginHorizontal: 20}}>
      <View
        style={{
          marginVertical: 20,
          backgroundColor: selectedLang === 'recent' ? '#007AFD' : 'white',
          borderRadius: 15,
        }}>
        <Text
          style={{
            paddingHorizontal: 10,
            paddingTop: 15,
            paddingBottom: 5,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Recent Used
        </Text>
        <TouchableOpacity
          onPress={() => setSelectedLang('english')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 20,
            paddingHorizontal: 10,
            backgroundColor:
              selectedLang === 'english' ? '#007AFD' : 'transparent',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <EngIcon style={{marginRight: 10}} />
            <Text style={{fontSize: 16}}>English (US)</Text>
          </View>
          <View>
            <DownLoadIcon />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedLang('italian')}
          style={{
            borderTopWidth: 1,
            borderTopColor: '#E5E6E8',
            flexDirection: 'row',
            borderBottomEndRadius: 5,
            borderBottomStartRadius: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 10,
            backgroundColor:
              selectedLang === 'italian' ? '#007AFD' : 'transparent',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <ItIcons style={{marginRight: 10}} />
            <Text style={{fontSize: 16}}>Italian</Text>
          </View>
          <View>
            <DownLoadIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedLang('german')}
          style={{
            borderTopWidth: 1,
            borderTopColor: '#E5E6E8',
            flexDirection: 'row',
            borderBottomEndRadius: 5,
            borderBottomStartRadius: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 10,
            backgroundColor:
              selectedLang === 'german' ? '#007AFD' : 'transparent',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <ItIcons style={{marginRight: 10}} />
            <Text style={{fontSize: 16}}>German</Text>
          </View>
          <View>
            <DownLoadIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedLang('english(uk)')}
          style={{
            borderTopWidth: 1,
            borderTopColor: '#E5E6E8',
            flexDirection: 'row',
            borderBottomEndRadius: 5,
            borderBottomStartRadius: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 10,
            backgroundColor:
              selectedLang === 'english(uk)' ? '#007AFD' : 'transparent',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <ItIcons style={{marginRight: 10}} />
            <Text style={{fontSize: 16}}>English(UK)</Text>
          </View>
          <View>
            <DownLoadIcon />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginVertical: 15,
          backgroundColor: selectedLang === 'all' ? '#007AFD' : 'white',
          borderRadius: 15,
        }}>
        <Text
          style={{
            paddingHorizontal: 10,
            paddingTop: 15,
            paddingBottom: 5,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          All Language
        </Text>
        <TouchableOpacity
          onPress={() => setSelectedLang('english')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 20,
            paddingHorizontal: 10,
            backgroundColor:
              selectedLang === 'english' ? '#007AFD' : 'transparent',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <EngIcon style={{marginRight: 10}} />
            <Text style={{fontSize: 16}}>English (US)</Text>
          </View>
          <View>
            <DownLoadIcon />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedLang('english(nig)')}
          style={{
            borderTopWidth: 1,
            borderTopColor: '#E5E6E8',
            flexDirection: 'row',
            borderBottomEndRadius: 5,
            borderBottomStartRadius: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 10,
            backgroundColor:
              selectedLang === 'english(nig)' ? '#007AFD' : 'transparent',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <ItIcons style={{marginRight: 10}} />
            <Text style={{fontSize: 16}}>English (Nigeria)</Text>
          </View>
          <View>
            <DownLoadIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedLang('italian')}
          style={{
            borderTopWidth: 1,
            borderTopColor: '#E5E6E8',
            flexDirection: 'row',
            borderBottomEndRadius: 5,
            borderBottomStartRadius: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 10,
            backgroundColor:
              selectedLang === 'italian' ? '#007AFD' : 'transparent',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <ItIcons style={{marginRight: 10}} />
            <Text style={{fontSize: 16}}>Italian</Text>
          </View>
          <View>
            <DownLoadIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedLang('german')}
          style={{
            borderTopWidth: 1,
            borderTopColor: '#E5E6E8',
            flexDirection: 'row',
            borderBottomEndRadius: 5,
            borderBottomStartRadius: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 10,
            backgroundColor:
              selectedLang === 'german' ? '#007AFD' : 'transparent',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <ItIcons style={{marginRight: 10}} />
            <Text style={{fontSize: 16}}>German</Text>
          </View>
          <View>
            <DownLoadIcon />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FromLang;
