import react from 'react';
import { Text, View, Image } from 'react-native';
import Style from './styles';

function Home() {
    return(
        <View style={Style.bgcolor}>
            <View style={Style.border}>
            <View style={Style.borderToBorder}>
            <Image source={require('../../assets/images/Logo.png')} style={Style.img} />
            <Text>Testing...</Text>
            </View>
            </View>
        </View>
    );
}

export default Home;