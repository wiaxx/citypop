import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchCountry = ({ navigation }: { navigation: any }) => {
    const [value, setValue] = useState('')

    const validateInput = () => {
        if (value.trim() === '') {
            Alert.alert('Alert', 'Please enter a city');
            setValue('');
            return;
        }
        navigation.navigate('Country', { value: value })
        setValue('');
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>SEARCH BY COUNTRY</Text>
                <TextInput
                    placeholder='Enter a country'
                    onChangeText={newValue => setValue(newValue)}
                    defaultValue={value}
                    style={styles.txtInput} />
                {/* onPress, validate input and then go to Country page and make an api request if correct */}
                <TouchableOpacity onPress={validateInput}>
                    <AntDesign name="search1" size={34} color="black" style={styles.searchIcon} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    txtInput: {
        height: 40,
        width: "98%",
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 28,
        padding: 80,
        textAlign: 'center',
    },
    searchIcon: {
        textAlign: 'center',
    }
});

export default SearchCountry;