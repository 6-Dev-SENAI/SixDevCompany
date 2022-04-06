import React from "react";
import { Image, View } from "react-native";
import DropDownButton from "../drop-down-button/index";
import logoball from "../../assets/images/sixdev-balls.png";
// import user from "../../assets/images/user.png";
import Styles from "./styles";

function Header() {
    const menuProperties = [
        {
            option: 'Option 1',
            route: 'Route 1'
        },
        {
            option: 'Option 2',
            route: 'Route 2'
        },
        {
            option: 'Option 3',
            route: 'Route 3'
        }
    ]

    return (
        <View style={Styles.container}>
            <Image source={logoball} style={Styles.img} />
            <DropDownButton properties={menuProperties} />
        </View>
    );
}

export default Header;