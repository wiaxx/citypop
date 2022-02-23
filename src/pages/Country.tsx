import React from 'react';
import { StyleSheet, View} from 'react-native';
import Input from '../components/Input';
import useFetch from '../hooks/useFetch';

const Country = () => {

    const { loading, data, error } = useFetch('http://api.geonames.org/searchJSON?q=Norway&name=Norway&maxRows=1&username=weknowit')
    // if (loading) return <h1>Loading ...</h1>
    // if (error) return <pre>JSON.stringify(error, null, 2)</pre>


    return (
        <View style={styles.container}>
            <Input title="SEARCH BY COUNTY" placeholder="Enter a country" />
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
});

export default Country;