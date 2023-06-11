import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import FloatingButton from './src/components/FloatingButton';
import {SheetProvider, SheetManager} from 'react-native-actions-sheet';
import './src/screens/sheet';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'white',
  };

  return (
    <SheetProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          // contentInsetAdjustmentBehavior="automatic"
          nestedScrollEnabled
          style={{
            flex: 1,
            backgroundColor: 'white',
          }}>
          <HomeScreen />
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 30,
            right: 20,
          }}>
          <FloatingButton
            onPress={() => {
              console.log('pressed');
              SheetManager.show('add-new-expense');
            }}
          />
        </View>
      </SafeAreaView>
    </SheetProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
