import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MenuScreen from './MenuScreen.tsx';
import PlansScreen from './PlansScreen.tsx';
import EngIcon from '../../assets/EngIcon.tsx';
import PenIcon from '../../assets/PenIcon.tsx';
import ItIcons from '../../assets/ItIcons.tsx';
import SoundIcon from '../../assets/SoundIcon.tsx';
import {useTheme} from '@react-navigation/native';
import HeartIcon from '../../assets/HeartIcon.tsx';

const HistoryFavourite = () => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: colors.themeColor,
        flex: 1,
      }}>
      <Text
        style={{
          marginTop: 20,
          fontSize: 20,
          fontWeight: 'bold',
          color: colors.white,
        }}>
        Favourites
      </Text>
      <ScrollView>
        <View
          style={{
            marginVertical: 15,
            backgroundColor: 'white',
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 13,
              paddingHorizontal: 10,
              backgroundColor: colors.blocks,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <EngIcon style={{marginRight: 10}} />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  width: '85%',
                  color: colors.white,
                }}>
                I am Daniel
              </Text>
            </View>
            <View>
              <HeartIcon />
            </View>
          </View>

          <View
            style={{
              backgroundColor: colors.phraseTranslate,
              borderTopWidth: 1,
              borderTopColor: '#E5E6E8',
              flexDirection: 'row',
              borderBottomEndRadius: 5,
              borderBottomStartRadius: 5,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 13,
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <ItIcons style={{marginRight: 10}} />
              <Text
                style={{fontSize: 16, width: '85%', color: colors.phraseText}}>
                lo sono Daniel
              </Text>
            </View>
            <View>
              <SoundIcon />
            </View>
          </View>
        </View>
        <View
          style={{
            marginVertical: 15,
            backgroundColor: 'white',
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 13,
              paddingHorizontal: 10,
              backgroundColor: colors.blocks,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <EngIcon style={{marginRight: 10}} />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  width: '85%',
                  color: colors.white,
                }}>
                I am Daniel
              </Text>
            </View>
            <View>
              <HeartIcon />
            </View>
          </View>

          <View
            style={{
              backgroundColor: colors.phraseTranslate,
              borderTopWidth: 1,
              borderTopColor: '#E5E6E8',
              flexDirection: 'row',
              borderBottomEndRadius: 5,
              borderBottomStartRadius: 5,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 13,
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <ItIcons style={{marginRight: 10}} />
              <Text
                style={{fontSize: 16, width: '85%', color: colors.phraseText}}>
                lo sono Daniel
              </Text>
            </View>
            <View>
              <SoundIcon />
            </View>
          </View>
        </View>
        <View
          style={{
            marginVertical: 15,
            backgroundColor: 'white',
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 13,
              paddingHorizontal: 10,
              backgroundColor: colors.blocks,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <EngIcon style={{marginRight: 10}} />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  width: '85%',
                  color: colors.white,
                }}>
                I am Daniel
              </Text>
            </View>
            <View>
              <HeartIcon />
            </View>
          </View>

          <View
            style={{
              backgroundColor: colors.phraseTranslate,
              borderTopWidth: 1,
              borderTopColor: '#E5E6E8',
              flexDirection: 'row',
              borderBottomEndRadius: 5,
              borderBottomStartRadius: 5,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 13,
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <ItIcons style={{marginRight: 10}} />
              <Text
                style={{fontSize: 16, width: '85%', color: colors.phraseText}}>
                lo sono Daniel
              </Text>
            </View>
            <View>
              <SoundIcon />
            </View>
          </View>
        </View>

        <View
          style={{
            marginVertical: 15,
            backgroundColor: 'white',
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 13,
              paddingHorizontal: 10,
              backgroundColor: colors.blocks,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <EngIcon style={{marginRight: 10}} />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  width: '85%',
                  color: colors.white,
                }}>
                I am Daniel
              </Text>
            </View>
            <TouchableOpacity>
              <View>
                <HeartIcon />
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: colors.phraseTranslate,
              borderTopWidth: 1,
              borderTopColor: '#E5E6E8',
              flexDirection: 'row',
              borderBottomEndRadius: 5,
              borderBottomStartRadius: 5,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 13,
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <ItIcons style={{marginRight: 10}} />
              <Text
                style={{fontSize: 16, width: '85%', color: colors.phraseText}}>
                lo sono Daniel
              </Text>
            </View>
            <View>
              <SoundIcon />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryFavourite;
