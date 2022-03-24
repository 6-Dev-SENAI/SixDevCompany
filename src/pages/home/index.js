import React from "react";
import { Text, View, Image, SafeAreaView, TextInput, Pressable } from "react-native";
import Styles from "./styles";

function Home() {
    const [username, onChangeUsername] = React.useState("");
    const [passwd, onChangePasswd] = React.useState("");
    return (
        <SafeAreaView style={Styles.bgcolor}>
            <View style={Styles.container}>
                <View style={Styles.logo}>
                    <Image source={require("../../assets/images/Logo.png")} style={Styles.img} />
                </View>
                <View style={Styles.inputs}>
                    <SafeAreaView>
                        <TextInput
                            style={Styles.input}
                            onChangeText={onChangeUsername}
                            value={username}
                            placeholder="Login"
                            placeholderTextColor="#474747"
                        />
                        <TextInput
                            style={Styles.input}
                            onChangeText={onChangePasswd}
                            value={passwd}
                            placeholder="Senha"
                            placeholderTextColor="#474747"
                            secureTextEntry={true}
                        />
                    </SafeAreaView>
                    <View style={Styles.buttons}>
                        <Pressable style={Styles.button}>
                            <Text style={Styles.button_text}>Entrar</Text>
                        </Pressable>
                        <Text style={Styles.forgot}>Esqueci a senha</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;