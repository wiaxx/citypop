import React from 'react';
import { StyleSheet, View } from 'react-native';
import Input from '../components/Input';

const City = () => {
    return (
        <View style={styles.container}>
            <Input title="SEARCH BY CITY" placeholder="Enter a city" />
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
});

export default City;