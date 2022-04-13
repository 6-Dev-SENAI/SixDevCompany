import React from "react";
import { Text, View, Pressable } from "react-native";
import Styles from "./styles";

export default function Botao(props) {
    return (
        <View style={Styles.buttons}>
            <Pressable
                style={Styles.button}
                onPress={props.op}
            >
                <Text style={Styles.button_text}>{props.text}</Text>
            </Pressable>
        </View>
    );
}