import React from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const City = () => {
    return (
        <View>
            <Text>SEARCH BY CITY</Text>
            <TextInput defaultValue='Enter a city' />
            <Pressable>
                <AntDesign name="search1" size={24} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default City;