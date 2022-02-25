import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export type Props = {
    city: any;
    navigation: any;
};

const CityButton: React.FC<Props> = ({
    city,
    navigation,
}) => {
    return (
        <Pressable style={styles.searchBtn} onPress={() => navigation.navigate('City', { value: city })}>
            <Text>{city}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
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
})

export default CityButton;