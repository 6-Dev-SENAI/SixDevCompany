import Inicio from "./src/pages/initial/index";
import RegistrarUsuario from "./src/pages/register/index";
import Login from "./src/pages/login/index";
import Edit from "./src/pages/edituser/index";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Registro" component={RegistrarUsuario} />
      <Stack.Screen name="Editar" component={Edit} />
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
