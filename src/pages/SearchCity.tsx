import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchCity = ( {navigation}: {navigation: any}) => {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // &featureCode=PPLORfeatureCode=PPLAORfeatureCode=PPLA2ORfeatureCode=PPLA3ORfeatureCode=PPLA4ORfeatureCode=PPLA5

    const fetchData = async (city: string) => {
        console.log(encodeURIComponent(city))
        try {
            setLoading(true)
            const response = await fetch(`http://api.geonames.org/searchJSON?username=weknowit&name_startsWith=${city}&maxRows=1&featureClass=P`);
            const data = await response.json();
            setData(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
            setValue('')
        }
    };

    // useEffect(() => {
    //   fetchData();
    // }, [param])

    const test = (input: any) => {
        console.log('works ' + input)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SEARCH BY CITY</Text>
            <TextInput
                placeholder='Enter a city'
                onChangeText={newValue => setValue(newValue)}
                defaultValue={value}
                style={styles.txtInput} />
            <Pressable onPress={() => navigation.navigate('City', {value: 'test'})}>
                <AntDesign name="search1" size={24} color="black" />
            </Pressable>

            {
                // () => fetchData(encodeURIComponent(value))
                // loading 
                //   ? <Text>Loading...</Text>
                //   : <Text>{data.geonames[0].name}, {data.geonames[0].population}</Text>
            }
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