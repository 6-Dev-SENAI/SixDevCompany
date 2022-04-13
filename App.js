import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './src/pages/telaInicio/index';
import Profile from './src/components/profile/index';
import DropDownButton from './src/components/drop-down-button/index';
import ModalButton from './src/components/modal-button/index';
import RegistrarUsuario from './src/pages/registro/index';

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
export default function App() {
  return (
    <RegistrarUsuario dados={Data} />
  );
}