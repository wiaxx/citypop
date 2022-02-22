import React from 'react';
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';

// TouchableOpacity

const HomePage = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CityPop</Text>

            <Pressable style={styles.searchBtn} onPress={() => navigation.navigate('City')}>
                <Text>SEARCH BY CITY</Text>
            </Pressable>

            <Pressable style={styles.searchBtn} onPress={() => navigation.navigate('Country')}>
                <Text>SEARCH BY COUNTRY</Text>
            </Pressable>
        </View>
    )
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

export default HomePage;