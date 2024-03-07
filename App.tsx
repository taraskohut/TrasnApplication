import React, {FC} from 'react';
import MainContainer from './src/mainContainer/MainContainer.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: FC = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <MainContainer />
    </SafeAreaProvider>
  );
};

export default App;
