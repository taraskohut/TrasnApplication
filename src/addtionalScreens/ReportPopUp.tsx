import {
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Text, TextInput, TouchableOpacity, View, Modal} from 'react-native';
import {useMemo, useRef, useCallback, useState} from 'react';
import BottomSheet, {BottomSheetModal} from '@gorhom/bottom-sheet';
import ItIcons from '../../assets/ItIcons.tsx';
import ErrorIcon from '../../assets/ErrorIcon.tsx';

const ReportPopUp = ({bottomSheetRef}) => {
  const handleClosePress = () => bottomSheetRef.current?.close();
  const [openModal, setOpenModal] = useState(false);
  const handleSubmit = () => {
    setOpenModal(true);
  };
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
  console.log(bottomSheetRef);
  const snapPoints = useMemo(() => ['65%'], []);

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
          Report Inaccuracy
        </Text>
        <View
          style={{flexDirection: 'row', width: '85%', marginHorizontal: 20}}>
          <ItIcons />
          <Text style={{marginLeft: 10, fontSize: 16}}>
            “Ciao! ll mino nome e Dainel. E un piacere conoscerti!?
          </Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={{fontSize: 20, marginVertical: 20, fontWeight: 'bold'}}>
            What went wrong?
          </Text>
          <TextInput
            style={{
              backgroundColor: 'white',
              fontSize: 16,
              color: '#1A1E2B',
              height: '50%',
              paddingHorizontal: 10,
              borderRadius: 8,
            }}
            multiline={true}
            placeholder={'Enter your text...'}
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingBottom: 100,
            paddingTop: 10,
            marginTop: -50,
          }}>
          <TouchableOpacity onPress={handleClosePress}>
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
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <View style={{backgroundColor: '#007AFD', borderRadius: 8}}>
              <Text
                style={{
                  color: 'white',
                  paddingVertical: 16,
                  paddingHorizontal: 80,
                }}>
                Sumbit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={openModal} animationType="fade" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              paddingVertical: 50,
              borderRadius: 16,
              alignItems: 'center',
            }}>
            <View style={{marginBottom: 20}}>
              <ErrorIcon />
            </View>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
              Report Error!
            </Text>
            <Text>Oops, something went wrong. Please try again.</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => setOpenModal(false)}
                style={{
                  marginTop: 20,
                  backgroundColor: '#CCE4FF',
                  borderRadius: 8,
                  paddingVertical: 12,
                  paddingHorizontal: 20,
                }}>
                <Text style={{color: 'white', fontSize: 16, color: '#007AFD'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: '#007AFD',
                  borderRadius: 8,
                  paddingVertical: 12,
                  paddingHorizontal: 20,
                  marginLeft: 20,
                }}>
                <Text style={{color: 'white', fontSize: 16}}>Retry</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </BottomSheet>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   containerHeadline: {
//     fontSize: 24,
//     fontWeight: '600',
//     padding: 20,
//   },
// });
export default ReportPopUp;
