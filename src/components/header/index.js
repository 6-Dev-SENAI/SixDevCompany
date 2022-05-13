import React from "react";
import { Image, View, Pressable } from "react-native";

import logoball from "../../assets/images/sixdev-balls.png";
import Styles from "./styles";
import Adduser from "../add";

import { useNavigation } from "@react-navigation/native";

function Header({ getStaffs }) {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Pressable onPress={() => navigation.navigate("Inicio")}>
        <Image source={logoball} style={Styles.img} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Registro", { getStaffs })}>
        <Adduser />
      </Pressable>
    </View>
  );
}

export default Header;
