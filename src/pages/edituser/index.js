import React from "react";
import { Alert, View, SafeAreaView, Button, TextInput } from "react-native";
import Photo from "../../components/photo";
import Content from "../../components/content";
import Styles from "./styles";
import Header from "../../components/header";
import Footer from "../../components/footer";

import { useNavigation } from "@react-navigation/native";

import Services from "../../services";
const api = new Services();

export default function Edit({
  route = {
    params: {
      getStaffs: () => {},
      name: "",
      job: "",
      city: "",
      tel: "",
      password: "",
      userId: "",
    },
  },
}) {
  const navigation = useNavigation();

  const { getStaffs, name, job, city, tel, password, userId } = route.params;

  const [nome, onChangenome] = React.useState(name);
  const [cargo, onChangecargo] = React.useState(job);
  const [cidade, onChangecidade] = React.useState(city);
  const [telefone, onChangetelefone] = React.useState(tel.toString());
  const [senha, onChangesenha] = React.useState(password);

  async function sendForm() {
    try {
      const body = {
        nome: nome.trim(),
        cargo: cargo.trim(),
        telefone: telefone.trim().replace("-", ""),
        senha: senha.trim(),
        cidade: cidade.trim(),
      };

      const response = await api.update(userId, body);

      getStaffs();
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
                title="Salvar"
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
