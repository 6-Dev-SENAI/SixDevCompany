import React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import Photo from "../../components/photo";
import Content from "../../components/content";
import Styles from "./styles";
import Botao from "../../components/button";

const dados  = [
  {
    nome:"Nome",
    cargo:"Cargo",
    telefone:"Telefone",
    cidade:"Cidade",
    bairro:"Bairro"
  }
]

export default function RegistrarUsuario(props) {
  return (
    <>
      <Content>
        <SafeAreaView>
          {props.dados.map((info) => (
            <View>
              <View>
                <Photo />
              </View>
              <View style={Styles.bloco1}>

                <View style={Styles.descript}>
                  <Text><b>Nome:</b>{info.nome}</Text>
                </View>

                <View>
                  <Text><b>Cargo</b>{info.cargo}</Text>
                </View>

                <View>
                  <Text><b>Endereço</b>{info.endereco}</Text>
                </View>

                <View>
                  <Text><b>Telefone</b>{info.telefone}</Text>
                </View>

                <Botao text={"Salvar"} />
              </View>
            </View>
          ))}
        </SafeAreaView>
      </Content>
    </>
  );
}
