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

export default function RegistrarUsuario(props) {
  return (
    <>
      <Content>
        <SafeAreaView>
        {props.dados.map((info) =>
          <View>
            <View>
              <Photo />
            </View>
            <View style={Styles.bloco1}>
              <View style={Styles.descript}>
                <Text>{info.nome}</Text>
              </View>
              <View>
                <Text>{info.cargo}</Text>
              </View>
            </View>
            <View style={Styles.bloco2}>
              <View>
                <Text>{info.endereco}</Text>
              </View>

              <View>
                <Text>{info.numero}</Text>
              </View>
            </View>
            <View style={Styles.bloco3}>
              <View>
                <Text>{info.cep}</Text>
              </View>
              <View>
                <Text>{info.bairro}</Text>
              </View>
            </View>
            <View style={Styles.bloco4}>
              <View>
                <Text>{info.cidade}</Text>
              </View>
              <View>
                <Text>{info.uf}</Text>
              </View>
            </View>
            <View style={Styles.bloco5}>
              <Text>{info.telefone}</Text>
            </View>
            <Botao text={"Salvar"} />
          </View>
        )}
        </SafeAreaView>
      </Content>
    </>
  );
}
