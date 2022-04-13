import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import Styles from "./styles";
// Caso queiramos trabalhar com props
const ModalButton = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
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
            {/* OPÇÕES */}
            <Pressable
              style={[Styles.button, Styles.buttonEdit]}
              // onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Editar funcionário</Text>
            </Pressable>
            <Pressable
              style={[Styles.button, Styles.buttonDelete]}
              // onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={Styles.textStyle}>Deletar funcionário</Text>
            </Pressable>
            <Pressable
              style={[Styles.button, Styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={Styles.textClose}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* GATILHO */}
      <Pressable
        style={[Styles.button, Styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={Styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default ModalButton;

// Refrence: https://reactnative.dev/docs/modal#animationtype