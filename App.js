import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Employees from './src/pages/employees/index';
import RegisterUser from './src/pages/register/index';
import Profile from './src/components/profile/index';
import DropDownButton from './src/components/drop-down-button/index';
import ModalButton from './src/components/modal-button/index';

export default function App() {
  return (
    <Employees />
  );
}