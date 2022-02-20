import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        CityPop</Text>

      <Pressable style={styles.searchBtn}>
        <Text>SEARCH BY CITY</Text>
      </Pressable>

      <Pressable style={styles.searchBtn}>
        <Text>SEARCH BY COUNTRY</Text>
      </Pressable>

      <StatusBar style="auto" />
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
  searchBtn: {
    width: '98%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  title: {
    fontSize: 28,
    marginBottom: 50,
  }
});
