import React from "react";
import Header from "../../components/header/index";
import Content from "../../components/content/index";
import Footer from "../../components/footer/index";
import Profile from "../../components/profile";
import { View } from "react-native";
import Styles from "./styles";

export default function Inicio() {
  return (
    <>
      <Header />
      <Content>
        <View style={Styles.container}>
          <Profile
            imageSource={require("../../assets/images/user.png")}
            name="Kelvin Novais"
            job="Fullstack Developer"
          />
          <Profile
            imageSource={require("../../assets/images/user.png")}
            name="Guilherme Severiano"
            job="Front-End Developer"
          />
        </View>
        <View style={Styles.container}>
          <Profile
            imageSource={require("../../assets/images/user.png")}
            name="Gustavo Apolonio"
            job="Tech-Lead Fullstack"
          />
          <Profile
            imageSource={require("../../assets/images/user.png")}
            name="Edmilson Lima"
            job="Back-End Developer"
          />
        </View>
        <View style={Styles.container}>
          <Profile
            imageSource={require("../../assets/images/user.png")}
            name="Ana Alves"
            job="Designer"
          />
          <Profile
            imageSource={require("../../assets/images/user.png")}
            name="Diogo Lima"
            job="Back-End Developer"
          />
        </View>
      </Content>
      <Footer />
    </>
  );
}
