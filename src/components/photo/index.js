import React from "react";
import { Image, View } from "react-native";
import Styles from "./styles";

const Photo = props => {
    return (
        <View style={Styles.frame}>
            <Image
                source={props.imageSource}
                style={Styles.img}
            />
        </View>
    )
};

export default Photo;

// Syntax: <Photo imageSource={require('./src/assets/images/image.x')}/>