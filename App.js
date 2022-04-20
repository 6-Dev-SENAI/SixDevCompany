import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './src/pages/telaInicio/index';
import Profile from './src/components/profile/index';
import DropDownButton from './src/components/drop-down-button/index';
import ModalButton from './src/components/modal-button/index';
import RegistrarUsuario from './src/pages/registro/index';
import Login from './src/pages/telaLogin/index';




import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

const Data =
  [
    {
      nome: 'nome',
      cargo: 'cargo',
      uf: 'uf',
      cidade: 'cidade',
      endereco: 'endereço',
      telefone: 'telefone',
      cep: 'cep',
      bairro: 'bairro',
      numero: 'numero'
    }
  ]
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Registro" component={RegistrarUsuario} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
