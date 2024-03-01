import React, {FC} from 'react';
import MainContainer from './src/mainContainer/MainContainer.tsx';
import {NavigationContainer} from '@react-navigation/native';

const App: FC = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <MainContainer />
    </NavigationContainer>
  );
};

export default App;
