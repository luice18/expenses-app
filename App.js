import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import TransferScreen from './src/screens/TransferScreen';
import TabsShape from './src/screens/HomeScreen/components/TabsShape';

export default function App() {
  return (
    <>
      <HomeScreen />
      
      <TabsShape/>
        
      <StatusBar style="auto" />
    </>
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
