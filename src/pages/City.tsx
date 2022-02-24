import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NumberFormat from 'react-number-format';

const City = ({ route }: { route: any }) => {
    const { value } = route.params;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async (city: string) => {
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
            {
                loading
                    ? <Text>Loading...</Text>
                    : <>
                        <Text style={styles.title}>{data.geonames[0].name}</Text>
                        <View style={styles.populationBox}>
                            <Text style={styles.smallTitle}>Population</Text>
                            <Text style={styles.population}>
                                <NumberFormat value={data.geonames[0].population}
                                    displayType={'text'}
                                    thousandSeparator={" "}
                                    allowNegative={false}
                                    fixedDecimalScale={true}
                                />
                            </Text>
                        </View>
                    </>
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
    populationBox: {
        width: '98%',
        height: 100,
        borderWidth: 1,
        borderColor: 'gray',
        display: 'flex',
        alignItems: 'center',
        margin: 2,
        padding: 14,
    },
    title: {
        fontSize: 28,
        marginBottom: 50,
    },
    smallTitle: {
        marginBottom: 14,
        textTransform: 'uppercase',

    },
    population: {
        fontSize: 24,
    }
});

export default City;