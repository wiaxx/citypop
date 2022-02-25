import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NumberFormat from 'react-number-format';

const City = ({ route }: { route: any }) => {
    const { value } = route.params;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);

    const fetchData = async (city: string) => {
        try {
            setLoading(true)
            const response = await fetch(`http://api.geonames.org/searchJSON?username=weknowit&name_startsWith=${city}&maxRows=1&featureClass=P`);
            const data = await response.json();
            setData(data.geonames);
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
                    : data.length > 0
                        ? <View>
                            <Text style={styles.title}>{data[0].name}</Text>
                            <View style={styles.populationBox}>
                                <Text style={styles.smallTitle}>Population</Text>
                                <Text style={styles.population}>
                                    <NumberFormat
                                        value={data[0].population}
                                        displayType={'text'}
                                        thousandSeparator={" "}
                                        allowNegative={false}
                                        fixedDecimalScale={true}
                                        renderText={value => <Text>{value}</Text>}
                                    />
                                </Text>
                            </View>
                        </View>
                        : <Text>Sorry, no city found. Please try again</Text>
            }
        </View >
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