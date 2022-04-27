import React from "react";
import { Text, View, SafeAreaView, Button, TextInput } from "react-native";
import Photo from "../../components/photo";
import Content from "../../components/content";
import Styles from "./styles";
import Header from "../../components/header";
import Footer from "../../components/footer";

import { useNavigation } from "@react-navigation/native";

const dados = [
  {
    nome: "nome",
    cargo: "cargo",
    cidade: "cidade",
    telefone: "telefone",
  },
];

export default function RegistrarUsuario() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <Content>
        <SafeAreaView>
          {dados.map((info) => (
            <View style={Styles.geral}>
              <View>
                <Photo imageSource={require("../../assets/images/user.png")} />
              </View>
              <View style={Styles.bloco1}>
                <View style={Styles.descript}>
                  <Text style={Styles.textdecor}>Nome:</Text>
                  <TextInput>{info.nome}</TextInput>
                </View>
                <View style={Styles.descript}>
                  <Text style={Styles.textdecor}>Cargo:</Text>
                  <TextInput>{info.cargo}</TextInput>
                </View>
                <View style={Styles.descript}>
                  <Text style={Styles.textdecor}>Cidade:</Text>
                  <TextInput>{info.cidade}</TextInput>
                </View>
                <View style={Styles.descript}>
                  <Text style={Styles.textdecor}>Telefone:</Text>
                  <TextInput>{info.telefone}</TextInput>
                </View>
                <Button
                  style={Styles.button_text}
                  title="Cadastrar"
                  color={"#4C96A5"}
                  onPress={() => navigation.navigate("Inicio")}
                />
              </View>
            </View>
          ))}
        </SafeAreaView>
      </Content>
      <Footer />
    </>
  );
}
