import React, { Component } from 'react';
import {
    Image,
    View
} from 'react-native';

ImageBuilder = (props) => {
    return (
        <View style={props.style}>
            {props.list.map(item => {
                if (item.itemType == "icypoles" && item.itemColor == "raspberry") {
                    return <Image source={require('../assets/images/icypoles/icypole-raspberry.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                } else if (item.itemType == "icypoles" && item.itemColor == "lemon") {
                    return <Image source={require('../assets/images/icypoles/icypole-lemon.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                } else if (item.itemType == "icypoles" && item.itemColor == "lime") {
                    return <Image source={require('../assets/images/icypoles/icypole-lime.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                } else if (item.itemType == "icypoles" && item.itemColor == "lemonade") {
                    return <Image source={require('../assets/images/icypoles/icypole-lemonade.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                } else if (item.itemType == "icypoles" && item.itemColor == "grape") {
                    return <Image source={require('../assets/images/icypoles/icypole-grape.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                } else if (item.itemType == "lollipops" && item.itemColor == "raspberry") {
                    return <Image source={require('../assets/images/lollipops/lollipop-raspberry.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                } else if (item.itemType == "lollipops" && item.itemColor == "lemon") {
                    return <Image source={require('../assets/images/lollipops/lollipop-lemon.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                } else if (item.itemType == "lollipops" && item.itemColor == "lime") {
                    return <Image source={require('../assets/images/lollipops/lollipop-lime.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                } else if (item.itemType == "lollipops" && item.itemColor == "lemonade") {
                    return <Image source={require('../assets/images/lollipops/lollipop-lemonade.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                } else if (item.itemType == "lollipops" && item.itemColor == "grape") {
                    return <Image source={require('../assets/images/lollipops/lollipop-grape.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                } else if (item.itemType == "candies" && item.itemColor == "raspberry") {
                    return <Image source={require('../assets/images/candies/candy-raspberry.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                } else if (item.itemType == "candies" && item.itemColor == "lemon") {
                    return <Image source={require('../assets/images/candies/candy-lemon.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                } else if (item.itemType == "candies" && item.itemColor == "lime") {
                    return <Image source={require('../assets/images/candies/candy-lime.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                } else if (item.itemType == "candies" && item.itemColor == "lemonade") {
                    return <Image source={require('../assets/images/candies/candy-lemonade.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                } else if (item.itemType == "candies" && item.itemColor == "grape") {
                    return <Image source={require('../assets/images/candies/candy-grape.png')}
                        key={item.id}
                        style={{ height: 80, width: 80 }}
                        resizeMode='contain' />
                }
                else {
                    return null;
                    console.log("returned null")
                }
            })}
        </View>
    )
}

export default ImageBuilder;