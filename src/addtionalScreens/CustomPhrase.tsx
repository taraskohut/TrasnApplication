import BottomSheet, {
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useCallback, useMemo, useRef} from 'react';
import ItIcons from '../../assets/ItIcons.tsx';
import EngIcon from '../../assets/EngIcon.tsx';
import SoundIcon from '../../assets/SoundIcon.tsx';
import MicroIcon2 from '../../assets/MicroIcon2.tsx';

const CustomPhrase = ({bottomSheetRef}) => {
  const snapPoints = useMemo(() => ['80%'], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        style={{color: 'rgba(1, 1, 1, 1)'}}
        {...props}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      backgroundStyle={{backgroundColor: '#EBF0F6'}}
      backdropComponent={renderBackdrop}
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={true}>
      <View>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Add Custom Phrase
        </Text>
        <View
          style={{
            flexDirection: 'column',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <EngIcon />
            <Text style={{marginLeft: 10, fontSize: 16}}>English</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 10,
              borderRadius: 8,
              paddingHorizontal: 10,
            }}>
            <TextInput
              style={{
                fontSize: 16,
                color: '#1A1E2B',
                height: 80,
                borderRadius: 8,
              }}
              multiline={true}
              placeholder={'Enter your text...'}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginHorizontal: 20,
            marginTop: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <ItIcons />
            <Text style={{marginLeft: 10, fontSize: 16}}>Italian</Text>
          </View>
          <View
            style={{
              backgroundColor: '#F2F4F9',
              marginTop: 10,
              borderRadius: 8,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: '#D8E3F0',
            }}>
            <Text
              style={{
                fontSize: 16,

                height: 80,
                borderRadius: 8,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 15,
              paddingVertical: 15,
              borderRadius: 70,
            }}>
            <SoundIcon color={'grey'} width={25} height={25} />
          </View>
          <View
            style={{
              marginLeft: 30,
              backgroundColor: 'white',
              padding: 15,
              paddingVertical: 15,
              borderRadius: 60,
            }}>
            <MicroIcon2 color={'grey'} width={25} height={25} />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingBottom: 100,
          paddingTop: 10,
          marginTop: 35,
        }}>
        <TouchableOpacity>
          <View style={{backgroundColor: '#CCE4FF', borderRadius: 8}}>
            <Text
              style={{
                color: '#007AFD',
                paddingVertical: 16,
                paddingHorizontal: 40,
              }}>
              Cancel
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{backgroundColor: '#007AFD', borderRadius: 8}}>
            <Text
              style={{
                color: 'white',
                paddingVertical: 16,
                paddingHorizontal: 65,
              }}>
              Add Phrase
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

export default CustomPhrase;
