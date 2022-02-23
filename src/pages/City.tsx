import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const City = ({ route }: { route: any }) => {
    const { value } = route.params;

    console.log(value)
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
        }
    };

    useEffect(() => {
        fetchData(encodeURIComponent(value))
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>city</Text>
            <View>
                <Text>Population</Text>
                <Text>Antal</Text>
            </View>
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
    title: {
        fontSize: 28,
        marginBottom: 50,
    }
});

export default City;