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

    componentDidMount() {
        Font.loadAsync({
            'courgette': require('../assets/fonts/Courgette-Regular.ttf'),
        });
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
        }
        this.setState({ itemsArray: list });
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
            } else if (item.itemType == "lollipop" && item.itemColor == "raspberry") {
                return <Image source={require('../assets/images/lollipops/lollipop-raspberry.png')}
                    key={item.id}
                    style={{ height: 80, width: 80 }}
                    resizeMode='contain' />
            } else if (item.itemType == "lollipop" && item.itemColor == "lime") {
                return <Image source={require('../assets/images/lollipops/lollipop-lime.png')}
                    key={item.id}
                    style={{ height: 80, width: 80 }}
                    resizeMode='contain' />
            } else if (item.itemType == "lollipop" && item.itemColor == "lemonade") {
                return <Image source={require('../assets/images/lollipops/lollipop-lemonade.png')}
                    key={item.id}
                    style={{ height: 80, width: 80 }}
                    resizeMode='contain' />
            } else if (item.itemType == "lollipop" && item.itemColor == "grape") {
                return <Image source={require('../assets/images/lollipops/lollipop-grape.png')}
                    key={item.id}
                    style={{ height: 80, width: 80 }}
                    resizeMode='contain' />
            } else if (item.itemType == "candy" && item.itemColor == "raspberry") {
                return <Image source={require('../assets/images/candies/candy-raspberry.png')}
                    key={item.id}
                    style={{ height: 80, width: 80 }}
                    resizeMode='contain' />
            } else if (item.itemType == "candy" && item.itemColor == "lime") {
                return <Image source={require('../assets/images/candies/candy-lime.png')}
                    key={item.id}
                    style={{ height: 80, width: 80 }}
                    resizeMode='contain' />
            } else if (item.itemType == "candy" && item.itemColor == "lemonade") {
                return <Image source={require('../assets/images/candies/candy-lemonade.png')}
                    key={item.id}
                    style={{ height: 80, width: 80 }}
                    resizeMode='contain' />
            } else if (item.itemType == "candy" && item.itemColor == "grape") {
                return <Image source={require('../assets/images/candies/candy-grape.png')}
                    key={item.id}
                    style={{ height: 80, width: 80 }}
                    resizeMode='contain' />
            }
            else {
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
            this.props.navigation.navigate('Win');
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

    handleInput = (a) => {
        this.setState({ userAnswer: a }, () => console.log(this.state.userAnswer))
    }
    render() {
        const { levelCounter, fail, success, userAnswer } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    {/* <TouchableOpacity onPress={this.handleBackPress}>
                        <Text>
                            Back
                        </Text>
                    </TouchableOpacity> */}
                    {this.state.success ?
                        <View style={styles.centerContainer}>
                            <View style={styles.nextContainer}>
                                <View></View>
                                <Text style={styles.welcomeText}>Hooray! You are awesome!</Text>
                                <TouchableOpacity onPress={this.handleNextQuestion} style={styles.nextLevelBtn}>
                                    <Text style={styles.nextLevelBtnText}>
                                        {levelCounter == questions.questionList.length - 1 ? "Finish" : "Next Level"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        <View style={styles.helpContainer}>
                            <View style={styles.getStartedContainer}>
                                {this.state.success && questions.questionList[levelCounter].question ?
                                    <Text style={styles.welcomeText}>Correct!</Text>
                                    :
                                    <Text style={styles.welcomeText}>{questions.questionList[levelCounter].question}</Text>
                                }
                                <View style={styles.candyGrid}>
                                    {this.getImages()}
                                </View>
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
        justifyContent: 'space-between',
        height: 600
    },
    centerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: '#A9DEF9',
        borderRadius: 4,
        textAlign: 'center',
        fontFamily: 'courgette'
    },
    checkAnswerBtn: {
      minWidth: '60%',
      paddingVertical: 5,
      margin: 5,
      paddingHorizontal: 17,
      backgroundColor: '#EDE7B1',
      borderRadius: 4,
      textAlign: 'center',
      fontFamily: 'courgette'
    }
});
