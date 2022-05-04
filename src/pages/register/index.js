import React from "react";
import { Text, View, SafeAreaView, Button, TextInput } from "react-native";
import Photo from "../../components/photo";
import Content from "../../components/content";
import Styles from "./styles";
import Header from "../../components/header";
import Footer from "../../components/footer";

import { useNavigation } from "@react-navigation/native";

// const dados = [
//   {
//     nome: "nome",
//     cargo: "cargo",
//     cidade: "cidade",
//     telefone: "telefone",
//     senha: "senha"
//   },
// ];



export default function RegistrarUsuario() {
  const navigation = useNavigation();

  const [nome, onChangenome] = React.useState("");
  const [cargo, onChangecargo] = React.useState("");
  const [cidade, onChangecidade] = React.useState("");
  const [telefone, onChangetelefone] = React.useState("");
  const [senha, onChangesenha] = React.useState("");

  async function sendForm() {
    let response = await fetch('http://192.168.100.14:3000/cadastrar', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        cargo: cargo,
        cidade: cidade,
        telefone: telefone,
        senha: senha
      })
    });

    let json = await response.json()
    console.log(json)
  }
  return (
    <>
      <Header />
      <Content>
        <SafeAreaView>

          <View style={Styles.geral}>
            <View>
              <Photo imageSource={require("../../assets/images/user.png")} />
            </View>
            <View style={Styles.bloco1}>
              <View style={Styles.descript}>
                <TextInput
                  style={Styles.input}
                  onChangeText={onChangenome}
                  value={nome}
                  placeholder="Nome"
                  placeholderTextColor="#474747"
                />
              </View>
              <View style={Styles.descript}>
                <TextInput
                  style={Styles.input}
                  onChangeText={onChangecargo}
                  value={cargo}
                  placeholder="Cargo"
                  placeholderTextColor="#474747"
                />
              </View>
              <View style={Styles.descript}>
                <TextInput
                  style={Styles.input}
                  onChangeText={onChangecidade}
                  value={cidade}
                  placeholder="Cidade"
                  placeholderTextColor="#474747"
                />
              </View>
              <View style={Styles.descript}>
                <TextInput
                  style={Styles.input}
                  onChangeText={onChangetelefone}
                  value={telefone}
                  placeholder="Telefone"
                  placeholderTextColor="#474747"
                />
              </View>
              <View style={Styles.descript}>
                <TextInput
                  style={Styles.input}
                  onChangeText={onChangesenha}
                  value={senha}
                  placeholder="Senha"
                  placeholderTextColor="#474747"
                />
              </View>
              <Button
                color={"#4C96A5"}
                title="Cadastrar"
                onPress={() => sendForm()}
              />
            </View>
          </View>

        </SafeAreaView>
      </Content>
      <Footer />
    </>
  );
}
