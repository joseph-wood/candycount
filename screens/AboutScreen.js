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



export default class AboutScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePlayPress = () => {
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
            source={require('../assets/images/homebg.png')}
            style={{
              flex: 1,
              resizeMode,
            }}
          />
        </View>
        <View style={styles.aboutContainer}>
            <Text style={styles.aboutTitle}>About Interactive Media</Text>
            <Text style={styles.aboutText}>Interactive Media is a design agency based in Australia. We create games like CandyCount to help kids with their education. You can visit our website at www.imca.com.au!</Text>
        </View>
        <View
          style={styles.menuContainer}
        >   
            <TouchableOpacity onPress={this.handlePlayPress} style={styles.buttons}>
              <Text style={styles.menuBtn}>Back</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

AboutScreen.navigationOptions = {
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
        top: 300,
        left: 0,
        width: '100%',
        height: '100%'
      },
      aboutContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        flexWrap: 'wrap',
        top: 300,
        padding: 10,
        width: '100%'
      },
      aboutText: {
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'courgette',
        color: '#fefefe'
      },
      aboutTitle: {
        textAlign: 'center',
        fontSize: 36,
        fontFamily: 'courgette',
        color: '#fefefe'
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
