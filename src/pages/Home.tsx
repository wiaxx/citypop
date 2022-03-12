import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PageButton from '../components/PageButton';

const HomePage = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CityPop</Text>
            <PageButton text='SEARCH BY CITY' navigateTo='Search City' navigation={navigation} />
            <PageButton text='SEARCH BY COUNTRY' navigateTo='Search Country' navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        padding: 80,
    },
});

export default HomePage;