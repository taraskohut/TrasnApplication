import React, {useRef, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import PlusIcon from '../../assets/PlusIcon.tsx';
import EngIcon from '../../assets/EngIcon.tsx';
import ItIcons from '../../assets/ItIcons.tsx';
import PenIcon from '../../assets/PenIcon.tsx';
import SoundIcon from '../../assets/SoundIcon.tsx';
import GreetingIcon from '../../assets/GreetingIcon.tsx';
import OpenArrow from '../../assets/OpenArrow.tsx';
import FoodIcon from '../../assets/FoodIcon.tsx';
import TravelIcon from '../../assets/TravelIcon.tsx';
import TechnologyIcon from '../../assets/TechnologyIcon.tsx';
import HeartIcon from '../../assets/HeartIcon.tsx';
import BottomSheet, {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import CustomPhrase from '../addtionalScreens/CustomPhrase.tsx';
import {useTheme} from '@react-navigation/native';
import {useThemeContext} from '../addtionalScreens/ThemeContext.tsx';

const PhrasesScreen = () => {
  const {phrase, setPhrase, fetchData} = useThemeContext();
  console.log('hehe', phrase);
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const {colors} = useTheme();

  const [phrases, setPhrases, inputPhrase] = useState([
    {
      id: 0,
      phraseEng: "I'm Daniel",
      phraseIt: 'la sono Daniel',
    },
    {
      id: 1,
      phraseEng: "I'm Daniel",
      phraseIt: 'la sono Daniel',
    },
    {
      id: 2,
      phraseEng: "I'm Daniel",
      phraseIt: 'la sono Daniel',
    },
  ]);

  return (
    <BottomSheetModalProvider>
      <View>
        <ScrollView>
          <View
            style={{paddingHorizontal: 20, backgroundColor: colors.themeColor}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: colors.white}}>
                My Phrases
              </Text>
              <TouchableOpacity onPress={handleOpenPress}>
                <View
                  style={{
                    backgroundColor: 'rgba(0, 122, 253, 0.1)',
                    paddingVertical: 6,
                    paddingHorizontal: 10,
                    borderRadius: 4,
                  }}>
                  <Text style={{color: '#007AFD'}}>
                    <PlusIcon />
                    Add New
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView />
            {phrase.map((value, index) => (
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
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <EngIcon style={{marginRight: 10}} />
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: colors.white,
                      }}>
                      {value.engPhrase}
                    </Text>
                  </View>
                  <View>
                    <PenIcon />
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
                    <Text style={{fontSize: 20, color: colors.phraseText}}>
                      {value.itPhrase}
                    </Text>
                  </View>
                  <View>
                    <SoundIcon />
                  </View>
                </View>
              </View>
            ))}
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
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <EngIcon style={{marginRight: 10}} />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    I am Daniel
                  </Text>
                </View>
                <View>
                  <PenIcon />
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
                  <Text style={{fontSize: 20, color: colors.phraseText}}>
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
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <EngIcon style={{marginRight: 10}} />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    I am Daniel
                  </Text>
                </View>
                <View>
                  <PenIcon />
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
                  <Text style={{fontSize: 20, color: colors.phraseText}}>
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
                backgroundColor: colors.blocks,
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
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    I am Daniel
                  </Text>
                </View>
                <View>
                  <PenIcon />
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
                  <Text style={{fontSize: 20, color: colors.phraseText}}>
                    lo sono Daniel
                  </Text>
                </View>
                <View>
                  <SoundIcon />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{backgroundColor: colors.categBack, paddingHorizontal: 20}}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: colors.white}}>
              Categories
            </Text>
            <View style={{marginTop: 20}}>
              <View
                style={{
                  backgroundColor: '#007AFD',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  borderTopStartRadius: 8,
                  borderTopEndRadius: 8,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <GreetingIcon />
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                    Greeting
                  </Text>
                </View>
                <View>
                  <OpenArrow borderColor={'white'} />
                </View>
              </View>
              <View
                style={{
                  backgroundColor: colors.greetBack,
                }}>
                <View
                  style={{
                    marginVertical: 15,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    marginHorizontal: 10,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
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
                          fontSize: 20,
                          fontWeight: 'bold',
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
                      <Text style={{fontSize: 20, color: colors.phraseText}}>
                        lo sono Daniel
                      </Text>
                    </View>
                    <View>
                      <SoundIcon />
                    </View>
                  </View>
                </View>
              </View>
              <View style={{backgroundColor: colors.greetBack}}>
                <View
                  style={{
                    marginVertical: 15,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    marginHorizontal: 10,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
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
                          fontSize: 20,
                          fontWeight: 'bold',
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
                      <Text style={{fontSize: 20, color: colors.phraseText}}>
                        lo sono Daniel
                      </Text>
                    </View>
                    <View>
                      <SoundIcon />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <View
                style={{
                  backgroundColor: '#FFF5EF',
                  // opacity: 0.3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  borderRadius: 8,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FoodIcon />
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>Food</Text>
                </View>
                <View>
                  <OpenArrow borderColor={'#FE9F62'} />
                </View>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <View
                style={{
                  backgroundColor: '#F4F4FF',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  borderRadius: 8,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TravelIcon />
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>Travel</Text>
                </View>
                <View>
                  <OpenArrow borderColor={'#9492FF'} />
                </View>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <View
                style={{
                  backgroundColor: '#F0FBF7',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  borderRadius: 8,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TechnologyIcon />
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Technology
                  </Text>
                </View>
                <View>
                  <OpenArrow borderColor={'#69DAAB'} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <CustomPhrase bottomSheetRef={bottomSheetRef} />
    </BottomSheetModalProvider>
  );
};

export default PhrasesScreen;
