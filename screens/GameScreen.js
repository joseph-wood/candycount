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
    TextInput,
    ListView
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class GameScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            success: false,
            fail: false,
            levelCounter: 1,
            userAnswer: "",
            currentLevel: {
                question: "How many red and green icypoles are there?",
                valOne: 3,
                valOneType: 'red',
                valTwo: 8,
                valTwoType: 'green',
                operator: 'plus',
                answer: 11
            },
            nextLevel: {
                question: "How many green icypoles are there?",
                valOne: 5,
                valOneType: 'red',
                valTwo: 3,
                valTwoType: 'green',
                operator: 'one',
                answer: 3
            },
            itemsArray: []
        }
    }

    componentDidMount() {
        const list = [];
        for (var i = 0; i < this.state.currentLevel.valOne; i++) {
            list.push({ id: i, itemColor: this.state.currentLevel.valOneType });
        }
        for (var x = 0; x < this.state.currentLevel.valTwo; x++) {
            list.push({ id: x + this.state.currentLevel.valOne, itemColor: this.state.currentLevel.valTwoType });
        }
        this.setState({ itemsArray: list }, () => console.log(this.state.itemsArray))
    }

    getImages() {
        return this.state.itemsArray.map(item => {
            if (item.itemColor == "red") {
                return <Image source={require('../assets/images/icypole-raspberry.png')}
                    key={item.id}
                    style={{ height: 100, width: 100 }}
                    resizeMode='contain' />
            } else if (item.itemColor == "green") {
                return <Image source={require('../assets/images/icypole-lime.png')}
                    key={item.id}
                    style={{ height: 100, width: 100 }}
                    resizeMode='contain' />
            } else {
                return null;
                console.log("returned null")
            }
        })
    }

    handleCheckAnswer = () => {
        if (this.state.userAnswer == this.state.currentLevel.answer) {
            this.setState({ success: true, fail: false, userAnswer: "" })
        } else {
            this.setState({ success: false, fail: true, userAnswer: "" });
        }
    }
    handleNextQuestion = () => {
        this.setState({ currentLevel: this.state.nextLevel, success: false, fail: false }, () => {
            const list = [];
            for (var i = 0; i < this.state.currentLevel.valOne; i++) {
                list.push({ id: i, itemColor: this.state.currentLevel.valOneType });
            }
            for (var x = 0; x < this.state.currentLevel.valTwo; x++) {
                list.push({ id: x + this.state.currentLevel.valOne, itemColor: this.state.currentLevel.valTwoType });
            }
            this.setState({ itemsArray: list }, () => console.log(this.state.itemsArray));
        });
    }
    handleBackPress = () => {
        this.props.navigation.navigate("Home");
    };
    render() {
        const { nextLevel, currentLevel, success, userAnswer } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <TouchableOpacity onPress={this.handleBackPress} style={styles.helpLink}>
                        <Text style={styles.helpLinkText}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.getStartedContainer}>
                        {this.state.fail ?
                            <Text style={styles.failText}>Incorrect! :(</Text>
                            : null}
                        {this.state.success ?
                            <Text style={styles.welcomeText}>Correct!</Text>
                            :
                            <Text style={styles.welcomeText}>{this.state.currentLevel.question}</Text>
                        }
                        <View style={styles.candyGrid}>
                            {this.getImages()}
                        </View>
                    </View>
                    <View style={styles.helpContainer}>
                        <TextInput
                            style={{ height: 40, width: 250, borderColor: 'gray', borderWidth: 1 }}
                            value={this.state.userAnswer}
                            onChangeText={(userAnswer) => this.setState({ userAnswer })}
                            autoCorrect={false}
                            keyboardType="number-pad"
                        />
                        {this.state.success ?
                            <TouchableOpacity onPress={this.handleNextQuestion} style={styles.helpLink}>
                                <Text style={styles.helpLinkText}>
                                    Next Level
                                </Text>
                            </TouchableOpacity>

                            :
                            <TouchableOpacity onPress={this.handleCheckAnswer} style={styles.helpLink}>
                                <Text style={styles.helpLinkText}>
                                    Check Answer
                                </Text>
                            </TouchableOpacity>
                        }
                    </View>
                </ScrollView>
            </View >
        );
    }
}


GameScreen.navigationOptions = {
    header: null,
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63DFFF',
    },
    candyGrid: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'

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
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    failText: {
        color: 'red',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 50
    },
    welcomeText: {
        fontSize: 24,
        textAlign: 'center',
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
    GameScreenFilename: {
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
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
