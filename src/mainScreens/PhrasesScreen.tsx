import React from 'react';
import {Text, View} from 'react-native';
import PlusIcon from '../../assets/PlusIcon.tsx';

const PhrasesScreen = () => {
  return (
    <View style={{marginHorizontal: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>My Phrases</Text>

        <View style={{backgroundColor: '#007AFD', opacity: 0.3}}>
          <Text style={{color: '#007AFD'}}>
            <PlusIcon />
            Add New
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PhrasesScreen;
