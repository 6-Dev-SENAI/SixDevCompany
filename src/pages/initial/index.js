import React from "react";
import Header from "../../components/header/index";
import Content from "../../components/content/index";
import Footer from "../../components/footer/index";
import Profile from "../../components/profile";
import { View, Pressable, Button, Text, Alert } from "react-native";
import Styles from "./styles";
import { useState, useEffect } from "react";

import Services from "../../services";
const api = new Services();

export default function Inicio() {
  const [loading, setLoading] = useState(false);

  function Reload() {
    return (
      <View style={Styles.reload}>
        <Pressable style={Styles.reload_btn}>
          {loading ? (
            <Text style={Styles.realod_text}>Carregando...</Text>
          ) : (
            <Button
              style={Styles.realod_text}
              title="Recarregar tela"
              color={"#4C96A5"}
              // onPress={() => navigation.navigate("Inicio")}
              onPress={() => getStaffs()}
            />
          )}
        </Pressable>
      </View>
    );
  }

  const [staffs, setStaffs] = useState([]);

  async function getStaffs() {
    try {
      setLoading(true);

      const response = await api.getStaffs();

      const data = response.filter(
        (staff) => staff._id !== "627dcf75fe79daf476a62bc6"
      );

      setStaffs([...data]);
      setLoading(false);

      return data;
    } catch (error) {
      setLoading(false);
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

  useEffect(() => {
    getStaffs();
  }, []);

  function Render({ staffs = [] }) {
    let couple = [];
    let individual = [];

    while (staffs.length > 0) {
      if (staffs.length > 1) {
        couple.push(staffs.splice(0, 2));
      } else {
        individual.push(staffs.splice(0, 1)[0]);
      }
    }

    return (
      <>
        <RenderTwo couples={couple} />
        <RenderOne individuals={individual} />
      </>
    );
  }

  function RenderTwo({ couples = [] }) {
    if (couples.length > 0) {
      return (
        <>
          {couples.map((couple = []) => {
            return (
              <View style={Styles.container}>
                {couple.map((staff) => (
                  <Profile
                    name={staff.nome}
                    job={staff.cargo}
                    city={staff.cidade}
                    tel={staff.telefone}
                    password={staff.senha}
                    userId={staff._id}
                    getStaffs={getStaffs}
                    imageSource={require("../../assets/images/user.png")}
                  />
                ))}
              </View>
            );
          })}
        </>
      );
    } else return <></>;
  }

  function RenderOne({ individuals = [] }) {
    if (individuals.length > 0) {
      return (
        <>
          {individuals.map((staff) => (
            <View style={Styles.container}>
              <Profile
                name={staff.nome}
                job={staff.cargo}
                city={staff.cidade}
                tel={staff.telefone}
                password={staff.senha}
                userId={staff._id}
                getStaffs={getStaffs}
                imageSource={require("../../assets/images/user.png")}
              />
            </View>
          ))}
        </>
      );
    } else return <></>;
  }

  return (
    <>
      <Header getStaffs={getStaffs} />
      <Content>
        {staffs.length > 0 ? (
          <Render staffs={[...staffs]} />
        ) : (
          () => {
            Alert.alert("Não há funcionários cadastrados no sistema.");
            return <Reload />;
          }
        )}
      </Content>
      <Footer />
    </>
  );
}
