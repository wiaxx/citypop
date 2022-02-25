import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const HomePage = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CityPop</Text>

            <Pressable style={styles.searchBtn} onPress={() => navigation.navigate('Search City')}>
                <Text style={styles.uppercase}>SEARCH BY CITY</Text>
            </Pressable>

            <Pressable style={styles.searchBtn} onPress={() => navigation.navigate('Search Country')}>
                <Text style={styles.uppercase}>SEARCH BY COUNTRY</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
        padding: 80,
    },
    uppercase: {
        textTransform: 'uppercase',
    }
});

export default HomePage;