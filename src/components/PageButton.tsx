import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export type Props = {
    text: string;
    navigateTo: string;
    navigation: any;
};

const PageButton: React.FC<Props> = ({
    text,
    navigateTo,
    navigation,
}) => {
    return (
        <TouchableOpacity style={styles.searchBtn} onPress={() => navigation.navigate(navigateTo)}>
            <Text style={styles.uppercase}>{text}</Text>
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
    uppercase: {
        textTransform: 'uppercase',
    }
})

export default PageButton;