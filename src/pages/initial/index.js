import React from "react";
import Header from "../../components/header/index";
import Content from "../../components/content/index";
import Footer from "../../components/footer/index";
import Profile from "../../components/profile";
import { View } from "react-native";
import Styles from "./styles";
import { useState } from "react";

export default function Inicio() {
  const [funcionario, setfuncionario] = useState([]);
  
  
  
  async function buscarFuncionario() {
    let response = await fetch('http://192.168.100.14:3000/funcionarios', {
      method: 'GET',

    });
    let json = await response.json()
    console.log(json)

    json.map((object) => {
      // let phrase = `nome: ${object.nome} Cargo ${object.cargo}\n`;
      // console.log(phrase)
      const funcionario = {
        nome: object.nome,
        cargo: object.cargo
      }
      setfuncionario(funcionario)

      console.log(`nome: ${funcionario.nome} Cargo ${funcionario.cargo}`)


    });

  }



  buscarFuncionario()



// console.log("esse é o set" + setfuncionario)

  // console.log(buscarFuncionario())
 
  // }
  // const Item = ({}) => (
    
  //   <View>
  //     <Profile

  //       imageSource={require("../../assets/images/user.png")}
  //       name="Kelvin Novais"
  //       job="Fullstack Developer"
  //     />
  //   </View>
  // );

  // const renderItem = ({ item }) => {
  //   return (<Item line={item.line} name={item.name} prefix={item.prefix}

  //   />)
  // };



  return (
    <>
      <Header />
      <Content>
        <View style={Styles.container}>

           <Profile
              imageSource = { require("../../assets/images/user.png") }
            name = "Guilherme Severiano"
            job = "Front-End Developer"
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
  )
}
