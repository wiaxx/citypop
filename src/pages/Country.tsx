import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CityButton from '../components/CityButton';

export type Props = {
    route: any;
    navigation: any;
};

const Country: React.FC<Props> = ({
    route,
    navigation
}) => {
    const { value } = route.params;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);

    const fetchData = async (country: string) => {
        try {
            setLoading(true)
            const response = await fetch(`http://api.geonames.org/searchJSON?username=weknowit&q=${country}&name=${country}&maxRows=1&featureClass=A`);
            const data = await response.json();
            // if respone from first api request is greater than 0, make a new request with param from first response
            if (data.totalResultsCount > 0) {
                const newResponse = await fetch(`http://api.geonames.org/searchJSON?username=weknowit&country=${data.geonames[0].countryCode}&featureClass=P&maxRows=1000&cities=cities15000`)
                const newData = await newResponse.json();
                // sort response from highest population to smalest and slice array from index 0 - 3
                const cities = newData.geonames.sort((a: any, b: any) => a.population > b.population ? -1 : 1).slice(0, 3);
                setData(cities)
            }
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
                            <Text style={styles.title}>{value}</Text>
                            {data.map((city) => <CityButton key={city.geonameId} navigation={navigation} city={city.name} />)}

                        </>
                        : <Text style={styles.message}>Sorry, no country found. Please try again</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        padding: 80,
        textAlign: 'center',
    },
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
    message: {
        fontSize: 20,
        padding: 80,
        textAlign: 'center',
    }
});

export default Country;