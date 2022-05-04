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
  const [password, onChangePassword] = React.useState("");
  const [login, onChangelogin] = React.useState("");


  //envio do formulario de username
  async function sendForm() {
    let response = await fetch('http://192.168.100.14:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: login,
        senha: password
      })
    });

    let json = await response.json()
//falta terminar ess essa parte do que esta voltando do bac
  }
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
              onChangeText={onChangelogin}
              value={login}
              placeholder="Login"
              placeholderTextColor="#474747"
            />
            <TextInput
              style={Styles.input}
              onChangeText={onChangePassword}
              value={password}
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
                // onPress={() => navigation.navigate("Inicio")}
                onPress={() => sendForm()}
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
