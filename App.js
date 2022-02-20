import { StatusBar } from 'expo-status-bar';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <>
      <HomePage />

      <StatusBar style="auto" />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
