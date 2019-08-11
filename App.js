import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/logo.png'),
      require('./assets/images/icypoles/icypole-raspberry.png'),
      require('./assets/images/icypoles/icypole-lemon.png'),
      require('../assets/images/icypoles/icypole-lime.png'),
      require('../assets/images/icypoles/icypole-lemonade.png'),
      require('../assets/images/icypoles/icypole-grape.png'),
      require('./assets/images/candiess/candy-raspberry.png'),
      require('./assets/images/candiess/candy-lemon.png'),
      require('../assets/images/candiess/candy-lime.png'),
      require('../assets/images/candiess/candy-lemonade.png'),
      require('../assets/images/candiess/candy-grape.png'),
      require('./assets/images/lollipops/lollipop-raspberry.png'),
      require('./assets/images/lollipops/lollipop-lemon.png'),
      require('../assets/images/lollipops/lollipop-lime.png'),
      require('../assets/images/lollipops/lollipop-lemonade.png'),
      require('../assets/images/lollipops/lollipop-grape.png')
    ]),
    Font.loadAsync({
      ...Ionicons.font,

      'courgette': require('./assets/fonts/Courgette-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
