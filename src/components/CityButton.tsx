import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export type Props = {
    city: any;
    navigation: any;
};

const CityButton: React.FC<Props> = ({
    city,
    navigation,
}) => {
    return (
        <TouchableOpacity style={styles.searchBtn} onPress={() => navigation.navigate('City', { value: city })}>
            <Text>{city}</Text>
        </TouchableOpacity>
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