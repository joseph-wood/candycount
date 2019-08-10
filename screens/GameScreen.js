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
import questions from '../constants/questions';
import { MonoText } from '../components/StyledText';

export default class GameScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            success: false,
            fail: false,
            levelCounter: 0,
            userAnswer: "",
            itemsArray: []
        }
    }

    componentWillMount() {
        const { levelCounter } = this.state;
        console.log(JSON.stringify(questions.questionList[levelCounter].valTwoColor));
        const list = [];
        for (var i = 0; i < questions.questionList[levelCounter].valOne; i++) {
            list.push({
                id: i,
                itemColor: questions.questionList[levelCounter].valOneColor,
                itemType: questions.questionList[levelCounter].valOneType
            });
        }
        for (var x = 0; x < questions.questionList[levelCounter].valTwo; x++) {
            list.push({
                id: x + questions.questionList[levelCounter].valOne,
                itemColor: questions.questionList[levelCounter].valTwoColor,
                itemType: questions.questionList[levelCounter].valTwoType
            });
            console.log(list);
        }
        this.setState({ itemsArray: list }, () => console.log("Item Array: ", this.state.itemsArray))
    }

    getImages() {
        console.log(this.state.itemsArray);
        return this.state.itemsArray.map(item => {
            if (item.itemType == "icypole" && item.itemColor == "raspberry") {
                return <Image source={require('../assets/images/icypoles/icypole-raspberry.png')}
                    key={item.id}
                    style={{ height: 80, width: 80 }}
                    resizeMode='contain' />
            } else if (item.itemType == "icypole" && item.itemColor == "lime") {
                return <Image source={require('../assets/images/icypoles/icypole-lime.png')}
                    key={item.id}
                    style={{ height: 80, width: 80 }}
                    resizeMode='contain' />
            } else if (item.itemType == "icypole" && item.itemColor == "lemonade") {
                return <Image source={require('../assets/images/icypoles/icypole-lemonade.png')}
                    key={item.id}
                    style={{ height: 80, width: 80 }}
                    resizeMode='contain' />
            } else if (item.itemType == "icypole" && item.itemColor == "grape") {
                return <Image source={require('../assets/images/icypoles/icypole-grape.png')}
                    key={item.id}
                    style={{ height: 80, width: 80 }}
                    resizeMode='contain' />
            } else {
                return null;
                console.log("returned null")
            }
        })
    }

    handleCheckAnswer = () => {
        if (this.state.userAnswer == questions.questionList[this.state.levelCounter].answer) {
            this.setState({ success: true, fail: false, userAnswer: "" })
        } else {
            this.setState({ success: false, fail: true, userAnswer: "" });
        }
    }
    handleNextQuestion = () => {
        const { levelCounter } = this.state;
        if (levelCounter == questions.questionList.length - 1) {
            console.log("End of array");
            this.props.navigation.navigate('Home');
        } else {
            console.log("Tried to go next item of array");
            this.setState({ levelCounter: this.state.levelCounter + 1, success: false, fail: false }, () => {
                const { levelCounter } = this.state;
                console.log(JSON.stringify(questions.questionList[levelCounter].valTwoColor));
                const list = [];
                for (var i = 0; i < questions.questionList[levelCounter].valOne; i++) {
                    list.push({
                        id: i,
                        itemColor: questions.questionList[levelCounter].valOneColor,
                        itemType: questions.questionList[levelCounter].valOneType
                    });
                }
                for (var x = 0; x < questions.questionList[levelCounter].valTwo; x++) {
                    list.push({
                        id: x + questions.questionList[levelCounter].valOne,
                        itemColor: questions.questionList[levelCounter].valTwoColor,
                        itemType: questions.questionList[levelCounter].valTwoType
                    });
                    console.log(list);
                }
                this.setState({ itemsArray: list }, () => console.log("Item Array: ", this.state.itemsArray))
            });
        }
    }
    handleBackPress = () => {
        this.props.navigation.navigate("Home");
    };
    render() {
        const { levelCounter, fail, success, userAnswer } = this.state;
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
                    {this.state.success ?
                        <View style={styles.centerContainer}>
                            <Text style={styles.welcomeText}>Hooray! You are awesome!</Text>
                            <TouchableOpacity onPress={this.handleNextQuestion} style={styles.helpLink}>
                                <Text style={styles.helpLinkText}>
                                    Next Level
                                </Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.helpContainer}>
                            <View style={styles.getStartedContainer}>
                                {this.state.fail ?
                                    <Text style={styles.failText}>Incorrect! :(</Text>
                                    : null}
                                {this.state.success && questions.questionList[levelCounter].question ?
                                    <Text style={styles.welcomeText}>Correct!</Text>
                                    :
                                    <Text style={styles.welcomeText}>{questions.questionList[levelCounter].question}</Text>
                                }
                                <View style={styles.candyGrid}>
                                    {this.getImages()}
                                </View>
                            </View>
                            <TextInput
                                style={{ height: 40, width: 250, borderColor: 'gray', borderWidth: 1 }}
                                value={this.state.userAnswer}
                                onChangeText={(userAnswer) => this.setState({ userAnswer })}
                                autoCorrect={false}
                                keyboardType="number-pad"
                            />
                            <TouchableOpacity onPress={this.handleCheckAnswer} style={styles.helpLink}>
                                <Text style={styles.helpLinkText}>
                                    Check Answer
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                </ScrollView>
            </View >
        );
    }
}


GameScreen.navigationOptions = {
    header: null,
    tabBarVisible: false
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
    centerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 500
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
