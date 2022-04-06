import React from "react";
import { Image, View } from "react-native";
import DropDownButton from "../drop-down-button/index";
import logoball from "../../assets/images/sixdev-balls.png";
// import user from "../../assets/images/user.png";
import Styles from "./styles";

function Header(props) {
    return (
        <View style={Styles.container}>
            <Image source={logoball} style={Styles.img} />
            <DropDownButton properties={props.menuProperties} />
        </View>
    );
}

export default Header;