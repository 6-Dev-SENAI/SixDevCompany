import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/home/index';
import Profile from './src/components/profile/index';

export default function App() {
  return (
    <View>
      <Profile
        imageSource={require('./src/assets/images/user.png')}
        name="Kelvin Novais"
        job="Engineer"
      />
    </View>
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
