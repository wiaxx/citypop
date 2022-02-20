import React from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const City = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SEARCH BY CITY</Text>
            <TextInput defaultValue='Enter a city' style={styles.txtInput} />
            <Pressable>
                <AntDesign name="search1" size={24} color="black" />
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
    txtInput: {
        height: 40,
        width: "98%",
        borderColor: 'gray',
        borderWidth: 1
    },
    title: {
        fontSize: 28,
        marginBottom: 50,
    },
});

export default City;