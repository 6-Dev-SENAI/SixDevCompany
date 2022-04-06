import React from "react";
import Header from "../../components/header/index";
import Content from "../../components/content/index";
import Footer from "../../components/footer/index";
import Profile from "../../components/profile";
import { View } from "react-native";
import Styles from "./styles";

const menuProperties = [
    {
        option: 'Option 1',
        route: 'Route 1'
    },
    {
        option: 'Option 2',
        route: 'Route 2'
    },
    {
        option: 'Option 3',
        route: 'Route 3'
    }
]

export default function Employees() {
    return (
        <>
            <Header menuProperties={menuProperties} />
                <Content>
                    <View style={Styles.container}>
                        <Profile
                            imageSource={require('../../assets/images/user.png')}
                            name="Kelvin Novais"
                            job="Fullstack Developer"
                        />
                        <Profile
                            imageSource={require('../../assets/images/user.png')}
                            name="Guilherme Severiano"
                            job="Front-End Developer"
                        />
                    </View>
                    <View style={Styles.container}>
                        <Profile
                            imageSource={require('../../assets/images/user.png')}
                            name="Gustavo Apolonio"
                            job="Tech-Lead Fullstack"
                        />
                        <Profile
                            imageSource={require('../../assets/images/user.png')}
                            name="Edmilson Babaca"
                            job="Back-End Developer"
                        />
                    </View>
                    <View style={Styles.container}>
                        <Profile
                            imageSource={require('../../assets/images/user.png')}
                            name="Ana Alves"
                            job="Designer"
                        />
                        <Profile
                            imageSource={require('../../assets/images/user.png')}
                            name="Diogo Lima"
                            job="Back-End Developer"
                        />
                    </View>

                </Content>
            <Footer />
        </>
    );
}

//https://www.youtube.com/watch?v=nZWW7Ue9TD0 VIDEO CRUD  