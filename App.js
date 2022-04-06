import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Employees from './src/pages/employees/index';
import Profile from './src/components/profile/index';
import DropDownButton from './src/components/drop-down-button/index';

export default function App() {
  return (
    <Employees />
  );
}