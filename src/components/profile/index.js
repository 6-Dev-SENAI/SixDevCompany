import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import Photo from "../photo/index";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import Services from "../../services";
const api = new Services();

const Profile = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const { userId, getStaffs, name, job, city, tel, password } = props;

  async function deleteUser() {
    try {
      const response = await api.delete(userId);

      setModalVisible(false);
      getStaffs();

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
    <View style={Styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        {/* POPUP */}
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Text style={Styles.modalText}>Escolha uma opção:</Text>
            {/* POPUP OPTIONS */}
            <Pressable
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("Editar", {
                  userId,
                  getStaffs,
                  name,
                  job,
                  city,
                  tel,
                  password,
                });
              }}
              style={[Styles.button]}
            >
              <Text style={Styles.textStyle}>Editar funcionário</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                deleteUser();
              }}
              style={[Styles.button]}
            >
              <Text style={Styles.textStyle}>Deletar funcionário</Text>
            </Pressable>
            <Pressable
              style={[Styles.button]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={Styles.textClose}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* POPUP TRIGGER */}
      <Pressable onPress={() => setModalVisible(true)}>
        {/* PROFILE VIEW */}
        <View style={Styles.container}>
          <Photo imageSource={props.imageSource} />
          <Text style={Styles.name}>{name}</Text>
          <Text style={Styles.job}>{job}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Profile;
