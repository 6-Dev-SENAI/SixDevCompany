import React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import Styles from "./styles";

import { useNavigation } from "@react-navigation/native";

function Login() {
  const navigation = useNavigation();
  const [username, onChangeUsername] = React.useState("");
  const [passwd, onChangePasswd] = React.useState("");
  return (
    <SafeAreaView style={Styles.bgcolor}>
      <View style={Styles.container}>
        <View style={Styles.logo}>
          <Image
            source={require("../../assets/images/Logo.png")}
            style={Styles.img}
          />
        </View>
        <View style={Styles.inputs}>
          <SafeAreaView>
            <TextInput
              style={Styles.input}
              onChangeText={onChangeUsername}
              value={username}
              placeholder="Login"
              placeholderTextColor="#474747"
            />
            <TextInput
              style={Styles.input}
              onChangeText={onChangePasswd}
              value={passwd}
              placeholder="Senha"
              placeholderTextColor="#474747"
              secureTextEntry={true}
            />
          </SafeAreaView>
          <View style={Styles.buttons}>
            <Pressable style={Styles.button}>
              <Button
                style={Styles.button_text}
                title="Entrar"
                color={"#4C96A5"}
                onPress={() => navigation.navigate("Inicio")}
              />
            </Pressable>
            <Text style={Styles.forgot}>Esqueci a senha</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
