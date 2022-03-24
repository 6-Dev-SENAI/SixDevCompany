import React from "react";
import { Image, View, Text } from "react-native";
import Styles from "./styles";

function Photo(props) {
    return <Image style={Styles.img} source={require(props.imageUri)} />
};

export default Photo;

// SINTAX: <Photo imageUri='./src/assets/images/user.png' />