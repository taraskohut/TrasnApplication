import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import EngIcon from '../../assets/EngIcon.tsx';
import DownLoadIcon from '../../assets/DownLoadIcon.tsx';
import ItIcons from '../../assets/ItIcons.tsx';
import {useTheme} from '@react-navigation/native';

const ToLang = () => {
  const {colors} = useTheme();
  const [selectedLang, setSelectedLang] = useState('');
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.themeColor,
      }}>
      <View
        style={{
          marginVertical: 20,
          backgroundColor: colors.blocks,
          borderRadius: 15,
        }}>
        <Text
          style={{
            color: colors.white,
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
            <Text style={{fontSize: 16, color: colors.white}}>
              English (US)
            </Text>
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
            <Text style={{fontSize: 16, color: colors.white}}>Italian</Text>
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
            <Text style={{fontSize: 16, color: colors.white}}>German</Text>
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
            <Text style={{fontSize: 16, color: colors.white}}>English(UK)</Text>
          </View>
          <View>
            <DownLoadIcon />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginVertical: 15,
          backgroundColor: colors.blocks,
          borderRadius: 15,
        }}>
        <Text
          style={{
            paddingHorizontal: 10,
            paddingTop: 15,
            paddingBottom: 5,
            fontSize: 15,
            fontWeight: 'bold',
            color: colors.white,
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
            <Text style={{fontSize: 16, color: colors.white}}>
              English (US)
            </Text>
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
            <Text style={{fontSize: 16, color: colors.white}}>
              English (Nigeria)
            </Text>
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
            <Text style={{fontSize: 16, color: colors.white}}>Italian</Text>
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
            <Text style={{fontSize: 16, color: colors.white}}>German</Text>
          </View>
          <View>
            <DownLoadIcon />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ToLang;
