import * as WebBrowser from 'expo-web-browser';
import * as Font from 'expo-font';
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
import ImageBuilder from '../components/ImageBuilder';

export default class GameScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            fail: false,
            levelCounter: 0,
            maxLevels: 9,
            userAnswer: "",
            correctAnswer: "",
            itemsArray: [],
            candyType: '',
            numberOfCandies: 0,
            question: ""
        }
    }
    componentDidMount() {
        Font.loadAsync({
            'courgette': require('../assets/fonts/Courgette-Regular.ttf'),
        });
    } 

    componentWillMount() {
        this.subtractionGenerateQuestion();
    }    
    
    subtractionGenerateQuestion = () => {
        let questionPrefixes = ['If you ate', 'If you gave away'];
        let questionVals = [5, 6, 7, 8, 9, 8, 9, 5, 5, 6, 7, 7, 7, 6, 9, 9, 8];
        let answerVals = [2,3,4,5,5,4,3,2];
        let questionJoin = ['and', 'how many'];
        let questionValTypes = ['icypoles', 'lollipops', 'candies'];
        let questionValColors = ['raspberry', 'lemon', 'lime', 'grape'];
        let questionAffix = ', how many would be left?';
        let random = Math.random();
        let randomPrefixNumber = Math.floor(random * questionPrefixes.length);
        let randomPrefix = questionPrefixes[randomPrefixNumber];
        let randomValOneNumber = Math.floor(random * questionVals.length);
        let randomValOne = questionVals[randomValOneNumber];
        let randomMinusNumber = Math.floor(random * answerVals.length);
        let randomMinus = answerVals[randomMinusNumber];
        let randomValTypeNumber = Math.floor(random * questionValTypes.length);
        let randomValType = questionValTypes[randomValTypeNumber]
        let randomValColorNumber = Math.floor(random * questionValColors.length);
        let randomValColor = questionValColors[randomValColorNumber];
        let answer = randomValOne - randomMinus;
        let question = randomPrefix + ' ' + randomMinus + ' ' + randomValColor + ' ' + randomValType + questionAffix
        this.setState({ numberOfCandies: randomValOne, candyColor: randomValColor, candyType: randomValType, question, correctAnswer: answer});

        console.log(
            "Question: ", question, 
            "Amount of candies: ", randomValOne,
            "Answer: ", answer
        );
    }

    handleNextQuestion = () => {
        const { levelCounter, maxLevels } = this.state;
        if(levelCounter >= maxLevels){
            this.props.navigation.navigate("Win");
        } else if(levelCounter < maxLevels){
            this.setState({levelCounter: this.state.levelCounter + 1, success: false, fail: false}, () => {
                this.subtractionGenerateQuestion()
            });
        }
    }

    handleInput = (a) => {
        this.setState({ userAnswer: a }, () => console.log(this.state.userAnswer))
    }

    handleCheckAnswer = () => {
        if (this.state.userAnswer == this.state.correctAnswer) {
            this.setState({ success: true, fail: false, userAnswer: "" })
        } else {
            this.setState({ success: false, fail: true, userAnswer: "" });
        }
    }
    
    handleBackPress = () => {
        this.props.navigation.navigate("Home");
    };
    render() {
        const { levelCounter, maxLevels, fail, success, userAnswer, question } = this.state;
        const resizeMode = 'repeat';
        const list = [];
        console.log("creating new question images")
        for (var i = 0; i < this.state.numberOfCandies; i++) {
            list.push({
                id: i,
                itemColor: this.state.candyColor,
                itemType: this.state.candyType
            });
        }
        return (
            <View style={styles.container}>
                <View 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%'
                    }}
                >
                    <Image
                    source={require('../assets/images/gamebg.png')}
                    style={{
                        flex: 1,
                        resizeMode,
                    }}
                    />
                </View>
                <View style={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    width: '100%',
                }}
                >
                    {this.state.success ?
                        <View style={styles.centerContainer}>
                            <View style={styles.nextContainer}>
                                <View></View>
                                <Image
                                    source={require('../assets/images/awesome.png')}
                                    width={'80%'}
                                    style={{
                                        maxWidth: '80%',
                                        resizeMode: 'contain'
                                    }}
                                />                                
                                <TouchableOpacity onPress={this.handleNextQuestion} style={styles.buttons}>
                                    <Text style={styles.menuBtn}>
                                        {levelCounter == maxLevels ? "Finish" : "Next Level"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        <View style={styles.helpContainer}>
                            <View style={styles.getStartedContainer}>
                                {this.state.success && question ?
                                    <Text style={styles.welcomeText}>Correct!</Text>
                                    :
                                    <Text style={styles.welcomeText}>{question}</Text>
                                }
                                <ImageBuilder list={list} style={styles.candyGrid} />
                                <View style={styles.candyGrid}>
                                    <Text style={styles.welcomeText}>Your answer: {userAnswer ? userAnswer : "0"}</Text>
                                </View>
                                <View style={styles.candyGrid}>
                                    <TouchableOpacity
                                        onPress={() => this.handleInput("1")}
                                        style={styles.answerButton}
                                    >
                                        <Text style={styles.btnText}>
                                            1
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.handleInput("2")}
                                        style={styles.answerButton}
                                    >
                                        <Text style={styles.btnText}>
                                            2
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.handleInput("3")}
                                        style={styles.answerButton}
                                    >
                                        <Text style={styles.btnText}>
                                            3
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.handleInput("4")}
                                        style={styles.answerButton}
                                    >
                                        <Text style={styles.btnText}>
                                            4
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.handleInput("5")}
                                        style={styles.answerButton}
                                    >
                                        <Text style={styles.btnText}>
                                            5
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.handleInput("6")}
                                        style={styles.answerButton}
                                    >
                                        <Text style={styles.btnText}>
                                            6
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.handleInput("7")}
                                        style={styles.answerButton}
                                    >
                                        <Text style={styles.btnText}>
                                            7
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.handleInput("8")}
                                        style={styles.answerButton}
                                    >
                                        <Text style={styles.btnText}>
                                            8
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.handleInput("9")}
                                        style={styles.answerButton}
                                    >
                                        <Text style={styles.btnText}>
                                            9
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.handleInput("0")}
                                        style={styles.answerButton}
                                    >
                                        <Text style={styles.btnText}>
                                            0
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.handleCheckAnswer} style={styles.answerButton, styles.checkAnswerBtn}>
                                        <Text style={styles.btnText}>
                                            Check Answer
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* <TextInput
                                style={{ height: 40, width: 250, borderColor: 'gray', borderWidth: 1 }}
                                value={this.state.userAnswer}
                                onChangeText={(userAnswer) => this.setState({ userAnswer })}
                                autoCorrect={false}
                                keyboardType="number-pad"
                            /> */}
                        </View>
                    }
                    </View>
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
        backgroundColor: '#F694C1',
        fontFamily: 'courgette'
    },
    candyGrid: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'

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
      },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: 'courgette'
    },
    nextContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        height: 600
    },
    centerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        marginBottom: 50,
        fontFamily: 'courgette'
    },
    welcomeText: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 25,
        marginBottom: 25,
        fontFamily: 'courgette'

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
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        fontFamily: 'courgette'
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
        marginTop: 5,
        alignItems: 'center',
    },
    nextLevelBtn: {
        paddingVertical: 15,
        margin: 5,
        paddingHorizontal: 30,
        backgroundColor: '#D3F8E2',
        borderRadius: 4
    },
    nextLevelBtnText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        width: '100%',
        textAlign: 'center'
    },
    backBtn: {
        fontSize: 14,
        color: '#333',
        maxWidth: 50,
        fontFamily: 'courgette'
    },
    answerButton: {
        minWidth: '30%',
        paddingVertical: 5,
        margin: 5,
        paddingHorizontal: 10,
        backgroundColor: '#F694C1',
        borderRadius: 4,
        textAlign: 'center',
        fontFamily: 'courgette'
    },
    checkAnswerBtn: {
      minWidth: '63%',
      paddingVertical: 5,
      margin: 5,
      paddingHorizontal: 20,
      backgroundColor: '#75DB9E',
      borderRadius: 4,
      textAlign: 'center',
      fontFamily: 'courgette'
    }
});
