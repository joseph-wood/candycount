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

  handleAboutPress = () => {
    this.props.navigation.navigate("Home");
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
            source={require('../assets/images/winbg.png')}
            style={{
              flex: 1,
              resizeMode,
            }}
          />
        </View>
        <View
          style={styles.menuContainer}
        >
            <TouchableOpacity onPress={this.handleAboutPress} style={styles.buttons}>
              <Text style={styles.menuBtn}>Menu</Text>
            </TouchableOpacity>
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
    top: 180,
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

  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  buttons: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F694C1',
    backgroundColor: '#F694C1',
    width: '80%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 50
  },
  menuBtn: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'courgette',
  }
});
