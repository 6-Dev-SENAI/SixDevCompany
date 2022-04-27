import React from "react";
import { Text, Image, View } from "react-native";
import Styles from "./styles";

const User = require("../../assets/images/adduser.png");

export default function Adduser() {
  return (
    <View>
      <Image source={User} style={Styles.img} />
    </View>
  );
}
