/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SearchScreen = props => {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
});

