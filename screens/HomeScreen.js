import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';



export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePlayPress = () => {
    this.props.navigation.navigate("Game");
  };

  render() {
    const resizeMode = 'repeat';
    return (
      <View style={styles.container}>
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'

        }}>
          <Image
            source={require('../assets/images/homebg.png')}
            style={{
              flex: 1,
              resizeMode,
              opacity: 0.8

            }}
          />
        </View>
        <View
          style={styles.menuContainer}
        >
          <View style={styles.welcomeContainer}>
            {/* <Image
              source={require('../assets/images/logo.png')}
              style={styles.welcomeImage}
            /> */}
          </View>
          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this.handlePlayPress} style={styles.buttons}>
              <Image
                source={require('../assets/images/play.png')}
                style={styles.welcomeImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F694C1',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(255,255,255,255.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -50
  },
  welcomeImage: {
    width: 256,
    height: 256,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.85)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  buttons: {
    marginTop: 300,
    paddingVertical: 50,
  },
  playText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 50,
    color: '#fff',
  },
});
