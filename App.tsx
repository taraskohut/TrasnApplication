import React, {FC} from 'react';
import MainContainer from './src/mainContainer/MainContainer.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {ThemeProvider} from './src/addtionalScreens/ThemeContext.tsx';
import Colors from './src/Themes/Colors.tsx';
const App: FC = (): React.JSX.Element => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <BottomSheetModalProvider>
            <MainContainer />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
