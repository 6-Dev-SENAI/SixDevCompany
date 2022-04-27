import RegistrarUsuario from '../register';
import { View, Button } from "react-native";
import Content from '../../components/content';
import Header from '../../components/header';
import Footer from '../../components/footer';



export default function Edit() {
    return (<>
     <Header/>
        <Content>
            <View>
               
                <View>
                    <Button
                        title="Salvar Edição"
                        color={"#4C96A5"} />
                </View>

            </View>

        </Content>
     <Footer/>
    </>)
}