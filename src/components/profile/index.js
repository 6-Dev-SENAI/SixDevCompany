import React from "react";
import { Text, View } from "react-native";
import Photo from '../photo/index';
import Styles from "./styles";

const Profile = props => {
    return (
        <View style={Styles.container}>
            <Photo
                imageSource={props.imageSource}
            />
            <Text style={Styles.name}>{props.name}</Text>
            <Text style={Styles.job}>{props.job}</Text>
        </View>
    );
};

export default Profile;

/*  Usage:

    <Profile
        imageSource={require('./src/assets/images/user.png')}
        name="Kelvin Novais"
        job="Engineer"
    />

 */