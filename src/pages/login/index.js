import React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
  Button,
  Alert,
} from "react-native";
import Styles from "./styles";

import { useNavigation } from "@react-navigation/native";

import Services from "../../services";
const api = new Services();

function Login() {
  const navigation = useNavigation();
  const [password, onChangePassword] = React.useState("");
  const [login, onChangelogin] = React.useState("");

  async function sendForm() {
    try {
      const body = {
        login,
        senha: password,
      };

      if (!body.login.trim()) {
        Alert.alert("Por favor, preencha o usuário!");
        return;
      }
      if (!body.senha.trim()) {
        Alert.alert("Por favor, preencha a senha!");
        return;
      }

      const response = await api.login(body);

      navigation.navigate("Inicio");

      return response;
    } catch (error) {
      if (error.message.includes("timeout")) {
        Alert.alert(
          "Não consegui acessar os servidores, tente novamente mais tarde!"
        );
      } else {
        const { message } = error.response.data;

        if (!message) {
          Alert.alert(
            "Um erro inesperado ocorreu, tente novamente mais tarde!"
          );
        }
      }
    }
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
            <Pressable
              onPress={() => {
                Alert.alert("Contate o seu administrador!");
              }}
            >
              <Text style={Styles.forgot}>Esqueci a senha</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
