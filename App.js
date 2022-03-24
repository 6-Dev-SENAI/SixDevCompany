import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/home/index';
import Photo from './src/components/photo/index';

export default function App() {
  return (
    // <Home></Home>
    <Photo imageUri='./src/assets/images/user.png' />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
