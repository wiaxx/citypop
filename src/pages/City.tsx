import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NumberFormat from 'react-number-format';

const City = ({ route }: { route: any }) => {
    // destructuring params from searchCity-page, use for fetch city
    const { value } = route.params;
    // states for api request
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
        // use encodeURIComponent to replace certain characteres
        fetchData(encodeURIComponent(value))
    }, [])

    return (
        <View style={styles.container}>
            {
                loading
                    ? <Text style={styles.message}>Loading...</Text>
                    : data.length > 0
                        ? <>
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
                        </>
                        : <Text style={styles.message}>Sorry, no city found. Please try again</Text>
            }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
        padding: 80,
        textAlign: 'center',
    },
    smallTitle: {
        marginBottom: 14,
        textTransform: 'uppercase',
    },
    population: {
        fontSize: 24,
    },
    message: {
        fontSize: 20,
        padding: 80,
        textAlign: 'center',
    }
});

export default City;