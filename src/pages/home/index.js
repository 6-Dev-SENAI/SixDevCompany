import React from "react";
import { Text, View, Image, SafeAreaView, TextInput, Pressable } from "react-native";
import Style from "./styles";

function Home() {
  const [username, onChangeUsername] = React.useState("");
  const [passwd, onChangePasswd] = React.useState("");
  return(
    <View style={Style.bgcolor}>
      <View style={Style.border}>
          <View style={Style.borderToBorder}>
            <View style={Style.logo}>
              <Image source={require("../../assets/images/Logo.png")} style={Style.img} />
            </View>
            <View style={Style.inputs}>
              <SafeAreaView>
                <TextInput
                  style={Style.input}
                  onChangeText={onChangeUsername}
                  value={username}
                  placeholder="Login"
                  placeholderTextColor="#474747"
                />
                <TextInput
                  style={Style.input}
                  onChangeText={onChangePasswd}
                  value={passwd}
                  placeholder="Senha"
                  placeholderTextColor="#474747"
                  secureTextEntry={true}
                />
              </SafeAreaView>
              <View style={Style.buttons}>
                <Pressable style={Style.button}>
                  <Text style={Style.button_text}>Entrar</Text>
                </Pressable> 
                <Text style={Style.forgot}>Esqueci a senha</Text>
              </View>
            </View>
          </View>
      </View>
    </View>
  );
}

export default Home;
