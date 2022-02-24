import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchCity = ({ navigation }: { navigation: any }) => {
    const [value, setValue] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SEARCH BY CITY</Text>
            <TextInput
                placeholder='Enter a city'
                onChangeText={newValue => setValue(newValue)}
                defaultValue={value}
                style={styles.txtInput} />
            <Pressable onPress={() => navigation.navigate('City', { value: value })}>
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
        borderWidth: 1,
        marginBottom: 10,
    },
    title: {
        fontSize: 28,
        marginBottom: 50,
    },
});

export default SearchCity;