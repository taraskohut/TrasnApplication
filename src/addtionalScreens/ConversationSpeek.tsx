import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import EngIcon from '../../assets/EngIcon.tsx';
import ItIcons from '../../assets/ItIcons.tsx';
import SoundIcon from '../../assets/SoundIcon.tsx';
import MicroIcon from '../../assets/MicroIcon.tsx';
import MicroIcon2 from '../../assets/MicroIcon2.tsx';

const ConversationSpeek = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            marginVertical: 20,
            marginRight: 20,
            borderTopStartRadius: 16,
            borderTopEndRadius: 2,
            borderBottomStartRadius: 16,
            borderBottomEndRadius: 16,
            marginLeft: 50,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 13,
              paddingHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <EngIcon style={{marginRight: 10}} />
              <Text style={{fontSize: 16, fontWeight: 'bold', width: '80%'}}>
                I am Daniel Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </Text>
            </View>
            <View>
              <SoundIcon />
            </View>
          </View>
          <View
            style={{
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
              <Text style={{fontSize: 16, width: '80%'}}>
                Sono Daniel Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </Text>
            </View>
            <View />
          </View>
        </View>
        <View
          style={{
            borderTopStartRadius: 2,
            borderTopEndRadius: 16,
            borderBottomStartRadius: 16,
            borderBottomEndRadius: 16,
            marginLeft: 20,
            borderRadius: 5,
            marginRight: 50,
            backgroundColor: '#B9D9FF',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 13,
              paddingHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <EngIcon style={{marginRight: 10}} />
              <Text style={{fontSize: 16, fontWeight: 'bold', width: '80%'}}>
                I am Daniel Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </Text>
            </View>
            <View>
              <SoundIcon />
            </View>
          </View>

          <View
            style={{
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
              <Text style={{fontSize: 16, width: '80%'}}>
                Sono Daniel Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </Text>
            </View>
            <View />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            padding: 20,
            paddingVertical: 20,
            borderTopWidth: 1,
            borderTopColor: '#E5E6E8',
          }}>
          <View
            style={{
              backgroundColor: '#007AFD',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 16,
              borderRadius: 8,
              flexDirection: 'row',
              marginBottom: 15,
            }}>
            <MicroIcon2 />
            <Text style={{color: 'white', marginLeft: 15, fontSize: 16}}>
              Speak Now
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ConversationSpeek;
