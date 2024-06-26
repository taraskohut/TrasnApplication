import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import CoinIcon from '../../assets/CoinIcon.tsx';
import ActiveIcon from '../../assets/ActiveIcon.jsx.tsx';
import {Divider} from 'react-native-elements';
import CheckIcon from '../../assets/CheckIcon.tsx';
import LinearGradient from 'react-native-linear-gradient';

const PlansScreen = () => {
  const {colors} = useTheme();
  console.log('colors', colors);
  const navigation = useNavigation();
  const plans = [
    {
      open: true,
      name: 'Personal Translator',
      description: 'Translate Basic',
      price: '$2.99/month',
      color: ['#ACB4C0', '#F3F3F3'],
      borderColor: 'grey',
    },
    {
      open: false,
      name: 'Regular Translator',
      description: 'Translate Basic',
      price: '$3.99/month',
      color: ['#FFFDEB', '#E9A32B'],
      borderColor: '#EC810A',
    },
    {
      open: false,
      name: 'Premium Translator',
      description: 'Translate Basic',
      price: '$4.99/month',
      color: ['#98C7E0', '#498EB4'],
      borderColor: '#1175AE',
    },
  ];

  const [onOpen, setOnOpen] = useState(plans);
  console.log(onOpen, '1111');
  const openTranslators = index => {
    setOnOpen(prevPlans => {
      const updatedPlans = [...prevPlans];
      updatedPlans[index].open = !updatedPlans[index].open;
      return updatedPlans;
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <SafeAreaView
        style={{...styles.container, backgroundColor: colors.themeColor}}>
        <TouchableOpacity onPress={handleGoBack} />
        <ScrollView>
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#007AFD',
              borderWidth: 10,
              borderColor: '#007AFD',
              width: '100%',
              paddingBottom: 30,
              borderBottomEndRadius: 40,
              borderBottomStartRadius: 40,
            }}>
            <Text style={{...styles.header, color: 'white'}}>Buy Credits</Text>
          </View>
          <View style={{paddingHorizontal: 20}}>
            <View style={styles.creditBlock}>
              <View style={{...styles.block, backgroundColor: colors.blocks}}>
                <CoinIcon size={28} />
                <Text style={{...styles.amount, color: colors.white}}>100</Text>
                <Text style={{...styles.price, color: colors.white}}>
                  $2.00
                </Text>
              </View>
              <View style={{...styles.block, backgroundColor: colors.blocks}}>
                <CoinIcon size={28} />
                <Text style={{...styles.amount, color: colors.white}}>500</Text>
                <Text style={{...styles.price, color: colors.white}}>
                  $5.00
                </Text>
              </View>
              <View style={{...styles.block, backgroundColor: colors.blocks}}>
                <CoinIcon size={28} />
                <Text style={{...styles.amount, color: colors.white}}>
                  2500
                </Text>
                <Text style={{...styles.price, color: colors.white}}>
                  $10.00
                </Text>
              </View>
            </View>
            <View
              style={{
                ...styles.translateContainer,
                backgroundColor: colors.blocks,
              }}>
              <View style={styles.row}>
                <View style={styles.freeAndText}>
                  <View style={styles.free}>
                    <Text style={styles.freeText}>FREE</Text>
                  </View>
                  <Text style={{...styles.translateBasic, color: colors.white}}>
                    Translate Basic
                  </Text>
                </View>
                <ActiveIcon />
              </View>
              <Divider style={styles.divider} />
              <View style={styles.checklist}>
                <Text style={{...styles.checklistItem, color: colors.white}}>
                  <CheckIcon color={colors.icon} />
                  Ad Supported
                </Text>
                <Text style={{...styles.checklistItem, color: colors.white}}>
                  <CheckIcon color={colors.icon} />
                  Text Translation Only
                </Text>
                <Text style={{...styles.checklistItem, color: colors.white}}>
                  <CheckIcon color={colors.icon} />
                  Translation Model 1.0
                </Text>
              </View>
            </View>
            {onOpen.map((value, index) => (
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: value.borderColor,
                  marginTop: 20,
                  backgroundColor: colors.block,
                }}>
                <TouchableOpacity onPress={() => openTranslators(index)}>
                  <LinearGradient colors={value.color}>
                    <View style={styles.PersonTransBlock}>
                      <Text style={styles.translateBasic}>{value.name}</Text>
                      <Text style={styles.priceSum}>{value.price}</Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
                <Divider />

                {value.open && (
                  <>
                    <View style={styles.checklist}>
                      <Text
                        style={{...styles.checklistItem, color: colors.white}}>
                        <CheckIcon color={colors.icon} />
                        Ad Supported
                      </Text>
                      <Text
                        style={{...styles.checklistItem, color: colors.white}}>
                        <CheckIcon color={colors.icon} />
                        Text Translation Only
                      </Text>
                      <Text
                        style={{...styles.checklistItem, color: colors.white}}>
                        <CheckIcon color={colors.icon} />
                        Translation Model 1.0
                      </Text>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: '#007AFD',
                        marginHorizontal: 30,
                        paddingVertical: 19,
                        borderRadius: 8,
                        marginBottom: 15,
                      }}>
                      <TouchableOpacity>
                        <Text style={{color: 'white'}}>
                          Update to this Plan
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  priceSum: {
    fontWeight: 'bold',
  },
  translateContainerPaid: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
  },
  PersonTransBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  container: {
    flex: 1,

    // backgroundColor: colors.gray,
  },
  header: {
    fontSize: 20,
  },
  creditBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  block: {
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    width: 107,
    height: 107,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    fontWeight: 'bold',
  },
  price: {},
  translateContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    paddingLeft: 30,
  },
  free: {
    backgroundColor: '#EFF0F3',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  freeText: {
    fontSize: 12,
  },
  freeAndText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  translateBasic: {
    fontSize: 20,
    marginLeft: 10,
  },
  divider: {
    backgroundColor: 'black',
    marginTop: 10,
    marginBottom: 10,
  },
  checklist: {
    paddingLeft: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  checklistItem: {
    marginBottom: 10,
    fontSize: 16,
    color: '#1A1E2B',
    paddingLeft: 8,
  },
});

export default PlansScreen;
