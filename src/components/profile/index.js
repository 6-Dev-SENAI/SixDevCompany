import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, } from "react-native";
import Photo from "../photo/index";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const Profile = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={Styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {/* POPUP */}
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Text style={Styles.modalText}>Escolha uma opção:</Text>
            {/* POPUP OPTIONS */}
            <Pressable onPress={() => navigation.navigate("Editar")} style={[Styles.button]}>
              <Text style={Styles.textStyle}>Editar funcionário</Text>
            </Pressable>
            <Pressable style={[Styles.button]}>
              <Text style={Styles.textStyle}>Deletar funcionário</Text>
            </Pressable>
            <Pressable
              style={[Styles.button]}
              onPress={() => setModalVisible(!modalVisible)}
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
          <Text style={Styles.name}>{props.name}</Text>
          <Text style={Styles.job}>{props.job}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Profile;

/*  Usage:

    <Profile
        imageSource={require('./src/assets/images/user.png')}
        name="Kelvin Novais"
        job="Engineer"
    />

 */
